import styled from "styled-components";
import HeroBgImg from "../../../assets/images/bg_main.png";
import { MOBILE_VIEW_BREAKPOINT, type Theme } from "../../../global/theme";
import { zIndexes } from "../../../global/styles";

export const classes = {
  root: 'Landing-Hero-Container',
  textContainer: 'Landing-Hero-TextContainer',
  titleText: 'Landing-Hero-Txt-Title',
  bodyText: 'Landing-Hero-Txt-Body',
  viewMenuButton: 'Landing-Hero-Btn',
  imageContainer: 'Landing-Hero-ImageContainer',
  topLeftCornerImageContainer: 'Landing-Hero-TopLeftCornerImageContainer',
  bottomRightCornerImageContainer: 'Landing-Hero-BottomRightCornerImageContainer',
};

const HeroSection = styled('section')<{ theme: Theme }>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'max(750px, 100vh)',
  position: 'relative',
  columnGap: '70px',
  overflow: 'hidden',
  backgroundColor: theme.colors.bg.light,
  backgroundImage: `url(${HeroBgImg})`,

  [`.${classes.textContainer}`]: {
    width: '50%',
    marginLeft: '12.5%',

    [`.${classes.titleText}`]: {
      ...theme.typography.display1,
      color: theme.colors.text.heading,
      marginBottom: '40px',
      position: 'relative',
      zIndex: zIndexes.landingHeroCornerImages + 1,
    },

    [`.${classes.bodyText}`]: {
      ...theme.typography.paragraph1,
      color: theme.colors.text.darkGray,
      marginBottom: '70px',
    },
  },

  [`.${classes.imageContainer}`]: {
    width: '57.5%',
    marginRight: '7.5%',

    img: {
      width: 'min(100%, 750px)',
      userSelect: 'none',
    },
  },

  [`.${classes.topLeftCornerImageContainer}`]: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: zIndexes.landingHeroCornerImages,

    img: {
      userSelect: 'none',
      transform: 'scale(1.05)',

      '@keyframes rotateHeroTopLeft': {
        '0%': { transform: 'scale(1.05) rotate(3deg)', },
        '100%': { transform: 'scale(1.05) rotate(-3deg)', },
      },

      animation: 'rotateHeroTopLeft 6s infinite alternate',
    },
  },

  [`.${classes.bottomRightCornerImageContainer}`]: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: zIndexes.landingHeroCornerImages,

    img: {
      userSelect: 'none',
      transform: 'scale(1.05)',

      '@keyframes rotateHeroBottomRight': {
        '0%': { transform: 'scale(1.05) rotate(-3deg)', },
        '100%': { transform: 'scale(1.05) rotate(3deg)', },
      },

      animation: 'rotateHeroBottomRight 6s infinite alternate',
    },
  },

  '@media (max-width: 1250px)': {
    [`.${classes.imageContainer}`]: {
      marginRight: 0,
    },
  },

  '@media (max-width: 1150px)': {
    [`.${classes.textContainer}`]: {
      [`.${classes.titleText}`]: {
        fontSize: 61,
      },
    },
  },

  '@media (max-width: 1050px)': {
    columnGap: '30px',

    [`.${classes.imageContainer}`]: {
      width: '62.5%',
    },
  },

  '@media (max-width: 780px)': {
    [`.${classes.textContainer}`]: {
      width: '75%',
      margin: '0 12.5%',
    },

    [`.${classes.imageContainer}`]: {
      display: 'none',
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    [`.${classes.textContainer}`]: {
      [`.${classes.titleText}`]: {
        fontSize: 48,
        marginBottom: 22,
      },

      [`.${classes.bodyText}`]: {
        marginBottom: 25,
      },
    },

    [`.${classes.topLeftCornerImageContainer}`]: {
      img: {
        width: '275px',
      },
    },

    [`.${classes.bottomRightCornerImageContainer}`]: {
      img: {
        width: '275px',
      },
    },
  },
}));

export default {
  HeroSection,
};
