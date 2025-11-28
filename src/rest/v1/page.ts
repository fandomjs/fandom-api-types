// Represents a page object returned by MediaWiki REST API v1

export interface MWRestPage {
  id: number;
  key: string;
  title: string;
  latest: number; // latest revision id
  revisions: MWRevisionSummary[];
  content?: string; // optional content
}

export interface MWRevisionSummary {
  id: number;
  timestamp: string; // ISO 8601
  user?: string;
  comment?: string;
}
