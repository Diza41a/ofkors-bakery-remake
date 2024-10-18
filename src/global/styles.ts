import { createGlobalStyle } from "styled-components";
import DMSansFont from '../assets/fonts/DM_Sans/DMSans-VariableFont.ttf';
import CormorantSemiBoldFont from '../assets/fonts/Cormorant/Cormorant-SemiBold.ttf';
import CormorantBoldFont from '../assets/fonts/Cormorant/Cormorant-Bold.ttf';
import MoskFont from '../assets/fonts/Mosk/Mosk-400.ttf';

export const zIndexes = {
  header: 1000,
  pageBanner: 10,
  landingHeroCornerImages: 0,
  landingFoodLinchpinImage: 3,
  landingFoodSecondaryImage: 2,
  landingFoodBranchImage: 1,
  aboutMainMediaEls: 2,
  aboutBackgroundMediaEls: 1,
  contactForm: 2,
  contactFormLeftBranch: 1,
  menuMenuTitle: 2,
  menuMenuMenus: 2,
  menuMenuVectors: 1,
};

const GlobalStyle = createGlobalStyle(() => ({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  img: {
    userSelect: 'none',
  },

  '.yarl__container': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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

const CustomAnimations = createGlobalStyle`
  @keyframes rotateLeftBranch {
    0% { transform: scale(1.05) rotate(3deg); }
    100% { transform: scale(1.05) rotate(-3deg); }
  }

  @keyframes rotateRightBranch {
    0% { transform: scale(1.05) rotate(-3deg); }
    100% { transform: scale(1.05) rotate(3deg); }
  }
`;

export default { GlobalStyle, FontFaces, CustomAnimations };
