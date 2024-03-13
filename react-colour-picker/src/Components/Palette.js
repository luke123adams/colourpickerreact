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
    const [toRgb, setToRgb] = React.useState('hex')

    const toggleToRgb = (e) => {
        setToRgb(e.target.value)
    }

    const deleteColor = (index) => {
        const newColors = [...myPalette.colors]
        newColors.splice(index, 1)

        setMyPalette({...myPalette, colors: newColors})
        



    }

    const clear = (index) => {

    }

    const createColor = () => {

    }

    const handleColorChange = (color) => {

    }

  return (
    <PaletteStyled>
    <div className="header-items">
        <div className="link-con">
            <Link to={'/'}>&larr;&nbsp; Back</Link>
        </div>
        <div className="select-type">
            <select defaultValue="hex" onChange={(e)=>{toggleToRgb(e)}}>
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
            style={{background: color}} className="full-color">
                <h4>

                </h4>
                <button className="btn-icon" onClick={()=>{
                    deleteColor(index);
                }}>{del}</button>

            </div>
        })}
    </div>
    </PaletteStyled>
  )
}

const PaletteStyled = styled.div`
    position: relative;
    z-zIndex: 5;
    width: 100%;

    .btn-icon{
        outline: none;
        cursor: pointer;
        font-size: 1.5rem;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5rem 1rem;
        border-radius: 7px;
        color: white;
        background: #A855F7;
        transition: all 0.3s ease-in-out;
        &:hover{
            background: #0D0B33;
        }
    }

    .header-items{
        height: 6vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        background-color: #fff;
        .link-con{
            a{
                text-decoration: none;
                font-family: inherit;
                font-size: inherit;
                color: #000;
                font-weight: 500;
                width: 50%;
            }
        }
        select{
            font-family: inherit;
            font-size: inherit;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            outline: none;
            color: #fff;
            background-color: #000;
            cursor: pointer;
        }
        .right{
            display: flex;
            align-items: center;
            gap: .8rem;
            button:last-child{
                background-color: red;
            }
        }
    }

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
