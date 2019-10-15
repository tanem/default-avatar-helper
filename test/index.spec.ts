import { getAvatarDetails } from '../src'

const palette = ['red', 'green', 'blue']
const name = 'random name'

test('returns avatar details', () => {
  expect(getAvatarDetails(palette, name)).toEqual({
    initials: 'RN',
    colour: 'green'
  })

  const getAvatarDetailsWithPalette = getAvatarDetails(palette)
  expect(getAvatarDetailsWithPalette(name)).toEqual({
    initials: 'RN',
    colour: 'green'
  })
})
