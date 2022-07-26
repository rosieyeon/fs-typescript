import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box
  }
  
  body {
    background-color: #000000;
  }

  a {
    text-decoration: none;
    cursor: pointer
  }

`;

export default GlobalStyle;
