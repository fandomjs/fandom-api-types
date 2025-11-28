# fandom-api-types

TypeScript typings for the Fandom & MediaWiki APIs.

- ✔ MediaWiki REST API (v1)
- ✔ MediaWiki Action API
- ✔ Fandom-specific endpoints
- ✔ Zero-runtime, clean type exports

Inspired by `discord-api-types`, this package provides a stable,
versioned type layer for building API clients and tooling.

## Install

```bash
npm install fandom-api-types
# or
yarn add fandom-api-types
# or
pnpm add fandom-api-types
# or
bun add fandom-api-types
```

## Usage

```ts
import { Rest, Action, Fandom, Generated, Routes } from "fandom-api-types";

// REST API types
const page: Rest.Page = {
  id: 12345,
  key: "Example_Page",
  title: "Example Page",
  // ...
};

// Action API types
const query: Action.MWQueryResponse = {
  batchcomplete: "",
  query: {
    pages: {
      "123": { pageid: 123, title: "Foo", ns: 0 }
    }
  }
};

// Fandom-specific types
const user: Fandom.FandomUser = {
  id: "1",
  name: "Admin",
  avatar: "https://..."
};

// Auto-generated types from live API responses
const searchResult: Generated.MWQuerySearchResponse = {
  query: {
    search: [
      { title: "Result", pageid: 1 }
    ]
  }
};

// Route helpers
const url = Routes.rest.page("https://community.fandom.com", "Main_Page");
// -> "https://community.fandom.com/w/rest.php/v1/page/Main_Page"
```

## Documentation
Documentation for the ``fandom-api-types`` package can be found at:
- [fandom-api-types Documentation](https://fandom.js.org/docs/fandom-api-types/)

API documentation can be found at the following links:
- [MediaWiki REST API](https://www.mediawiki.org/wiki/API:REST_API)
- [MediaWiki Action API](https://www.mediawiki.org/wiki/API:Main_page)
- [Fandom API Documentation](https://fandom-dev.fandom.com/wiki/Fandom_API_Documentation)