/**
 * Basic type checking tests to ensure generated types are exported correctly.
 * This file is not meant to be run as a unit test suite, but rather to verify type compilation.
 */

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
