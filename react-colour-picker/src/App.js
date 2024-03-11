import styled from "styled-components"
import './App.css';
import bg from './bg.png'
import bg2 from './grid.png'
import Palettes from "./Components/Palettes"

function App() {
  return (
    <AppStyled bg={bg} grid={bg2}>
     <div className="grid"></div>
     <Palettes />

    </AppStyled>
  );
}

const AppStyled = styled.div`
    min-height: 100vh;
  background-color: slateblue;
  background-image: url(${props => props.bg})
  background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .grid{
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${props => props.grid});
      background-repeat: repeat;
      z-index: 0;
    }
`;

export default App;
