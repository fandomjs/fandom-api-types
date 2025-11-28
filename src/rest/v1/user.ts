/**
 * Types for MediaWiki REST API User endpoints.
 */

/**
 * Represents a user object from the REST API.
 */
export interface MWUser {
  id: number;
  name: string;
  url?: string;
  registration?: string; // ISO 8601
  groups?: string[];
  avatar?: string;
}

/**
 * Represents the response containing a list of users.
 */
export interface MWUsersResponse {
  items: MWUser[];
  total: number;
}
