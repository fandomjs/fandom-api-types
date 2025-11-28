/**
 * Helper functions for constructing API URLs for various Fandom and MediaWiki endpoints.
 * Includes helpers for REST API, Action API, and Fandom-specific internal APIs.
 */
export const Routes = {
  /** MediaWiki REST API v1 endpoints */
  rest: {
    /**
     * Constructs the URL for fetching a specific page via REST API.
     * @param wikiBase - The base URL of the wiki (e.g., "https://community.fandom.com")
     * @param title - The title of the page
     */
    page: (wikiBase: string, title: string) =>
      `${wikiBase}/w/rest.php/v1/page/${encodeURIComponent(title)}`,

    /**
     * Constructs the URL for searching pages via REST API.
     * @param wikiBase - The base URL of the wiki
     * @param query - The search query string
     * @param limit - Optional limit on number of results
     */
    search: (wikiBase: string, query: string, limit?: number) => {
      const params = new URLSearchParams({ q: query });
      if (limit) params.set("limit", limit.toString());
      return `${wikiBase}/w/rest.php/v1/search?${params.toString()}`;
    },

    /**
     * Constructs the URL for fetching site information via REST API.
     * @param wikiBase - The base URL of the wiki
     */
    siteInfo: (wikiBase: string) =>
      `${wikiBase}/w/rest.php/v1/metadata/siteinfo`,
  },

  /** MediaWiki Action API (api.php) endpoints */
  action: {
    /**
     * Constructs a generic Action API query URL.
     * @param wikiBase - The base URL of the wiki
     * @param params - Key-value pairs of query parameters
     */
    query: (wikiBase: string, params: Record<string, string | number>) => {
      const searchParams = new URLSearchParams();
      for (const key in params) searchParams.set(key, params[key].toString());
      searchParams.set("format", "json"); // always JSON
      return `${wikiBase}/w/api.php?${searchParams.toString()}`;
    },

    /**
     * Constructs the URL for parsing content via Action API.
     * @param wikiBase - The base URL of the wiki
     * @param title - The title of the page to parse
     * @param options - Optional parsing options (e.g., specific properties to retrieve)
     */
    parse: (wikiBase: string, title: string, options?: { prop?: string }) => {
      const params = new URLSearchParams({
        action: "parse",
        page: title,
        format: "json",
      });
      if (options?.prop) params.set("prop", options.prop);
      return `${wikiBase}/w/api.php?${params.toString()}`;
    },

    /**
     * Constructs the URL for editing a page via Action API.
     * @param wikiBase - The base URL of the wiki
     * @param title - The title of the page to edit
     */
    edit: (wikiBase: string, title: string) => {
      const params = new URLSearchParams({
        action: "edit",
        title,
        format: "json",
      });
      return `${wikiBase}/w/api.php?${params.toString()}`;
    },

    /**
     * Constructs the URL for fetching page revisions via Action API.
     * @param wikiBase - The base URL of the wiki
     * @param title - The title of the page
     * @param limit - Optional limit on number of revisions
     */
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
    /**
     * Constructs the URL for fetching article details via Fandom API.
     * @param wikiBase - The base URL of the wiki
     * @param ids - Array of article IDs
     */
    articlesDetails: (wikiBase: string, ids: number[]) =>
      `${wikiBase}/api/v1/Articles/Details?ids=${ids.join(",")}`,

    /**
     * Constructs the URL for fetching discussion posts via Fandom API.
     * @param wikiBase - The base URL of the wiki
     * @param threadId - The ID of the discussion thread
     * @param limit - Optional limit on number of posts
     */
    discussionPosts: (wikiBase: string, threadId: string, limit?: number) => {
      const params = new URLSearchParams();
      params.set("threadId", threadId);
      if (limit) params.set("limit", limit.toString());
      return `${wikiBase}/wikia.php?controller=DiscussionPost&method=getPosts&${params.toString()}`;
    },

    /**
     * Constructs the URL for fetching user details via Fandom API.
     * @param wikiBase - The base URL of the wiki
     * @param userId - The ID of the user
     */
    userDetails: (wikiBase: string, userId: string) =>
      `${wikiBase}/api/v1/User/Details?ids=${userId}`,

    /**
     * Constructs the URL for fetching activity feeds via Fandom API.
     * @param wikiBase - The base URL of the wiki
     * @param type - Optional type of feed
     * @param limit - Optional limit on number of items
     */
    feed: (wikiBase: string, type?: string, limit?: number) => {
      const params = new URLSearchParams();
      if (type) params.set("type", type);
      if (limit) params.set("limit", limit.toString());
      return `${wikiBase}/api/v1/Activity/Feeds?${params.toString()}`;
    },
  },
};
