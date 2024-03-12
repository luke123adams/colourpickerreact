import React from 'react'
import { useState } from 'react'
import { palette } from './myPalettes'
import styled from 'styled-components'

export default function Palettes() {

    const [myPalettes, setMyPalettes] = useState(palette)

    console.log(myPalettes)
  return (
    <PalettesStyled>
        <div className='palettes'>
        {
            myPalettes.map((pal, index)=>{
                console.log(pal)
                return <div className='palette'>
                    {pal.colors.map((col, i)=>{
                        return <div key={i} className='color'
                        style={{backgroundColor: col}}
                        >

                        </div>
                    })}
                </div>
            })
        }            
        </div>       
    </PalettesStyled>
  )
}

const PalettesStyled = styled.div`
    .palettes{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 25px;
        padding: 2rem 18rem;
        transition: all .3s ease;
        .palette{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            width: 100%;
            height: 250px;
            .color{
                width: 100%;
                height: 100%;
            }
        }
    }
`;