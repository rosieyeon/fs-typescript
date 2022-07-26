import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    color: inherit
  }

  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
        -webkit-text-size-adjust: none;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-display: fallback;
        background-color: "#000000";
        -ms-overflow-style: none; 
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        body {
            margin: 0;
        }
  }
`;
export default globalStyle;
