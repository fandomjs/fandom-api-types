export interface FandomDiscussionPost {
  id: string;
  threadId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string; // ISO 8601
  updatedAt?: string; // ISO 8601
  replyTo?: string; // parent post id
}

export interface FandomDiscussionThread {
  id: string;
  title: string;
  posts: FandomDiscussionPost[];
  createdAt: string;
  lastPostAt: string;
}

export interface FandomDiscussionResponse {
  threads: FandomDiscussionThread[];
  total: number;
}
