import styled from "styled-components";
import type { StyledComponent } from "../../../global/types/styleTypes";
import { zIndexes } from "../../../global/styles";
import { MOBILE_VIEW_BREAKPOINT } from "../../../global/theme";

export const classes = {
  root: 'About-Intro-Container',
  title: 'About-Intro-Title',
  contentContainer: 'About-Intro-ContentContainer',
  contentColumn: 'About-Intro-ContentColumn',
  mainPhotoImg: 'About-Intro-Img-Main',
  secondaryPhotoImg: 'About-Intro-Img-Secondary',
  decorativeColumn: 'About-Intro-DecorativeColumn',
  decorativeImgContainer: 'About-Intro-DecorativeImgContainer',
  decorativeImg: 'About-Intro-Img-Decorative',
  branchImg: 'About-Intro-Img-Branch',
  beansImg: 'About-Intro-Img-Beans',
};

const IntroSection = styled('section')<StyledComponent>(({ theme }) => ({
  padding: '120px 5%',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.colors.bg.white,

  [`.${classes.title}`]: {
    marginBottom: 90,
    textAlign: 'center',
    ...theme.typography.display2,
    color: theme.colors.text.heading,
  },

  [`.${classes.contentContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    columnGap: 85,

    [`.${classes.contentColumn}`]: {
      width: 400,
      position: 'relative',

      [`.${classes.mainPhotoImg}`]: {
        width: 400,
        height: 500,
        maxWidth: '100%',
        objectFit: 'cover',
      },

      [`.${classes.secondaryPhotoImg}`]: {
        width: 400,
        height: 400,
        maxWidth: '100%',
        objectFit: 'cover',
      },

      h3: {
        ...theme.typography.headline2,
        color: theme.colors.text.heading,
        margin: '40px 0',
      },

      p: {
        ...theme.typography.paragraph2,
        color: theme.colors.text.darkGray,
      },

      '&:nth-of-type(1)': {
        br: {
          display: 'none',
        },

        [`.${classes.beansImg}`]: {
          width: 135,
          position: 'absolute',
          bottom: 50,
          left: -175,
        },
      },

      '&:nth-of-type(2)': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        'p:last-of-type': {
          marginBottom: 40,
        },

        img: {
          marginTop: 'auto',
        },
      },
    },

    [`.${classes.decorativeColumn}`]: {
      width: 200,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',

      [`.${classes.decorativeImgContainer}`]: {
        position: 'relative',

        [`.${classes.decorativeImg}`]: {
          width: 200,
          maxWidth: '100%',
          height: 280,
          position: 'relative',
          bottom: 50,
          zIndex: zIndexes.aboutMainMediaEls,
        },

        [`.${classes.branchImg}`]: {
          position: 'absolute',
          left: 123,
          top: 121,
          zIndex: zIndexes.aboutBackgroundMediaEls,
        },
      },
    },
  },

  '@media (max-width: 1300px)': {
    [`.${classes.branchImg}, .${classes.beansImg}`]: {
      display: 'none',
    },

    [`.${classes.mainPhotoImg}, .${classes.secondaryPhotoImg}`]: {
      display: 'block',
      margin: '0 auto',
    },
  },

  '@media (max-width: 1250px)': {
    [`.${classes.contentContainer}`]: {
      columnGap: 50,

      [`.${classes.decorativeColumn}`]: {
        display: 'none',
      },
    },
  },

  '@media (max-width: 800px)': {
    [`.${classes.contentContainer}`]: {
      flexDirection: 'column',
      alignItems: 'center',

      [`.${classes.contentColumn}`]: {
        width: '90%',

        '&:nth-of-type(1)': {
          br: {
            display: 'initial',
          },
        },
      },
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    padding: '60px 5%',

    [`.${classes.title}`]: {
      marginBottom: 55,
    },

    [`.${classes.contentContainer}`]: {
      [`.${classes.contentColumn}`]: {
        h3: {
          margin: '33px 0',
        },
      },
    },
  },
}));

export default {
  IntroSection,
};
