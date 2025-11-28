export interface MWRevision {
  id: number;
  timestamp: string; // ISO 8601
  user?: string; // username
  anon?: boolean; // anonymous edit
  comment?: string;
  content?: string; // full revision content
}

export interface MWRevisionsResponse {
  items: MWRevision[];
  total: number;
}
