# unly-utils

This project is a transversal project, which aims to gather and share different tools to improve the scalability between different projects

Install:

npm or yarn

```
npm install https://github.com/UnlyEd/unly-utils.git
```

Use:

```
const { isBrowser } = require('unly-utils');
```

Library:

|   | param(s)         | return |
| :--------------- |:---------------:| :-----:|
| isBrowser |          | Boolean |
| convertLineBreaks  | string, replacer | string |
| browserRedirect  | object { url, target } | string |

## Development

### lint

```
yarn run lint
```

### Test

Run once:
```
yarn run test:once
```

Watch:
```
yarn test
```

Coverage:
```
yarn run test:coverage
```

### Build

```
yarn run build
```
> Dir dist => Commonjs
