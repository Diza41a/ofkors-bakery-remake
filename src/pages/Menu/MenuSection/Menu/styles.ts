import styled from "styled-components";
import { rgba } from "polished";
import type { StyledComponent } from "../../../../global/types/styleTypes";

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
  maxHeight: 700,
  overflowY: 'hidden',
  padding: '40px 50px',
  background: rgba(theme.colors.bg.dark, 0.8),
  backgroundBlendMode: 'multiply',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: '2px solid #878787',
  borderRadius: 3,
  boxShadow: '7px -4px 0 2px black',

  [`.${classes.title}`]: {
    paddingBottom: 25,
    ...theme.typography.display3,
    fontSize: 34,
    color: theme.colors.text.white,
    textAlign: 'left',
    textShadow: '3px 3px 8px #080808',
    borderBottom: `1px solid ${rgba(theme.colors.lines.gray, 0.4)}`,
  },

  [`.${classes.body}`]: {
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
}));

export default {
  MenuWrapper,
};
