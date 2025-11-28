// Represents search results from MediaWiki REST API v1

export interface MWSearchResult {
  id: number;
  key: string;
  title: string;
  snippet: string;
  revision: number;
  url: string;
}

export interface MWSearchResponse {
  items: MWSearchResult[];
  total: number;
}
