import type { DefaultTheme } from "styled-components";
import type { CSSProperties } from "react";

const SMALL_SCREEN_BREAKPOINT = 600;

const DM_SANS_FONT_NAME = 'DMSans';
const CORMORANT_SEMIBOLD_FONT_NAME = 'CormorantSemiBold';
const CORMORANT_BOLD_FONT_NAME = 'CormorantBold';
const MOSK_FONT_NAME = 'Mosk';

type MediaQueryKey = `@media (max-width: ${number}px)`;
type MediaQueryStyles<> = {
  [K in MediaQueryKey]: CSSProperties;
};
type TypographyStyles = CSSProperties & MediaQueryStyles;
export interface Theme extends DefaultTheme {
  typography: {
    link: TypographyStyles;
    linkSmall: TypographyStyles;
    paragraph1: TypographyStyles;
    paragraph2: TypographyStyles;
    paragraph3: TypographyStyles;
    display1: TypographyStyles;
    display2: TypographyStyles;
    display3: TypographyStyles;
    headline1: TypographyStyles;
    headline2: TypographyStyles;
    headline3: TypographyStyles;
    headline4: TypographyStyles;
    headline5: TypographyStyles;
    headline6: TypographyStyles;
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

const theme: Theme = {
  typography: {
    link: {
      fontFamily: DM_SANS_FONT_NAME,
      fontSize: 15,
      textDecoration: 'none',
    },
    linkSmall: {
      fontFamily: MOSK_FONT_NAME,
      fontSize: 14,
      textDecoration: 'none',
    },
    paragraph1: {
      fontFamily: DM_SANS_FONT_NAME,
      fontSize: 18,

      [`@media (max-width: ${SMALL_SCREEN_BREAKPOINT}px)`]: {
        fontSize: 16,
      },
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
      fontFamily: CORMORANT_BOLD_FONT_NAME,
      fontSize: 72,

      [`@media (max-width: ${SMALL_SCREEN_BREAKPOINT}px)`]: {
        fontSize: 48,
      },
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