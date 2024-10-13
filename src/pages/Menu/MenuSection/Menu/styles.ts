import styled from "styled-components";
import { rgba } from "polished";
import type { StyledComponent } from "../../../../global/types/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../../../global/theme";

export const classes = {
  root: 'Menu-MenuSection-MenuWrapper',
  title: 'Menu-MenuSection-MenuTitle',
  body: 'Menu-MenuSection-MenuBody',
  menuCard: 'Menu-MenuSection-MenuCard',
  menuCardTitleRow: 'Menu-MenuSection-MenuCard-TitleRow',
  menuCardTitle: 'Menu-MenuSection-MenuCard-Title',
  menuCardPrice: 'Menu-MenuSection-MenuCard-Price',
  menuCardBody: 'Menu-MenuSection-MenuCard-Body',
  menuCardDesc: 'Menu-MenuSection-MenuCard-Desc',
};

const MenuWrapper = styled('div')<StyledComponent>(({ theme }) => ({
  position: 'relative',
  background: rgba(theme.colors.bg.dark, 0.8),
  backgroundBlendMode: 'multiply',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: '2px solid #878787',
  borderRadius: 3,
  boxShadow: '7px -4px 0 2px black',

  [`.${classes.title}`]: {
    margin: '40px 50px 0 50px',
    paddingBottom: 25,
    ...theme.typography.display3,
    fontSize: 34,
    color: theme.colors.text.white,
    textAlign: 'left',
    textShadow: '3px 3px 8px #080808',
    borderBottom: `1px solid ${rgba(theme.colors.lines.gray, 0.4)}`,
  },

  [`.${classes.body}`]: {
    padding: '0 50px 40px 50px',
    overflowY: 'auto',
    marginTop: 25,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(235px, 1fr))',
    gap: 35,

    [`.${classes.menuCard}`]: {
      [`.${classes.menuCardTitleRow}`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        columnGap: 20,

        [`.${classes.menuCardTitle}`]: {
          ...theme.typography.headline3,
          fontSize: 26,
          color: theme.colors.text.white,
        },

        [`.${classes.menuCardPrice}`]: {
          ...theme.typography.headline3,
          fontSize: 26,
          color: theme.colors.action.gold,
        },
      },

      [`.${classes.menuCardBody}`]: {
        marginTop: 15,
        ...theme.typography.paragraph2,
        fontSize: 15,
        color: theme.colors.text.white,
      },
    },
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '5%',
    background: 'linear-gradient(to top, #000000bd, transparent)',
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    [`.${classes.title}`]: {
      margin: '30px 40px 0 40px',
      fontSize: 30,
      paddingBottom: 20,
    },

    [`.${classes.body}`]: {
      padding: '0 40px 30px 40px',
      marginTop: 20,
      gap: 25,

      [`.${classes.menuCard}`]: {
        [`.${classes.menuCardTitleRow}`]: {
          [`.${classes.menuCardTitle}`]: {
            fontSize: 25,
          },

          [`.${classes.menuCardPrice}`]: {
            fontSize: 25,
          },
        },

        [`.${classes.menuCardBody}`]: {
          marginTop: 10,
        },
      },
    },
  },
}));

export default {
  MenuWrapper,
};
