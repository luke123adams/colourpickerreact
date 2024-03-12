import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { palette } from '../myPalettes'


export default function Palette() {
    const {id} = useParams()
    const initialPalette = palette.find(pal => pal.name === id)

    // state

    const [myPalette, setMyPalette] = React.useState(initialPalette)

    console.log(myPalette)
  return (
    <PaletteStyled>
    <div className="colors">
        {myPalette.colors.map((color, index) => {
           return <div key={index}
            style={{background: color}} className="full-color"></div>
        })}
    </div>
    </PaletteStyled>
  )
}

const PaletteStyled = styled.div`
    position: relative;
    z-zIndex: 5;
    width: 100%;

    .colors{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
        height: 94vh;
        .full-color{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
    }
`;
