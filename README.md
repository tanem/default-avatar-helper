# avatar

[![npm version](https://img.shields.io/npm/v/@tanem/avatar.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/avatar)
[![build status](https://img.shields.io/travis/tanem/avatar/master.svg?style=flat-square)](https://travis-ci.org/tanem/avatar)
[![coverage status](https://img.shields.io/codecov/c/github/tanem/avatar.svg?style=flat-square)](https://codecov.io/gh/tanem/avatar)
[![npm downloads](https://img.shields.io/npm/dm/@tanem/avatar.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/avatar)
[![size](http://img.badgesize.io/https://unpkg.com/@tanem/avatar/dist/@tanem/avatar.umd.production.js?label=size&style=flat-square)](https://unpkg.com/@tanem/avatar/dist/)
[![gzip-size](http://img.badgesize.io/https://unpkg.com/@tanem/avatar/dist/@tanem/avatar.umd.production.js?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/@tanem/avatar/dist/)

> Generate default avatar details.

## Usage

```ts
import { getAvatarDetails } from '@tanem/avatar'

const palette = ['red', 'green', 'blue']
const name = 'random name'

// Providing both arguments at once will return a result object straight away:
const { colour, initials } = getAvatarDetails(palette, name)

// Alternatively, since `getAvatarDetails` is curried, you can do:
const getAvatarDetailsWithPalette = getAvatarDetails(palette)
const { colour, initials } = getAvatarDetailsWithPalette(name)
```

The following live examples show how `colour` and `initials` can be used to
create a default avatar.

## Live Examples

TODO.

## API

### getAvatarDetails(palette, colour)

**Arguments**

- `palette` - An array of strings representing the colour palette to use.
- `name` - A string representing a user name.

**Returns**

If less than two arguments have been provided, a function accepting the
remaining argument.

If both arguments have been provided, an object containing the properties defined
below:

- `colour` - A colour string.
- `initials` - The user initials string.

**Example**

```ts
const palette = ['red', 'green', 'blue']
const name = 'random name'

// Providing both arguments at once.
const { colour, initials } = getAvatarDetails(palette, name)

// Making use of currying.
const getAvatarDetailsWithPalette = getAvatarDetails(palette)
const { colour, initials } = getAvatarDetailsWithPalette(name)
```

## Installation

```
$ npm install @tanem/avatar
```

There are also UMD builds available via [unpkg](https://unpkg.com/):

- https://unpkg.com/@tanem/avatar/dist/avatar.umd.development.js
- https://unpkg.com/@tanem/avatar/dist/avatar.umd.production.js

## License

MIT
