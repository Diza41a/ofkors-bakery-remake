import styled from "styled-components";
import { MOBILE_VIEW_BREAKPOINT } from "../../../global/theme";
import type { StyledComponent } from "../../../global/props/styleTypes";

export const classes = {
  root: 'Landing-Services-Container',
  card: 'Landing-Service-Card',
  cardImageContainer: 'Landing-Service-Card-ImgContainer',
  cardTextContainer: 'Landing-Service-Card-TxtContainer',
};

const ServicesSection = styled('section')<StyledComponent>(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 30,
  rowGap: 40,
  padding: '120px 5%',

  [`.${classes.card}`]: {
    display: 'flex',
    columnGap: 20,
    width: 370,

    [`.${classes.cardImageContainer}`]: {
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

    [`.${classes.cardTextContainer}`]: {
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

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    padding: '60px 5%',

    [`.${classes.card}`]: {
      [`.${classes.cardImageContainer}`]: {
        width: 55,
        height: 55,

        img: {
          transform: 'scale(0.75)',
        },
      },

      [`.${classes.cardTextContainer}`]: {
        h3: {
          marginBottom: 17,
        },
      },
    },
  },
}));

export default {
  ServicesSection,
};
