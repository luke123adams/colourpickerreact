import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { palette } from '../myPalettes'
import { Link } from "react-router-dom";

const del = <i className="fa-sharp fa-solid fa-trash"></i>
const brush = <i className="fa-solid fa-brush"></i>
const paletteIcon = <i className="fa-solid fa-palette"></i>

export default function Palette() {
    const {id} = useParams()
    const initialPalette = palette.find(pal => pal.name === id)

    // state

    const [myPalette, setMyPalette] = React.useState(initialPalette)

    console.log(myPalette)

  return (
    <PaletteStyled>
    <div className="header-items">
        <div className="link-con">
            <Link to={'/'}>&larr;&nbsp; Back</Link>
        </div>
        <div className="select-type">
            <select >
                <option value="hex">HEX</option>
                <option value="rgb">RGB</option>
            </select>
        </div>
        <div className="right">
            <button className="btn-icon">
                {paletteIcon}
            </button>
            <button className="btn-icon">{brush}</button>
        </div>
    </div>
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
            z-zIndex: 5;
            align-items: center;
            justify-content: center;
            position: relative;
        }
    }
`;
