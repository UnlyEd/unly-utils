# unly-utils

Guide lines to help improve version and publish to npm registry


> Before all you must have a npm account
---------

For publish to npm, you must sign in:
```
npm login
```


### Change Version of package

see https://docs.npmjs.com/cli/version.html
```
npm version X.X.X | major | minor | patch
```

example: if you want to change version to 1.0.1 in alpha tag version 0

```
npm version 1.0.1-alpha.0
```

### Publish

```
yarn run release:TAG
```

Where TAG is one of the following ( alpha, beta, latest )
