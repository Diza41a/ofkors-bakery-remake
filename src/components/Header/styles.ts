import styled from "styled-components";
import theme, { HEADER_BURGER_BREAKPOINT } from "../../global/theme";
import { zIndexes } from "../../global/styles";
import type { StyledComponent } from "../../global/types/styleTypes";

export const constants = {
  height: 80,
  mobileHeight: 64,
  burgerDisplayBreakpoint: 750,
};

export const classes = {
  opaqueBackground: 'Header-OpaqueBackground',
  logoLink: 'Header-LogoLink',
  navLinkActive: 'Header-NavLink--active',
  navMenuExpanded: 'Header-MobileView-NavMenu--expanded',
};

const Header = styled('header')<StyledComponent>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: 80,
  position: 'sticky',
  top: 0,
  zIndex: zIndexes.header,
  padding: '0 20%',
  boxShadow: '0px 0px 13px 0px #191919',
  backgroundColor: theme.colors.brown,
  transitionProperty: 'background-color, box-shadow',
  transitionDuration: '0.3s',
  transitionTimingFunction: 'ease-in-out',

  [`.${classes.logoLink}`]: {
    display: 'flex',

    img: {
      width: 145,
    },
  },

  nav: {
    display: 'flex',
    alignItems: 'center',

    '>ul': {
      display: 'flex',
      columnGap: 30,
      listStyle: 'none',

      li: {
        a: {
          ...theme.typography.link,
          textTransform: 'uppercase',
          color: theme.colors.text.white,
          transition: 'color 0.2s ease-in-out',

          [`&.${classes.navLinkActive}, &:hover`]: {
            color: theme.colors.action.gold,
          },
        },
      },
    },

    '.hamburger-react': {
      display: 'none',
    },
  },

  [`&.${classes.opaqueBackground}`]: {
    backgroundColor: 'transparent',
    boxShadow: 'none',

    nav: {
      '>ul': {
        li: {
          a: {
            color: theme.colors.text.heading,

            [`&.${classes.navLinkActive}, &:hover`]: {
              color: theme.colors.action.gold,
            },
          },
        },
      },
    },
  },

  '@media (max-width: 1150px)': {
    padding: '0 10%',
  },

  '@media (max-width: 960px)': {
    padding: '0 5%',

    nav: {
      '>ul': {
        columnGap: 25,
      },
    },
  },

  [`@media (max-width: ${HEADER_BURGER_BREAKPOINT}px)`]: {
    height: 64,
    padding: '0 10%',

    [`.${classes.logoLink}`]: {
      img: {
        width: 110,
      },
    },

    nav: {
      position: 'relative',

      [`&:not(.${classes.navMenuExpanded})`]: {
        '>ul': {
          left: '-100%',
          opacity: 0,

          li: {
            left: '100%',
          },
        },
      },

      '>ul': {
        flexDirection: 'column',
        width: '100%',
        position: 'fixed',
        top: 64,
        left: 0,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        opacity: 1,
        transition: 'opacity 0.55s ease-in-out',

        li: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '35px',
          position: 'relative',
          left: 0,
          backgroundColor: theme.colors.brown,
          borderTop: '1px inset #ffffffb5',
          transition: 'left 0.3s ease-in-out',

          a: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            fontSize: 20,
            textAlign: "center",
          },

          '&:last-of-type': {
            borderBottom: '1px inset #ffffffb5',
          },

          ...(() => {
            const navLinksAmount = 5;
            const transitionDelays = {};

            for (let i = 1; i <= navLinksAmount; i+=1) {
              const cssSelector = `&:nth-of-type(${i + 1})`;
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              transitionDelays[cssSelector] = {
                transitionDelay: `${0.05 * i}s`,
              };
            }

            return transitionDelays;
          })(),
        },
      },

      '.hamburger-react': {
        display: 'block',

        div: {
          backgroundColor: `${theme.colors.text.white} !important`,
          transition: 'background-color 0.2s ease-in-out',
        }
      },
    },

    [`&.${classes.opaqueBackground}`]: {
      nav: {
        '.hamburger-react': {
          div: {
            backgroundColor: `${theme.colors.text.heading} !important`,
          }
        },
      },
    },
  },
}));

export default {
  Header,
};
