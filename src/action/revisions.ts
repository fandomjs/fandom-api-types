/**
 * Types for the MediaWiki Action API 'revisions' property.
 */

/**
 * Represents a single revision of a page.
 */
export interface MWRevision {
  revid: number;
  parentid?: number;
  minor?: boolean;
  user?: string;
  anon?: boolean;
  comment?: string;
  content?: string; // wikitext content
  timestamp: string; // ISO 8601
}

/**
 * Represents the response when querying for revisions.
 */
export interface MWRevisionsResponse {
  batchcomplete?: string;
  query?: {
    pages: Record<string, { revisions: MWRevision[] }>;
  };
}
