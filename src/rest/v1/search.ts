/**
 * Types for MediaWiki REST API Search endpoints.
 */

/**
 * Represents a single search result.
 */
export interface MWSearchResult {
  id: number;
  key: string;
  title: string;
  snippet: string;
  revision: number;
  url: string;
}

/**
 * Represents the response containing search results.
 */
export interface MWSearchResponse {
  items: MWSearchResult[];
  total: number;
}
