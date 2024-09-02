import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle(() => ({
  '@font-face': {
    fontFamily: 'links',
  },
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'links',
  },
}));

export default GlobalStyle;
