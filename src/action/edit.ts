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
