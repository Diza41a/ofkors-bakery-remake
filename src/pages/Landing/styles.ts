import styled from "styled-components";
import HeroBgImg from "../../assets/images/hero_bg.png";
import { MOBILE_VIEW_BREAKPOINT, type Theme } from "../../global/theme";
import { zIndexes } from "../../global/styles";

export const classes = {
  // Hero Section
  heroContainer: 'Landing-Hero-Container',
  heroTextContainer: 'Landing-Hero-TextContainer',
  heroTitleText: 'Landing-Hero-Txt-Title',
  heroBodyText: 'Landing-Hero-Txt-Body',
  heroViewMenuButton: 'Landing-Hero-Btn',
  heroImageContainer: 'Landing-Hero-ImageContainer',
  heroTopLeftCornerImageContainer: 'Landing-Hero-TopLeftCornerImageContainer',
  heroBottomRightCornerImageContainer: 'Landing-Hero-BottomRightCornerImageContainer',
  // Services Section
  servicesContainer: 'Landing-Services-Container',
  serviceCard: 'Landing-Service-Card',
  serviceCardImageContainer: 'Landing-Service-Card-ImgContainer',
  serviceCardTextContainer: 'Landing-Service-Card-TxtContainer',
};

const LandingContainer = styled('div')<{ theme: Theme }>(({ theme }) => ({
  [`.${classes.heroContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'max(750px, 100vh)',
    position: 'relative',
    columnGap: '70px',
    overflow: 'hidden',
    backgroundColor: theme.colors.bg.light,
    backgroundImage: `url(${HeroBgImg})`,

    [`.${classes.heroTextContainer}`]: {
      width: '50%',
      marginLeft: '12.5%',

      [`.${classes.heroTitleText}`]: {
        ...theme.typography.display1,
        color: theme.colors.text.heading,
        marginBottom: '40px',
        position: 'relative',
        zIndex: zIndexes.heroCornerImages + 1,
      },

      [`.${classes.heroBodyText}`]: {
        ...theme.typography.paragraph1,
        color: theme.colors.text.darkGray,
        marginBottom: '70px',
      },
    },

    [`.${classes.heroImageContainer}`]: {
      width: '57.5%',
      marginRight: '7.5%',

      img: {
        width: 'min(100%, 750px)',
        userSelect: 'none',
      },
    },

    [`.${classes.heroTopLeftCornerImageContainer}`]: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: zIndexes.heroCornerImages,

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

    [`.${classes.heroBottomRightCornerImageContainer}`]: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: zIndexes.heroCornerImages,

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
  },

  [`.${classes.servicesContainer}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 30,
    rowGap: 40,
    padding: '120px 5%',

    [`.${classes.serviceCard}`]: {
      display: 'flex',
      columnGap: 20,
      width: 370,

      [`.${classes.serviceCardImageContainer}`]: {
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        marginTop: 4,
        backgroundColor: theme.colors.bg.light,
        borderRadius: 15,
      },

      [`.${classes.serviceCardTextContainer}`]: {
        h3: {
          marginBottom: 30,
          ...theme.typography.headline3,
          color: theme.colors.text.heading,
        },

        p: {
          ...theme.typography.paragraph2,
          color: theme.colors.text.darkGray,
        },
      },

    },
  },

  '@media (max-width: 1250px)': {
    [`.${classes.heroContainer}`]: {
      [`.${classes.heroImageContainer}`]: {
        marginRight: 0,
      },
    },
  },

  '@media (max-width: 1150px)': {
    [`.${classes.heroContainer}`]: {
      [`.${classes.heroTextContainer}`]: {
        [`.${classes.heroTitleText}`]: {
          fontSize: 61,
        },
      },
    },
  },

  '@media (max-width: 1050px)': {
    [`.${classes.heroContainer}`]: {
      columnGap: '30px',

      [`.${classes.heroImageContainer}`]: {
        width: '62.5%',
      },
    },
  },

  '@media (max-width: 780px)': {
    [`.${classes.heroContainer}`]: {
      [`.${classes.heroTextContainer}`]: {
        width: '75%',
        margin: '0 12.5%',
      },

      [`.${classes.heroImageContainer}`]: {
        display: 'none',
      },
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    [`.${classes.heroContainer}`]: {
      [`.${classes.heroTextContainer}`]: {
        [`.${classes.heroTitleText}`]: {
          fontSize: 48,
          marginBottom: 22,
        },

        [`.${classes.heroBodyText}`]: {
          marginBottom: 25,
        },
      },
    },

    [`.${classes.servicesContainer}`]: {
      padding: '60px 5%',

      [`.${classes.serviceCard}`]: {
        [`.${classes.serviceCardImageContainer}`]: {
          width: 55,
          height: 55,

          img: {
            transform: 'scale(0.75)',
          },
        },

        [`.${classes.serviceCardTextContainer}`]: {
          h3: {
            marginBottom: 17,
          },
        },
      },
    },
  },
}));

export default {
  LandingContainer,
};
