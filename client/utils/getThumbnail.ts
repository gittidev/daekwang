import { DEFAULT_THUMBNAIL } from "../constants/thumbnail";

export function getThumbnail(src?: string | null): string {
  return src && src.trim() !== "" ? src : DEFAULT_THUMBNAIL;
}
