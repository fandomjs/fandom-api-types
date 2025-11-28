/**
 * Types for Fandom's Activity Feeds API.
 */

/**
 * Represents an item in the activity feed.
 */
export interface FandomFeedItem {
  id: string;
  title: string;
  url: string;
  type: "article" | "discussion" | "news" | "other";
  createdAt: string; // ISO 8601
  updatedAt?: string; // ISO 8601
  author?: string;
}

/**
 * Represents the response containing a list of feed items.
 */
export interface FandomFeedsResponse {
  items: FandomFeedItem[];
  total: number;
}
