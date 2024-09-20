import styled from "styled-components";
import { MOBILE_VIEW_BREAKPOINT } from "../../../global/theme";
import { zIndexes } from "../../../global/styles";
import type { StyledComponent } from "../../../global/types/styleTypes";

export const classes = {
  root: 'Landing-FoodSection',
  titleContainer: 'Landing-FoodSection-TitleContainer',
  bodyContainer: 'Landing-FoodSection-BodyContainer',
  imageContainer: 'Landing-FoodSection-ImgContainer',
  linchpinImage: 'Landing-FoodSection-LinchpinImage',
  secondaryImage: 'Landing-FoodSection-SecondaryImage',
  branchImage: 'Landing-FoodSection-BranchImage',
  beansImageContainer: 'Landing-FoodSection-BeansImageContainer',
  textContainer: 'Landing-FoodSection-TxtContainer',
};

const FoodSection = styled('section')<StyledComponent>(({ theme }) => ({
  position: 'relative',
  padding: '120px 0 150px 0',
  overflowX: 'hidden',
  backgroundColor: theme.colors.bg.lightAlt,

  [`.${classes.titleContainer}`]: {
    textAlign: 'center',

    h2: {
      ...theme.typography.display2,
      color: theme.colors.text.heading,
      marginBottom: 50,
    },
  },

  [`.${classes.bodyContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    columnGap: 75,
    marginTop: 90,
    padding: '0 5%',

    [`.${classes.imageContainer}`]: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: 620,
      position: 'relative',

      [`.${classes.linchpinImage}`]: {
        position: 'relative',
        zIndex: zIndexes.landingFoodLinchpinImage,
      },

      [`.${classes.secondaryImage}`]: {
        position: 'absolute',
        zIndex: zIndexes.landingFoodSecondaryImage,
        bottom: -100,
        right: 135,
      },

      [`.${classes.branchImage}`]: {
        position: 'absolute',
        zIndex: zIndexes.landingFoodBranchImage,
        top: -168,
        right: 275,
      },
    },

    [`.${classes.textContainer}`]: {
      width: 470,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      h2: {
        ...theme.typography.headline2,
        color: theme.colors.text.heading,
        marginBottom: 50,
      },

      '>p': {
        ...theme.typography.paragraph2,
        color: theme.colors.text.darkGray,
        marginBottom: 70,
      },

      button: {
        width: 'fit-content',
      },
    },
  },

  [`.${classes.beansImageContainer}`]: {
    position: 'absolute',
    bottom: 110,
    right: '10%',
  },

  '@media (max-width: 1480px)': {
    [`.${classes.bodyContainer}`]: {
      columnGap: 0,

      [`.${classes.imageContainer}`]: {
        transform: 'scale(0.85)',
      },
    },

    [`.${classes.beansImageContainer}`]: {
      transform: 'scale(0.85)',
    },
  },

  '@media (max-width: 1250px)': {
    [`.${classes.bodyContainer}`]: {
      [`.${classes.imageContainer}`]: {
        transform: 'scale(0.75)',
        left: '5%',
      },
    },

    [`.${classes.beansImageContainer}`]: {
      transform: 'scale(0.75)',
    },
  },

  '@media (max-width: 1065px)': {
    padding: '120px 0 165px 0',

    [`.${classes.bodyContainer}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 25,

      [`.${classes.imageContainer}`]: {
        left: 0,
        width: 720,
      },

      [`.${classes.textContainer}`]: {
        width: 'auto',
        marginTop: 35,
        padding: '0 10%',

        'h2': {
          textAlign: 'center',
          marginBottom: 25,
        },

        '>p': {
          textAlign: 'center',
          marginBottom: 40,
        },

        button: {
          margin: 'auto',
          width: 300,
        },
      },
    },

    [`.${classes.beansImageContainer}`]: {
      bottom: 10,
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    padding: '60px 0 85px 0',

    [`.${classes.titleContainer}`]: {
      padding: '0 10%',

      img: {
        transform: 'scale(0.85)',
      },
    },

    [`.${classes.bodyContainer}`]: {
      marginTop: 0,
      overflowX: 'hidden',

      [`.${classes.imageContainer}`]: {
        transform: 'scale(0.55)',
        marginTop: -40,
        marginBottom: -15,
      },

      [`.${classes.textContainer}`]: {
        marginTop: 0,
        padding: '0 3.5%',
      },
    },

    [`.${classes.beansImageContainer}`]: {
      transform: 'scale(0.45)',
      bottom: -20,
      right: '-4.5%',
    },
  },
}));

export default {
  FoodSection,
};
