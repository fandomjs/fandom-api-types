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

export interface MWMediaResponse {
  items: MWMedia[];
  total: number;
}
