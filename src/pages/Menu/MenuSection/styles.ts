import styled from "styled-components";
import { classes as menuClasses } from "./Menu/styles";
import BgImg from '../../../assets/images/bg_main.png';
import type { StyledComponent } from "../../../global/types/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../../global/theme";

export const classes = {
  root: 'Menu-MenuSection-Container',
  menusContainer: 'Menu-MenuSection-MenuContainer',
};

const MenuSection = styled('section')<StyledComponent>(() => ({
  backgroundImage: `url(${BgImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '75px 2.5%',

  [`.${classes.menusContainer}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 40,

    [`.${menuClasses.root}`]: {
      width: 'min(100%, 1368px)',
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    padding: '55px 2.5%',
  },
}));

export default {
  MenuSection,
};
