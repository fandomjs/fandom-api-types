export interface FandomUser {
  id: string;
  name: string;
  url?: string;
  avatar?: string;
  registration?: string; // ISO 8601
  groups?: string[];
  karma?: number;
}

export interface FandomUsersResponse {
  items: FandomUser[];
  total: number;
}
