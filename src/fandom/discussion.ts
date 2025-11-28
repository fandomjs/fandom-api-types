/**
 * Types for Fandom's Discussion API.
 */

/**
 * Represents a single post in a discussion thread.
 */
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

/**
 * Represents a discussion thread containing multiple posts.
 */
export interface FandomDiscussionThread {
  id: string;
  title: string;
  posts: FandomDiscussionPost[];
  createdAt: string;
  lastPostAt: string;
}

/**
 * Represents the response containing discussion threads.
 */
export interface FandomDiscussionResponse {
  threads: FandomDiscussionThread[];
  total: number;
}
