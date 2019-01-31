[![Build Status](https://travis-ci.com/UnlyEd/utils.svg?branch=master)](https://travis-ci.com/UnlyEd/utils)
[![Maintainability](https://api.codeclimate.com/v1/badges/033f68d67ea81b7fee18/maintainability)](https://codeclimate.com/github/UnlyEd/utils/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/033f68d67ea81b7fee18/test_coverage)](https://codeclimate.com/github/UnlyEd/utils/test_coverage)

# Unly Utils

This is a utility library which contains various helpers.
This repository was created because those helpers are used amongst several projects and were copy/pasted, which is a bad practice.

<!-- toc -->

- [Getting started](#getting-started)
- [API](#api)
- [Contributing](#contributing)
  * [Getting started](#getting-started-1)
  * [Test](#test)
  * [Releasing and publishing](#releasing-and-publishing)
- [License](#license)

<!-- tocstop -->

## Getting started

npm or yarn

```
yarn add @unly/utils
```

Usage example:

```
const { isBrowser, convertLineBreaks, browserRedirect } = require('unly-utils');
```

## API

[API](./API.md)

---

## Contributing

We gladly accept PRs, but please open an issue first so we can discuss it beforehand.

### Getting started

```
yarn start # Shortcut - Runs linter + build + tests in concurrent mode (watch mode)

OR run each process separately for finer control

yarn lint
yarn build
yarn test
```

### Test

```
yarn test # Run all tests, interactive and watch mode
yarn test:once
yarn test:coverage
```

### Releasing and publishing

```
yarn releaseAndPublish # Shortcut - Will prompt for bump version, commit, create git tag, push commit/tag and publish to NPM

yarn release # Will prompt for bump version, commit, create git tag, push commit/tag
npm publish # Will publish to NPM
```

## License

MIT
