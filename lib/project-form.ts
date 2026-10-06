export function createProjectSlug(title: string): string {
  return title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function selectCoverImage(images: string[], index: number): string[] {
  if (index < 0 || index >= images.length) return images;
  return [images[index], ...images.filter((_, i) => i !== index)];
}
