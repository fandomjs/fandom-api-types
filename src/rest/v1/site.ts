/**
 * Types for MediaWiki REST API Site Info endpoints.
 */

/**
 * Represents site information metadata.
 */
export interface MWSiteInfo {
  mainPage: string;
  baseUrl: string;
  sitename: string;
  generator: string;
  version: string;
}
