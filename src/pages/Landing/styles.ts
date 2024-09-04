import styled from "styled-components";
import type { Theme } from "../../global/theme";

export const classes = {
  heroContainer: 'Landing-Hero-Container',
  heroTextContainer: 'Landing-Hero-TextContainer',
  heroImageContainer: 'Landing-Hero-ImageContainer',
};

const LandingWrapper = styled('div')<{ theme: Theme }>(({ theme }) => ({
  [`.${classes.heroContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'max(750px, 100vh)',
    backgroundColor: theme.colors.bg.light,
    columnGap: '70px',

    [`.${classes.heroTextContainer}`]: {
      width: '50%',
      marginLeft: '12.5%',
      /* TODO: Once the actual text is in place, adjust padding-bottom
        to match the design */

      h1: {
        ...theme.typography.display1,
        color: theme.colors.text.heading,
        marginBottom: '40px',
      },

      p: {
        ...theme.typography.paragraph1,
        color: theme.colors.text.darkGray,
      },
    },

    [`.${classes.heroImageContainer}`]: {
      width: '57.5%',
      marginRight: '7.5%',

      img: {
        width: 'min(100%, 750px)',
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
        h1: {
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
        h1: {
          textAlign: 'center',
          fontSize: 48,
          marginBottom: 22,
        },
      },
    },
  },
}));

export default {
  LandingWrapper,
};
