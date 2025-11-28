// src/action/query.ts

import { MWRevision } from "../rest/v1/index.js";

export interface MWQueryPage {
  pageid: number;
  ns: number; // namespace
  title: string;
  contentmodel?: string;
  touched?: string; // last edited timestamp
  lastrevid?: number;
  revisions?: MWRevision[];
}

export interface MWQueryResult {
  pages: Record<string, MWQueryPage>;
}

export interface MWQueryResponse {
  batchcomplete?: string;
  query?: MWQueryResult;
}
