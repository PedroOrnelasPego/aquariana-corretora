import { v2 as cloudinary } from "cloudinary";
import * as admin from "firebase-admin";

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function getEnvAny(names) {
  for (const name of names) {
    const value = process.env[name];
    if (value) return value;
  }
  return null;
}

function initFirebaseAdmin() {
  if (admin.apps?.length) return;

  const projectId = getEnvAny([
    "FIREBASE_ADMIN_PROJECT_ID",
    "FIREBASE_ADMIN_PROJECT_ID",
    "FIREBASE_PROJECT_ID",
  ]);
  const clientEmail = getEnvAny([
    "FIREBASE_ADMIN_CLIENT_EMAIL",
    "FIREBASE_ADMIN_CLIENT_EMAIL",
  ]);
  const privateKeyFromPlain = getEnvAny([
    "FIREBASE_ADMIN_PRIVATE_KEY",
    "FIREBASE_ADMIN_PRIVATE_KEY",
  ])?.replace(
    /\\n/g,
    "\n",
  );
  const privateKeyB64 = getEnvAny([
    "FIREBASE_ADMIN_PRIVATE_KEY_B64",
    "FIREBASE_ADMIN_PRIVATE_KEY_B64",
  ]);
  const privateKeyFromB64 = privateKeyB64
    ? Buffer.from(
        privateKeyB64,
        "base64",
      ).toString("utf8")
    : null;

  const privateKey = privateKeyFromPlain || privateKeyFromB64;

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Firebase Admin não configurado. Defina FIREBASE_ADMIN_PROJECT_ID, FIREBASE_ADMIN_CLIENT_EMAIL e (FIREBASE_ADMIN_PRIVATE_KEY ou FIREBASE_ADMIN_PRIVATE_KEY_B64) no ambiente do servidor (Vercel). Em dev local, o `vercel dev` usa env vars do seu PC (ex: .env.local), não as do painel da Vercel.",
    );
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

function initCloudinary() {
  cloudinary.config({
    cloud_name: getRequiredEnv("CLOUDINARY_CLOUD_NAME"),
    api_key: getRequiredEnv("CLOUDINARY_API_KEY"),
    api_secret: getRequiredEnv("CLOUDINARY_API_SECRET"),
    secure: true,
  });
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};
  return JSON.parse(raw);
}

function getBearerToken(req) {
  const header = req.headers?.authorization || req.headers?.Authorization;
  if (!header) return null;
  const match = String(header).match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : null;
}

async function assertAdminUser(req) {
  const token = getBearerToken(req);
  if (!token) {
    const err = new Error("Unauthorized");
    err.statusCode = 401;
    throw err;
  }

  initFirebaseAdmin();
  const decoded = await admin.auth().verifyIdToken(token);
  const adminEmail = process.env.ADMIN_EMAIL || process.env.VITE_ADMIN_EMAIL;

  if (!adminEmail || decoded?.email !== adminEmail) {
    const err = new Error("Forbidden");
    err.statusCode = 403;
    throw err;
  }

  return decoded;
}

function uniqueStrings(items) {
  return Array.from(new Set((items || []).filter(Boolean).map(String)));
}

function chunk(items, size) {
  const out = [];
  for (let i = 0; i < items.length; i += size)
    out.push(items.slice(i, i + size));
  return out;
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.statusCode = 405;
      res.setHeader("Allow", "POST");
      res.end("Method Not Allowed");
      return;
    }

    await assertAdminUser(req);
    initCloudinary();

    const body = await readJsonBody(req);
    const publicIds = uniqueStrings(body.publicIds);

    if (!publicIds.length) {
      res.status(400).json({ error: "publicIds é obrigatório" });
      return;
    }

    const parts = chunk(publicIds, 100);
    const results = [];
    for (const ids of parts) {
      // type=upload é o padrão para uploads
      // resource_type=image corresponde ao nosso fluxo
      // eslint-disable-next-line no-await-in-loop
      const result = await cloudinary.api.delete_resources(ids, {
        resource_type: "image",
        type: "upload",
      });
      results.push(result);
    }

    res.status(200).json({ ok: true, results });
  } catch (err) {
    const status = err?.statusCode || 500;
    res.status(status).json({
      error: err?.message || "Erro interno",
    });
  }
}
