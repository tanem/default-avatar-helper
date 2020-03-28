import { getDefaultAvatarDetails } from '../src'

const palette = ['red', 'green', 'blue']
const name = 'random name'

test('returns default avatar details', () => {
  expect(getDefaultAvatarDetails(palette, name)).toEqual({
    initials: 'RN',
    colour: 'green',
  })

  const getDefaultAvatarDetailsWithPalette = getDefaultAvatarDetails(palette)
  expect(getDefaultAvatarDetailsWithPalette(name)).toEqual({
    initials: 'RN',
    colour: 'green',
  })
})
