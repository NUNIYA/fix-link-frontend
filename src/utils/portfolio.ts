import { getImageUrl } from "../api/auth.api";

export type PortfolioDisplayItem = {
  id?: number | string;
  title: string;
  type: "image" | "file";
  url: string | null;
  img: string | null;
  file: File | null;
};

/** Normalize API portfolio rows for profile UI (customer + professional). */
export function normalizePortfolioFiles(raw: unknown): PortfolioDisplayItem[] {
  if (!raw) return [];
  const portfolioArray = Array.isArray(raw) ? raw : [];
  return portfolioArray.map((item: any) => {
    if (item.url || item.img) {
      const url = getImageUrl(item.url || item.img) || item.url || item.img;
      return {
        ...item,
        url,
        img: url,
        type: item.type === "file" ? "file" : "image",
      };
    }

    const fileUrl = item.file_url || item.file || "";
    const cleanUrl = getImageUrl(fileUrl) || fileUrl;
    const isImage = /\.(jpg|jpeg|png|gif|webp|svg|bmp)($|\?)/i.test(cleanUrl);

    let fileName = "Portfolio work";
    try {
      const decodedUrl = decodeURIComponent(cleanUrl);
      const parts = decodedUrl.split("/");
      const lastPart = parts[parts.length - 1];
      if (lastPart) fileName = lastPart.split("?")[0];
    } catch {
      // ignore
    }

    return {
      id: item.id,
      title: item.title || fileName,
      type: isImage ? "image" : "file",
      url: cleanUrl || null,
      img: cleanUrl || null,
      file: null,
    };
  });
}

export function mapUploadedPortfolioRows(
  uploaded: any[],
  filesByName?: Map<string, File>,
): PortfolioDisplayItem[] {
  return uploaded.map((row) => {
    const url = getImageUrl(row.file_url || row.file) || row.file_url || row.file;
    const matchedFile = filesByName?.get(
      String(row.file || row.file_url || "").split("/").pop()?.split("?")[0] || "",
    );
    const file = matchedFile || null;
    const isImage =
      (file && file.type.startsWith("image/")) ||
      /\.(jpg|jpeg|png|gif|webp|svg|bmp)($|\?)/i.test(url || "");

    return {
      id: row.id,
      title: row.title || file?.name || "Portfolio work",
      type: isImage ? "image" : "file",
      url: url || null,
      img: url || null,
      file,
    };
  });
}
