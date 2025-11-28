/**
 * Types for the MediaWiki Action API 'parse' action.
 */

/**
 * Represents the response from a parse action.
 */
export interface MWParseResponse {
  parse: {
    title: string;
    pageid: number;
    wikitext?: string;
    text?: string; // HTML
    categories?: { [key: string]: unknown }[];
    links?: { ns: number; exists: string; "*"?: string }[];
  };
}
