import styled from "styled-components";
import type { Theme } from "../../global/theme";
import theme from "../../global/theme";

export const classes = {
  opaqueBackground: 'Header-OpaqueBackground',
  logoLink: 'Header-LogoLink',
  navLinkActive: 'Header-NavLink--active'
};

const Header = styled('header')<{ theme: Theme }>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  height: 80,
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
    ul: {
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
  },

  [`&.${classes.opaqueBackground}`]: {
    backgroundColor: 'transparent',
    boxShadow: 'none',

    nav: {
      ul: {
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

  '@media (max-width: 750px)': {
    height: 64,

    [`.${classes.logoLink}`]: {
      img: {
        width: 110,
      },
    },
  },
}));

export default {
  Header,
};
