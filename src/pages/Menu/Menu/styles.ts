import styled from "styled-components";
import type { StyledComponent } from "../../../global/types/styleTypes";

export const classes = {
  root: 'Menu-MenuSection-MenuWrapper',
  nav: 'Menu-MenuSection-MenuNav',
  btnNav: 'Menu-MenuSection-MenuNav-Btn',
  btnNavActive: 'Menu-MenuSection-MenuNav-Btn--active',
  body: 'Menu-MenuSection-MenuBody',
  menuCard: 'Menu-MenuSection-MenuCard',
  menuCardTitleRow: 'Menu-MenuSection-MenuCard-TitleRow',
  menuCardTitle: 'Menu-MenuSection-MenuCard-Title',
  menuCardPrice: 'Menu-MenuSection-MenuCard-Price',
  menuCardBody: 'Menu-MenuSection-MenuCard-Body',
  menuCardDesc: 'Menu-MenuSection-MenuCard-Desc',
};

const MenuWrapper = styled('div')<StyledComponent>(({ theme }) => ({
  [`.${classes.nav}`]: {
    display: 'flex',
    justifyContent: 'center',
    columnGap: 14,
    borderBottom: `1px solid ${theme.colors.lines.gray}`,

    [`.${classes.btnNav}`]: {
      padding: '19px 16px',
      ...theme.typography.link,
      color: theme.colors.text.gray,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textTransform: 'uppercase',
      transition: 'color 0.1s linear',

      [`&.${classes.btnNavActive}`]: {
        color: theme.colors.action.gold,
        borderBottom: `2px solid ${theme.colors.action.gold}`,
        paddingBottom: 17,
      },

      '&:hover': {
        color: theme.colors.action.gold,
      },
    },
  },

  [`.${classes.body}`]: {
    marginTop: 80,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    columnGap: 60,
    rowGap: 50,

    [`.${classes.menuCard}`]: {
      [`.${classes.menuCardTitleRow}`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        [`.${classes.menuCardTitle}`]: {
          ...theme.typography.headline3,
          color: theme.colors.text.white,
        },

        [`.${classes.menuCardPrice}`]: {
          ...theme.typography.headline3,
          color: theme.colors.action.gold,
        },
      },

      [`.${classes.menuCardBody}`]: {
        marginTop: 25,
        ...theme.typography.paragraph2,
        color: theme.colors.text.white,
      },
    },
  },
}));

export default {
  MenuWrapper,
};
