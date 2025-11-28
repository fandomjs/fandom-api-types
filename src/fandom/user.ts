/**
 * Types for Fandom's User API.
 */

/**
 * Represents a Fandom user.
 */
export interface FandomUser {
  id: string;
  name: string;
  url?: string;
  avatar?: string;
  registration?: string; // ISO 8601
  groups?: string[];
  karma?: number;
}

/**
 * Represents the response containing a list of users.
 */
export interface FandomUsersResponse {
  items: FandomUser[];
  total: number;
}
