/**
 * Types for the MediaWiki Action API 'query' action.
 */

import { MWRevision } from "../rest/v1/index.js";

/**
 * Represents a page object returned by the query action.
 */
export interface MWQueryPage {
  pageid: number;
  ns: number; // namespace
  title: string;
  contentmodel?: string;
  touched?: string; // last edited timestamp
  lastrevid?: number;
  revisions?: MWRevision[];
}

/**
 * Represents the result object within a query response.
 */
export interface MWQueryResult {
  pages: Record<string, MWQueryPage>;
}

/**
 * Represents the top-level response from a query action.
 */
export interface MWQueryResponse {
  batchcomplete?: string;
  query?: MWQueryResult;
}
