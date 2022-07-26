import { css, DefaultTheme } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const theme: DefaultTheme = {
  color: {
    red: "#D12D35",
  },
  flexCenter,
};
