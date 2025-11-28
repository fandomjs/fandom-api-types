/**
 * Types for MediaWiki REST API Revision endpoints.
 */

/**
 * Represents a full revision object.
 */
export interface MWRevision {
  id: number;
  timestamp: string; // ISO 8601
  user?: string; // username
  anon?: boolean; // anonymous edit
  comment?: string;
  content?: string; // full revision content
}

/**
 * Represents the response containing a list of revisions.
 */
export interface MWRevisionsResponse {
  items: MWRevision[];
  total: number;
}
