import styled from "styled-components";
import { classes as menuClasses } from "./Menu/styles";
import BgImg from '../../../assets/images/bg_main.png';
import type { StyledComponent } from "../../../global/types/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../../global/theme";
import { zIndexes } from "../../../global/styles";

export const classes = {
  root: 'Menu-MenuSection-Container',
  title: 'Menu-MenuSection-Title',
  menusContainer: 'Menu-MenuSection-MenuContainer',
  leftVectorImgWrapper: 'Menu-MenuSection-ImgLeftVector-Wrapper',
  rightVectorImgWrapper: 'Menu-MenuSection-ImgRightVector-Wrapper',
};

const MenuSection = styled('section')<StyledComponent>(({ theme }) => ({
  backgroundImage: `url(${BgImg})`,
  backgroundSize: 'auto',
  backgroundPosition: 'center',
  padding: '75px 2.5%',
  position: 'relative',

  [`.${classes.title}`]: {
    marginBottom: 90,
    textAlign: 'center',
    ...theme.typography.display2,
    color: theme.colors.text.heading,
    position: 'relative',
    zIndex: zIndexes.menuMenuTitle,
  },

  [`.${classes.menusContainer}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 40,

    [`.${menuClasses.root}`]: {
      width: 'min(100%, 1368px)',
      zIndex: zIndexes.menuMenuMenus,
    },
  },

  [`.${classes.leftVectorImgWrapper}`]: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: zIndexes.menuMenuVectors,

    img: {
      position: 'absolute',
      top: -75,
      left: '-2.5%',
      width: 300,
    },
  },

  [`.${classes.rightVectorImgWrapper}`]: {
    position: 'sticky',
    bottom: 0,
    right: 0,
    zIndex: zIndexes.menuMenuVectors,

    img: {
      position: 'absolute',
      bottom: -75,
      right: '-2.5%',
      width: 127,
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    padding: '55px 2.5%',

    [`.${classes.title}`]: {
      marginBottom: 55,
    },

    [`.${classes.leftVectorImgWrapper}`]: {
      img: {
        top: -55,
        width: 150,
      },
    },

    [`.${classes.rightVectorImgWrapper}`]: {
      img: {
        bottom: -55,
        width: 63,
      },
    },
  },
}));

export default {
  MenuSection,
};
