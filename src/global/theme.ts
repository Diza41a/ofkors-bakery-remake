import type { DefaultTheme } from "styled-components";
import type { CSSProperties } from "react";

export interface Theme extends DefaultTheme {
  typography: {
    link: CSSProperties;
    paragraph1: CSSProperties;
    paragraph2: CSSProperties;
    paragraph3: CSSProperties;
    display1: CSSProperties;
    display2: CSSProperties;
    display3: CSSProperties;
    headline1: CSSProperties;
    headline2: CSSProperties;
    headline3: CSSProperties;
    headline4: CSSProperties;
    headline5: CSSProperties;
    headline6: CSSProperties;
  },
  colors: {
    bg: {
      dark: string;
      light: string;
      white: string;
    },
    action: {
      gold: string;
      yellow: string;
      pink: string;
      red: string,
      green: string,
      orange: string,
      purple: string,
      darkBlue: string,
      turquoise: string,
    },
    text: {
      heading: string;
      darkAlt: string;
      darkGray: string;
      gray: string;
      white: string;
    },
    lines: {
      hr: string;
      gray: string;
    },
    brown: string;
  },
};

const DM_SANS_FONT_NAME = 'DMSans';
const CORMORANT_SEMIBOLD_FONT_NAME = 'CormorantSemiBold';
const CORMORANT_BOLD_FONT_NAME = 'CormorantBold';

const theme: Theme = {
  typography: {
    link: {
      fontFamily: DM_SANS_FONT_NAME,
      fontSize: 15,
    },
    paragraph1: {
      fontFamily: DM_SANS_FONT_NAME,
      fontSize: 18,
    },
    paragraph2: {
      fontFamily: DM_SANS_FONT_NAME,
      fontSize: 16,
    },
    paragraph3: {
      fontFamily: DM_SANS_FONT_NAME,
      fontSize: 14,
    },
    display1: {
      fontFamily: CORMORANT_SEMIBOLD_FONT_NAME,
      fontSize: 72,
    },
    display2: {
      fontFamily: CORMORANT_SEMIBOLD_FONT_NAME,
      fontSize: 64,
    },
    display3: {
      fontFamily: CORMORANT_SEMIBOLD_FONT_NAME,
      fontSize: 48,
    },
    headline1: {
      fontFamily: CORMORANT_SEMIBOLD_FONT_NAME,
      fontSize: 42,
    },
    headline2: {
      fontFamily: CORMORANT_SEMIBOLD_FONT_NAME,
      fontSize: 36,
    },
    headline3: {
      fontFamily: CORMORANT_BOLD_FONT_NAME,
      fontSize: 32,
    },
    headline4: {
      fontFamily: DM_SANS_FONT_NAME,
      fontSize: 28,
      fontWeight: 'bold',
    },
    headline5: {
      fontFamily: DM_SANS_FONT_NAME,
      fontSize: 24,
    },
    headline6: {
      fontFamily: DM_SANS_FONT_NAME,
      fontSize: 18,
    },
  },
  colors: {
    bg: {
      dark: '#292F32',
      light: '#FAF8EC',
      white: '#FFFFFF',
    },
    action: {
      gold: '#B98D58',
      yellow: '#F9E492',
      pink: '#FFC0EC',
      red: '#EF3737',
      green: '#34C635',
      orange: '#FF9513',
      purple: '#886CFF',
      darkBlue: '#001C7F',
      turquoise: '#61DCDF',
    },
    text: {
      heading: '#333333',
      darkAlt: '#321370',
      darkGray: '#888682',
      gray: '#E7E5EA',
      white: '#FFFFFF',
    },
    lines: {
      hr: '#617798',
      gray: '#E7E5EA33',
    },
    brown: '#2B1A14',
  },
};

export default theme;
