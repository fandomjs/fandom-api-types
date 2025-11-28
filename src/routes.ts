export const Routes = {
  /** MediaWiki REST API v1 */
  rest: {
    page: (wikiBase: string, title: string) =>
      `${wikiBase}/w/rest.php/v1/page/${encodeURIComponent(title)}`,
    search: (wikiBase: string, query: string, limit?: number) => {
      const params = new URLSearchParams({ q: query });
      if (limit) params.set("limit", limit.toString());
      return `${wikiBase}/w/rest.php/v1/search?${params.toString()}`;
    },
    siteInfo: (wikiBase: string) =>
      `${wikiBase}/w/rest.php/v1/metadata/siteinfo`,
  },

  /** MediaWiki Action API (api.php) */
  action: {
    query: (wikiBase: string, params: Record<string, string | number>) => {
      const searchParams = new URLSearchParams();
      for (const key in params) searchParams.set(key, params[key].toString());
      searchParams.set("format", "json"); // always JSON
      return `${wikiBase}/w/api.php?${searchParams.toString()}`;
    },

    parse: (wikiBase: string, title: string, options?: { prop?: string }) => {
      const params = new URLSearchParams({
        action: "parse",
        page: title,
        format: "json",
      });
      if (options?.prop) params.set("prop", options.prop);
      return `${wikiBase}/w/api.php?${params.toString()}`;
    },

    edit: (wikiBase: string, title: string) => {
      const params = new URLSearchParams({
        action: "edit",
        title,
        format: "json",
      });
      return `${wikiBase}/w/api.php?${params.toString()}`;
    },

    revisions: (wikiBase: string, title: string, limit?: number) => {
      const params = new URLSearchParams({
        action: "query",
        prop: "revisions",
        titles: title,
        format: "json",
      });
      if (limit) params.set("rvlimit", limit.toString());
      return `${wikiBase}/w/api.php?${params.toString()}`;
    },
  },

  /** Fandom-specific endpoints */
  fandom: {
    articlesDetails: (wikiBase: string, ids: number[]) =>
      `${wikiBase}/api/v1/Articles/Details?ids=${ids.join(",")}`,

    discussionPosts: (wikiBase: string, threadId: string, limit?: number) => {
      const params = new URLSearchParams();
      params.set("threadId", threadId);
      if (limit) params.set("limit", limit.toString());
      return `${wikiBase}/wikia.php?controller=DiscussionPost&method=getPosts&${params.toString()}`;
    },

    userDetails: (wikiBase: string, userId: string) =>
      `${wikiBase}/api/v1/User/Details?ids=${userId}`,

    feed: (wikiBase: string, type?: string, limit?: number) => {
      const params = new URLSearchParams();
      if (type) params.set("type", type);
      if (limit) params.set("limit", limit.toString());
      return `${wikiBase}/api/v1/Activity/Feeds?${params.toString()}`;
    },
  },
};
