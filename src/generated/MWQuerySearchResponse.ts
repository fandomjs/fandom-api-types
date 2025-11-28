// This file is auto-generated from JSON data. Do not edit manually.

export interface MWQuerySearchResponse {
  batchcomplete?: string;
  continue?: {
    sroffset?: number;
    continue?: string;
    [k: string]: unknown;
  };
  query?: {
    search?: {
      ns?: number;
      title?: string;
      pageid?: number;
      size?: number;
      wordcount?: number;
      snippet?: string;
      timestamp?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
