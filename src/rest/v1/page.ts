/**
 * Types for MediaWiki REST API Page endpoints.
 */

/**
 * Represents a page object from the REST API.
 */
export interface MWRestPage {
  id: number;
  key: string;
  title: string;
  latest: number; // latest revision id
  revisions: MWRevisionSummary[];
  content?: string; // optional content
}

/**
 * Represents a summary of a page revision.
 */
export interface MWRevisionSummary {
  id: number;
  timestamp: string; // ISO 8601
  user?: string;
  comment?: string;
}
