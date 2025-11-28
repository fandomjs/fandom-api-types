/**
 * Types for MediaWiki REST API Media endpoints.
 */

/**
 * Represents a media item (image, video, etc.).
 */
export interface MWMedia {
  id: number;
  title: string;
  type: "image" | "video" | "audio" | "other";
  url: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  size?: number; // bytes
}

/**
 * Represents the response containing a list of media items.
 */
export interface MWMediaResponse {
  items: MWMedia[];
  total: number;
}
