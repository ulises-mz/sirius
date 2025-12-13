import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidUrl(urlString: string) {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
}

/**
 * Transforms a Google Drive viewer URL into a direct image URL.
 * Also handles standard URLs by returning them as-is.
 */
export function getOptimizedImageUrl(url: string | undefined): string {
  if (!url) return "/images/placeholder.webp"; // Fallback image

  // If it's already a local path or NOT a google drive link, return as is
  if (!url.includes("drive.google.com")) {
    return url;
  }

  try {
    // Extract ID from: https://drive.google.com/file/d/1FR2VUtVXzfG0VP_fuW0V0poocPGGq4oB/view?usp=drive_link
    // ID is between /d/ and /view
    const match = url.match(/\/d\/([^/]+)/);
    if (match && match[1]) {
      const fileId = match[1];
      // Use Google Drive Thumbnail/Proxy URL which is faster and allows hotlinking
      // Alternatives: 
      // - https://drive.google.com/uc?export=view&id=ID (Official export, sometimes slower/rate limited)
      // - https://lh3.googleusercontent.com/d/ID (Often works better for CDN)
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  } catch (error) {
    console.warn("Failed to transform Drive URL:", url);
  }

  return url;
}
