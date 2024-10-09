import styled from "styled-components";
import { classes as menuClasses } from "./Menu/styles";
import BgImg from '../../../assets/images/bg_main.png';
import type { StyledComponent } from "../../../global/types/styleTypes";

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
    gap: 40,

    [`.${menuClasses.root}`]: {
      flexBasis: 'calc(50% - 20px)',
    },
  },
}));

export default {
  MenuSection,
};
