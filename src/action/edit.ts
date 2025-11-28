/**
 * Types for the MediaWiki Action API 'edit' action.
 */

/**
 * Represents the response from an edit action.
 */
export interface MWEditResponse {
  edit: {
    result: "Success" | "Failure";
    pageid: number;
    title: string;
    oldrevid?: number;
    newrevid?: number;
    contentmodel?: string;
    baserevid?: number;
  };
}
