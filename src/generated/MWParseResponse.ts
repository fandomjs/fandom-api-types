// This file is auto-generated from JSON data. Do not edit manually.

export interface MWParseResponse {
  parse?: {
    title?: string;
    pageid?: number;
    revid?: number;
    text?: {
      "*"?: string;
      [k: string]: unknown;
    };
    langlinks?: {
      lang?: string;
      url?: string;
      langname?: string;
      autonym?: string;
      "*"?: string;
      [k: string]: unknown;
    }[];
    categories?: {
      sortkey?: string;
      hidden?: string;
      "*"?: string;
      [k: string]: unknown;
    }[];
    links?: {
      ns?: number;
      exists?: string;
      "*"?: string;
      [k: string]: unknown;
    }[];
    templates?: {
      ns?: number;
      exists?: string;
      "*"?: string;
      [k: string]: unknown;
    }[];
    images?: string[];
    externallinks?: string[];
    sections?: {
      toclevel?: number;
      level?: string;
      line?: string;
      number?: string;
      index?: string;
      fromtitle?: string;
      byteoffset?: number;
      anchor?: string;
      linkAnchor?: string;
      [k: string]: unknown;
    }[];
    showtoc?: string;
    parsewarnings?: unknown[];
    displaytitle?: string;
    iwlinks?: {
      prefix?: string;
      url?: string;
      "*"?: string;
      [k: string]: unknown;
    }[];
    properties?: {
      name?: string;
      "*"?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
