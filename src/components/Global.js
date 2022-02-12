import { createGlobalStyle } from "styled-components"
import bg1 from "../images/bg-pattern-top.svg"
import bg2 from "../images/bg-pattern-bottom.svg"

const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    position: relative;
    background-color: ${({ theme }) => theme.colors.Dark_cyan};
    min-height: 100vh;
    overflow: hidden;
    z-index: -1;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  body:before, body:after {
    position: absolute;
    content: '';
    width: 100vw;
    height: 100vh;
    background-size: auto;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  body:before {
    top: 0;
    left: 0;
    background: url(${bg1}) no-repeat bottom right;
  }

  body:after{
    top: 100%;
    left: 100%;
    background: url(${bg2}) no-repeat top left;
  }

  img{
    max-width: 100%;
  }
`

export default GlobalStyles
