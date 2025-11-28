import { Generated } from "../src/index.js";

// Test that types are exported and usable
const parseResponse: Generated.MWParseResponse = {
  parse: {
    title: "Test Page",
    pageid: 123,
    text: {
      "*": "Some content",
    },
  },
};

const searchResponse: Generated.MWQuerySearchResponse = {
  query: {
    search: [
      {
        title: "Result 1",
        pageid: 456,
      },
    ],
  },
};

const articleDetails: Generated.FandomArticlesDetailsResponse = {
  items: {
    "123": {
      id: 123,
      title: "Test Article",
      url: "/wiki/Test_Article",
    },
  },
  basepath: "https://test.fandom.com",
};

console.log("Types check passed!");
