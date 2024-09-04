import { createGlobalStyle } from "styled-components";
import DMSansFont from '../assets/fonts/DM_Sans/DMSans-VariableFont.ttf';
import CormorantSemiBoldFont from '../assets/fonts/Cormorant/Cormorant-SemiBold.ttf';
import CormorantBoldFont from '../assets/fonts/Cormorant/Cormorant-Bold.ttf';
import MoskFont from '../assets/fonts/Mosk/Mosk-400.ttf'

const GlobalStyle = createGlobalStyle(() => ({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
}));

const FontFaces = createGlobalStyle`
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansFont});
  }

  @font-face {
    font-family: 'CormorantSemiBold';
    src: url(${CormorantSemiBoldFont});
  }

  @font-face {
    font-family: 'CormorantBold';
    src: url(${CormorantBoldFont});
  }

  @font-face {
    font-family: 'Mosk';
    src: url(${MoskFont});
  }
`;

export default { GlobalStyle, FontFaces  };