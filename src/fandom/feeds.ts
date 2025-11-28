export interface FandomFeedItem {
  id: string;
  title: string;
  url: string;
  type: "article" | "discussion" | "news" | "other";
  createdAt: string; // ISO 8601
  updatedAt?: string; // ISO 8601
  author?: string;
}

export interface FandomFeedsResponse {
  items: FandomFeedItem[];
  total: number;
}
