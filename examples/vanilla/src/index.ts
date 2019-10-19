import { getDefaultAvatarDetails } from 'default-avatar-helper'

const palette = ['red', 'green', 'blue']
const names = ['John Smith', 'Jane Doe', 'Rob George']

const getDefaultAvatarDetailsWithPalette = getDefaultAvatarDetails(palette)

const html = names.reduce((html, name) => {
  const { colour, initials } = getDefaultAvatarDetailsWithPalette(name)
  return (
    html +
    `<div
      style="
        align-items:center;
        background-color:${colour};
        border-radius:50%;
        color:white;
        display:flex;
        font-size:40px;
        height:96px;
        justify-content:center;
        width:96px;
      ">
      ${initials}
    </div>`
  )
}, '')

document.getElementById('app').innerHTML = html
