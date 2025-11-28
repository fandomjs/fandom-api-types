export interface MWRestApiInfo {
  /** The version of the MediaWiki REST API */
  version: 1;
}

export type { MWRestPage, MWRevisionSummary } from "./page.js";
export type { MWSearchResult, MWSearchResponse } from "./search.js";
export type { MWSiteInfo } from "./site.js";
export type { MWRevision, MWRevisionsResponse } from "./revision.js";
export type {
  MWCategory,
  MWCategoryPage,
  MWCategoryResponse,
} from "./category.js";
export type { MWUser, MWUsersResponse } from "./user.js";
export type { MWMedia, MWMediaResponse } from "./media.js";
