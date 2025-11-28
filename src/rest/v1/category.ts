/**
 * Types for MediaWiki REST API Category endpoints.
 */

/**
 * Represents a category object.
 */
export interface MWCategory {
  id: number;
  key: string;
  title: string;
  pages?: MWCategoryPage[];
}

/**
 * Represents a page within a category.
 */
export interface MWCategoryPage {
  id: number;
  key: string;
  title: string;
  url: string;
}

/**
 * Represents the response containing a list of categories.
 */
export interface MWCategoryResponse {
  items: MWCategory[];
  total: number;
}
