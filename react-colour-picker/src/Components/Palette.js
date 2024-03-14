import {useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { palette } from '../myPalettes'
import { Link } from "react-router-dom";
import { SketchPicker } from 'react-color'

const del = <i className="fa-sharp fa-solid fa-trash"></i>
const brush = <i className="fa-solid fa-brush"></i>
const paletteIcon = <i className="fa-solid fa-palette"></i>

export default function Palette() {
    const {id} = useParams()
    const initialPalette = palette.find(pal => pal.name === id)

    // state

    const [myPalette, setMyPalette] = useState(initialPalette)
    const [toRgb, setToRgb] = useState('hex')
    const [toggleColorPicker, setToggleColorPicker] = useState(false)
    const [colorPickerColor, setColorPickerColor] = useState('#fff')
    const [currentColor, setCurrentColor] = useState('')

    const toggleToRgb = (e) => {
        setToRgb(e.target.value)
    }

    const convertToRgb = (hex) => {
        hex = hex.replace('#', '')
        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)

        return `RGB (${r}, ${g}, ${b})`


    }

    const deleteColor = (index) => {
        const newColors = [...myPalette.colors]
        newColors.splice(index, 1)

        setMyPalette({...myPalette, colors: newColors})
        



    }

    const clear = (index) => {
        setMyPalette({...myPalette, colors: []})

    }

    const createColor = () => {

    }

    const handleColorChange = (color) => {
        setColorPickerColor(color.hex)

    }

    const handleFullColorClick = (event) => {
        setCurrentColor(event)
        console.log(currentColor)
        
    }

    const cancelFullColor = () => {
        setCurrentColor('')
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
            <button className="btn-icon" onClick={()=>{setToggleColorPicker(!toggleColorPicker)}}>
                {paletteIcon}
            </button>
            <button className="btn-icon" onClick={clear}>{brush}</button>
        </div>
    </div>
    {toggleColorPicker && 
    <div className="color-picker-container">
        <div className="color-picker">
            <SketchPicker
            color={colorPickerColor}
            onChange={handleColorChange}
            width="400px"/>
        </div>
    </div>}
    <div className="colors">
        {myPalette.colors.map((color, index) => {
           return <div key={index}
            style={{background: color}}
            className="full-color"
            onClick={(e)=>{
                handleFullColorClick(e.target.style.backgroundColor)
            }}>
                <h4>
                {toRgb === 'hex' ? color : convertToRgb(color)}

                </h4>
                <button className="btn-icon" onClick={()=>{
                    deleteColor(index);
                }}>{del}</button>

            </div>
        })}
    </div>
    {currentColor && <div className="current-color" style={{backgroundColor: currentColor}}>
        <div className="text">
            <h3>Random</h3>
            <button className="btn-icon" onClick={()=>{cancelFullColor()}}>X</button>

        </div>
    </div>
    }
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

    .current-color{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.3s ease-in-out;
        animation: show 0.3s ease-in-out forwards;
        .text{
            background: rgba(255, 255, 255, 0.26);
            padding: 2rem 6rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.09);
        }

        @keyframes show {
            0% {
                transform: scale(0);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
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
            align-items: center;
            justify-content: center;
            position: relative;
            h4{
                font-size: 1.2rem;
                color: #fff;
                text-transform: uppercase;
                font-weight: 700;
                text-shadow: 3px 3px 1px rgba(0,0,0, 0.2);
                pointer-events: none; 
            }
            button{
                position: absolute;
                right: 0;
                bottom: 0px;
                border-bottom-left-radius: 0;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                padding: .3rem .4rem;
                font-size: 1.1rem;
                color: #fff;
                background: transparent;
                filter: drop-shadow(0 3px 0.3rem rgba(0,0,0,0.4));
            }
        }
    }

    .color-picker-container{
        .sketch-picker{
            box-shadow: 3px 3px 15px rgba(0,0,0, 0.5) !important;
        }
        .color-picker{
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 11;
            button{
                display: flex;
                align-items: center;
                gap: .5rem;
                box-shadow: 2px 2px 15px rgba(0,0,0,0.5);
            }
        }
        .color-picker-overlay{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, 0.8);
            z-index: 11;
        }
    }
`;
