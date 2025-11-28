/**
 * Types for Fandom's Articles API.
 */

/**
 * Represents detailed information about a Fandom article.
 */
export interface FandomArticleDetails {
  id: number;
  title: string;
  url: string;
  wikiId: number;
  revision: number;
  lastUpdated: string; // ISO 8601
  author?: string;
  abstract?: string;
}

/**
 * Represents the response containing a list of article details.
 */
export interface FandomArticlesResponse {
  items: FandomArticleDetails[];
  total: number;
}
