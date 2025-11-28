export interface MWCategory {
  id: number;
  key: string;
  title: string;
  pages?: MWCategoryPage[];
}

export interface MWCategoryPage {
  id: number;
  key: string;
  title: string;
  url: string;
}

export interface MWCategoryResponse {
  items: MWCategory[];
  total: number;
}
