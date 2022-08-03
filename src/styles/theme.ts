import { css, DefaultTheme, keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(-12px);
  }
`;

const defaultAnimation = css`
  animation-duration: 0.7s;
  animation-name: ${animation};
  animation-fill-mode: forwards;
`;

export const theme: DefaultTheme = { defaultAnimation };
