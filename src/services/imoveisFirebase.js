import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import imageCompression from "browser-image-compression";

import { auth, db, isFirebaseEnabled } from "../firebase/firebase";
import {
  isCloudinaryEnabled,
  uploadImageToCloudinary,
} from "./cloudinaryUpload";

function assertFirebaseEnabled() {
  if (!isFirebaseEnabled || !db) {
    throw new Error(
      "Firebase não configurado. Preencha as variáveis VITE_FIREBASE_* no .env.",
    );
  }
}

function normalizeDescription(text) {
  return String(text || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function docToImovel(docSnap) {
  const data = docSnap.data() || {};
  return {
    id: docSnap.id,
    ...data,
  };
}

async function compressIfImage(file) {
  if (!file) return null;
  if (!file.type?.startsWith("image/")) return file;

  return imageCompression(file, {
    maxSizeMB: 0.45,
    maxWidthOrHeight: 1400,
    useWebWorker: true,
    initialQuality: 0.8,
  });
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const current = nextIndex;
      nextIndex += 1;
      results[current] = await mapper(items[current], current);
    }
  }

  const workers = Array.from(
    { length: Math.min(concurrency, items.length) },
    () => worker(),
  );
  await Promise.all(workers);
  return results;
}

export async function listImoveisAdmin() {
  assertFirebaseEnabled();

  const q = query(collection(db, "imoveis"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(docToImovel);
}

export async function listImoveisPublic({ type } = {}) {
  assertFirebaseEnabled();

  const q = query(collection(db, "imoveis"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  const items = snap.docs.map(docToImovel);

  return items.filter((it) => {
    if (!it.active) return false;
    if (type && it.type !== type) return false;
    return true;
  });
}

export async function createImovel({
  title,
  type,
  descriptionText,
  price,
  active,
  imgCapaFile,
  imgCarouselFiles,
  onProgress,
}) {
  assertFirebaseEnabled();

  if (!isCloudinaryEnabled()) {
    throw new Error(
      "Upload de imagens: configure o Cloudinary no .env (VITE_CLOUDINARY_CLOUD_NAME e VITE_CLOUDINARY_UPLOAD_PRESET).",
    );
  }

  const imoveisRef = collection(db, "imoveis");

  const baseData = {
    title: String(title || "").trim(),
    type,
    description: normalizeDescription(descriptionText),
    price: price ? Number(price) : null,
    active: Boolean(active),
    imgCapaUrl: null,
    imgCapaPublicId: null,
    imgCarouselUrls: [],
    imgCarouselPublicIds: [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(imoveisRef, baseData);

  const totalCarousel = (imgCarouselFiles || []).length;
  const totalSteps = 1 + totalCarousel;
  const report = (done, label) => {
    if (typeof onProgress === "function") {
      onProgress({ done, total: totalSteps, label });
    }
  };

  report(0, "Comprimindo imagens...");

  const capaCompressed = await compressIfImage(imgCapaFile);
  const carouselCompressed = await mapWithConcurrency(
    imgCarouselFiles || [],
    2,
    async (f) => compressIfImage(f),
  );

  let capa = null;
  if (capaCompressed) {
    report(0, "Enviando imagem de capa...");
    capa = await uploadImageToCloudinary({
      file: capaCompressed,
      folder: `imoveis/${docRef.id}`,
      publicId: `capa-${Date.now()}`,
    });
  }

  let uploadedCount = capa ? 1 : 0;
  report(uploadedCount, "Enviando imagens do carrossel...");

  const carouselUploads = await mapWithConcurrency(
    carouselCompressed.filter(Boolean),
    3,
    async (file) => {
      const uploaded = await uploadImageToCloudinary({
        file,
        folder: `imoveis/${docRef.id}/carousel`,
        publicId: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      });
      uploadedCount += 1;
      report(uploadedCount, "Enviando imagens do carrossel...");
      return uploaded;
    },
  );

  const update = {
    updatedAt: serverTimestamp(),
  };

  if (capa) {
    update.imgCapaUrl = capa.url;
    update.imgCapaPublicId = capa.publicId;
  }

  if (carouselUploads.length) {
    update.imgCarouselUrls = carouselUploads.map((u) => u.url);
    update.imgCarouselPublicIds = carouselUploads.map((u) => u.publicId);
  }

  await updateDoc(doc(db, "imoveis", docRef.id), update);

  report(totalSteps, "Concluído");
  return docRef.id;
}

export async function deleteImovel(imovel) {
  assertFirebaseEnabled();
  if (!imovel?.id) throw new Error("Imóvel inválido");

  const publicIds = [
    imovel.imgCapaPublicId,
    ...(imovel.imgCarouselPublicIds || []),
  ].filter(Boolean);

  if (publicIds.length) {
    if (!auth?.currentUser) {
      throw new Error("Você precisa estar logado para excluir imagens.");
    }
    const token = await auth.currentUser.getIdToken();

    const res = await fetch("/api/cloudinary/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ publicIds }),
    });

    if (!res.ok) {
      let msg = "";
      try {
        const json = await res.json();
        msg = json?.error || "";
      } catch {
        // ignore
      }

      if (res.status === 404) {
        throw new Error(
          "Falha ao apagar imagens no Cloudinary (404): rota /api/cloudinary/delete não encontrada. Em dev local, rode `npm run vercel:dev` (API em http://localhost:3000) + `npm run dev` (site em http://localhost:5173) e abra o site pelo 5173. O Vite vai encaminhar /api para o 3000.",
        );
      }
      throw new Error(
        `Falha ao apagar imagens no Cloudinary (${res.status}). ${msg}`.trim(),
      );
    }
  }

  await deleteDoc(doc(db, "imoveis", imovel.id));
}
