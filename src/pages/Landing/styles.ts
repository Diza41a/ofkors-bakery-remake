import styled from "styled-components";
import HeroBgImg from "../../assets/images/hero_bg.png";
import type { Theme } from "../../global/theme";

export const classes = {
  heroContainer: 'Landing-Hero-Container',
  heroTextContainer: 'Landing-Hero-TextContainer',
  heroTitleText: 'Landing-Hero-Txt-Title',
  heroBodyText: 'Landing-Hero-Txt-Body',
  heroViewMenuButton: 'Landing-Hero-Btn',
  heroImageContainer: 'Landing-Hero-ImageContainer',
  heroTopLeftCornerImageContainer: 'Landing-Hero-TopLeftCornerImageContainer',
  heroBottomRightCornerImageContainer: 'Landing-Hero-BottomRightCornerImageContainer',
};

// TODO: Animate the hero images.

const LandingWrapper = styled('div')<{ theme: Theme }>(({ theme }) => ({
  [`.${classes.heroContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'max(750px, 100vh)',
    backgroundColor: theme.colors.bg.light,
    backgroundImage: `url(${HeroBgImg})`,
    columnGap: '70px',

    [`.${classes.heroTextContainer}`]: {
      width: '50%',
      marginLeft: '12.5%',

      [`.${classes.heroTitleText}`]: {
        ...theme.typography.display1,
        color: theme.colors.text.heading,
        marginBottom: '40px',
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
      },
    },

    [`.${classes.heroTopLeftCornerImageContainer}`]: {
      position: 'absolute',
      top: 0,
      left: 0,
    },

    [`.${classes.heroBottomRightCornerImageContainer}`]: {
      position: 'absolute',
      bottom: 0,
      right: 0,
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

  '@media (max-width: 600px)': {
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
  },
}));

export default {
  LandingWrapper,
};
