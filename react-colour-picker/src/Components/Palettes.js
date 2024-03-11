import React from 'react'
import { useState } from 'react'
import { palette } from './myPalettes'

export default function Palettes() {

    const [myPalettes, setMyPalettes] = useState(palette)

    console.log(myPalettes)
  return (
    <div>Palettes</div>
  )
}
