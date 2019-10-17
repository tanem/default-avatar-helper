# default-avatar-helper

[![npm version](https://img.shields.io/npm/v/default-avatar-helper.svg?style=flat-square)](https://www.npmjs.com/package/default-avatar-helper)
[![build status](https://img.shields.io/travis/tanem/default-avatar-helper/master.svg?style=flat-square)](https://travis-ci.org/tanem/default-avatar-helper)
[![coverage status](https://img.shields.io/codecov/c/github/tanem/default-avatar-helper.svg?style=flat-square)](https://codecov.io/gh/tanem/default-avatar-helper)
[![npm downloads](https://img.shields.io/npm/dm/default-avatar-helper.svg?style=flat-square)](https://www.npmjs.com/package/default-avatar-helper)
[![size](http://img.badgesize.io/https://unpkg.com/default-avatar-helper/dist/default-avatar-helper.umd.production.js?label=size&style=flat-square)](https://unpkg.com/default-avatar-helper/dist/)
[![gzip-size](http://img.badgesize.io/https://unpkg.com/default-avatar-helper/dist/default-avatar-helper.umd.production.js?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/default-avatar-helper/dist/)

> A helper for creating default avatars.

## Usage

```ts
import { getDefaultAvatarDetails } from 'default-avatar-helper'

const palette = ['red', 'green', 'blue']
const name = 'random name'

// Providing both arguments at once will return a result object straight away:
const { colour, initials } = getDefaultAvatarDetails(palette, name)

// Alternatively, since `getDefaultAvatarDetails` is curried, you can do
// something like:
const getDefaultAvatarDetailsWithPalette = getDefaultAvatarDetails(palette)
const { colour, initials } = getDefaultAvatarDetailsWithPalette(name)
```

The following live examples show how `colour` and `initials` can be used to
create a default avatar.

## Live Examples

TODO.

## API

### getDefaultAvatarDetails(palette, colour)

**Arguments**

- `palette` - An array of strings representing the colour palette to use.
- `name` - A string representing a user name.

**Returns**

If less than two arguments have been provided, returns a function accepting the
remaining argument.

If both arguments have been provided, returns an object containing the
properties defined below:

- `colour` - A colour string.
- `initials` - The user initials string.

**Example**

```ts
const palette = ['red', 'green', 'blue']
const name = 'random name'

// Providing both arguments at once.
const { colour, initials } = getDefaultAvatarDetails(palette, name)

// Making use of currying.
const getDefaultAvatarDetailsWithPalette = getDefaultAvatarDetails(palette)
const { colour, initials } = getDefaultAvatarDetailsWithPalette(name)
```

## Installation

```
$ npm install default-avatar-helper
```

There are also UMD builds available via [unpkg](https://unpkg.com/):

- https://unpkg.com/default-avatar-helper/dist/default-avatar-helper.umd.development.js
- https://unpkg.com/default-avatar-helper/dist/default-avatar-helper.umd.production.js

## License

MIT
