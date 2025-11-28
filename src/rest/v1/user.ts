export interface MWUser {
  id: number;
  name: string;
  url?: string;
  registration?: string; // ISO 8601
  groups?: string[];
  avatar?: string;
}

export interface MWUsersResponse {
  items: MWUser[];
  total: number;
}
