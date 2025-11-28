// This file is auto-generated from JSON data. Do not edit manually.

export interface FandomArticlesDetailsResponse {
  items?: {
    [k: string]: {
      id?: number;
      title?: string;
      ns?: number;
      url?: string;
      full_url?: string;
      revision?: {
        id?: number;
        user?: string;
        user_id?: number;
        timestamp?: string;
        [k: string]: unknown;
      };
      wiki_display_name?: string;
      type?: string;
      abstract?: string;
      thumbnail?: string;
      original_dimensions?: {
        width?: number;
        height?: number;
        [k: string]: unknown;
      };
      site_logo?: {
        thumbnail?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
  };
  basepath?: string;
  [k: string]: unknown;
}
