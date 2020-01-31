<a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>
[![Build Status](https://travis-ci.com/UnlyEd/utils.svg?branch=master)](https://travis-ci.com/UnlyEd/utils)
[![Maintainability](https://api.codeclimate.com/v1/badges/033f68d67ea81b7fee18/maintainability)](https://codeclimate.com/github/UnlyEd/utils/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/033f68d67ea81b7fee18/test_coverage)](https://codeclimate.com/github/UnlyEd/utils/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/UnlyEd/utils/badge.svg?targetFile=package.json)](https://snyk.io/test/github/UnlyEd/utils?targetFile=package.json)

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
- [Vulnerability disclosure](#vulnerability-disclosure)
- [Contributors and maintainers](#contributors-and-maintainers)
- [**[ABOUT UNLY]**](#about-unly-)

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

# Vulnerability disclosure

[See our policy](https://github.com/UnlyEd/Unly).

---

# Contributors and maintainers

This project is being maintained by:
- [Unly] Ambroise Dhenain ([Vadorequest](https://github.com/vadorequest)) **(active)**

Thanks to our contributors:
- Anthony Troupenat ([Fukoyamashisu](https://github.com/Fukoyamashisu))
---

# **[ABOUT UNLY]** <a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" height="40" align="right" alt="Unly logo" title="Unly logo" /></a>

> [Unly](https://unly.org) is a socially responsible company, fighting inequality and facilitating access to higher education. 
> Unly is committed to making education more inclusive, through responsible funding for students. 
We provide technological solutions to help students find the necessary funding for their studies. 

We proudly participate in many TechForGood initiatives. To support and learn more about our actions to make education accessible, visit : 
- https://twitter.com/UnlyEd
- https://www.facebook.com/UnlyEd/
- https://www.linkedin.com/company/unly
- [Interested to work with us?](https://jobs.zenploy.io/unly/about)

Tech tips and tricks from our CTO on our [Medium page](https://medium.com/unly-org/tech/home)!

#TECHFORGOOD #EDUCATIONFORALL
