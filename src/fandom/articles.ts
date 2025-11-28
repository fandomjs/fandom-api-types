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

export interface FandomArticlesResponse {
  items: FandomArticleDetails[];
  total: number;
}
