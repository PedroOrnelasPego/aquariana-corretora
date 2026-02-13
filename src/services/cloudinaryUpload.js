export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_UPLOAD_PRESET = import.meta.env
  .VITE_CLOUDINARY_UPLOAD_PRESET;
export const CLOUDINARY_FOLDER =
  import.meta.env.VITE_CLOUDINARY_FOLDER || "imoveis";

export function isCloudinaryEnabled() {
  return Boolean(CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET);
}

export async function uploadImageToCloudinary({ file, folder, publicId }) {
  if (!isCloudinaryEnabled()) {
    throw new Error(
      "Cloudinary não configurado. Preencha VITE_CLOUDINARY_CLOUD_NAME e VITE_CLOUDINARY_UPLOAD_PRESET.",
    );
  }

  const url = `https://api.cloudinary.com/v1_1/${encodeURIComponent(
    CLOUDINARY_CLOUD_NAME,
  )}/image/upload`;

  const body = new FormData();
  body.append("file", file);
  body.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  body.append("folder", folder || CLOUDINARY_FOLDER);
  if (publicId) body.append("public_id", publicId);

  const res = await fetch(url, { method: "POST", body });
  if (!res.ok) {
    let text = "";
    try {
      text = await res.text();
    } catch {
      // ignore
    }
    throw new Error(
      `Falha no upload Cloudinary (${res.status}). ${text ? text : ""}`.trim(),
    );
  }

  const json = await res.json();
  return {
    url: json.secure_url || json.url,
    publicId: json.public_id,
  };
}
