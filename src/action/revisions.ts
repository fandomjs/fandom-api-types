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

export interface MWRevisionsResponse {
  batchcomplete?: string;
  query?: {
    pages: Record<string, { revisions: MWRevision[] }>;
  };
}
