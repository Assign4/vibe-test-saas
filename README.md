# vibe-test-saas

This repository contains demo UI and API tests using [Playwright](https://playwright.dev/) and [PactumJS](https://pactumjs.github.io/).

## Setup

Install dependencies:

```bash
npm install
```

## Running Tests

- **UI Tests**: `npm run test:ui`
- **API Tests**: `npm run test:api`
- **All Tests**: `npm test`

The UI test opens `https://example.com` and verifies the page title. The API test fetches a sample post from `jsonplaceholder.typicode.com` and checks the response.
