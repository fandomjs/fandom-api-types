// This file is auto-generated from JSON data. Do not edit manually.

export interface MWQuerySiteInfoResponse {
  batchcomplete?: string;
  query?: {
    general?: {
      mainpage?: string;
      base?: string;
      sitename?: string;
      logo?: string;
      generator?: string;
      phpversion?: string;
      phpsapi?: string;
      dbtype?: string;
      dbversion?: string;
      externalimages?: string[];
      langconversion?: string;
      linkconversion?: string;
      titleconversion?: string;
      linkprefixcharset?: string;
      linkprefix?: string;
      linktrail?: string;
      legaltitlechars?: string;
      invalidusernamechars?: string;
      fixarabicunicode?: string;
      fixmalayalamunicode?: string;
      case?: string;
      lang?: string;
      fallback?: unknown[];
      fallback8bitEncoding?: string;
      writeapi?: string;
      maxarticlesize?: number;
      timezone?: string;
      timeoffset?: number;
      articlepath?: string;
      scriptpath?: string;
      script?: string;
      variantarticlepath?: boolean;
      server?: string;
      servername?: string;
      wikiid?: string;
      time?: string;
      misermode?: string;
      uploadsenabled?: string;
      maxuploadsize?: number;
      minuploadchunksize?: number;
      galleryoptions?: {
        imagesPerRow?: number;
        imageWidth?: number;
        imageHeight?: number;
        captionLength?: string;
        showBytes?: string;
        showDimensions?: string;
        mode?: string;
        [k: string]: unknown;
      };
      thumblimits?: number[];
      imagelimits?: {
        width?: number;
        height?: number;
        [k: string]: unknown;
      }[];
      favicon?: string;
      centralidlookupprovider?: string;
      allcentralidlookupproviders?: string[];
      interwikimagic?: string;
      magiclinks?: {
        ISBN?: string;
        [k: string]: unknown;
      };
      categorycollation?: string;
      nofollowlinks?: string;
      nofollownsexceptions?: unknown[];
      nofollowdomainexceptions?: string[];
      externallinktarget?: string;
      citeresponsivereferences?: string;
      directedatchildren?: string;
      gamepedia?: string;
      mobileserver?: string;
      [k: string]: unknown;
    };
    namespaces?: {
      [k: string]: {
        id?: number;
        case?: string;
        subpages?: string;
        content?: string;
        "*"?: string;
        [k: string]: unknown;
      };
    };
    statistics?: {
      pages?: number;
      articles?: number;
      edits?: number;
      images?: number;
      users?: number;
      activeusers?: number;
      admins?: number;
      jobs?: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
