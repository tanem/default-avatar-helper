import {
  curry,
  flatMap,
  join,
  map,
  parseInt,
  pipe,
  slice,
  split,
  upperFirst,
  words
} from 'lodash/fp'

type Palette = string[]

const getInitials = pipe(
  words,
  map(upperFirst),
  flatMap(slice(0, 1)),
  slice(0, 2),
  join('')
)

const getCode = pipe(
  split(''),
  map(c => c.charCodeAt(0)),
  join(''),
  parseInt(10)
)

const getColour = (palette: Palette, initials: string) =>
  palette[getCode(initials) % palette.length]

export const getAvatarDetails = curry((palette: Palette, name: string) => {
  const initials = getInitials(name)
  const colour = getColour(palette, initials)
  return { colour, initials }
})
