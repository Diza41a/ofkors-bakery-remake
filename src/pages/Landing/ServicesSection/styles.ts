import styled from "styled-components";
import { MOBILE_VIEW_BREAKPOINT, type Theme } from "../../../global/theme";

export const classes = {
  servicesContainer: 'Landing-Services-Container',
  serviceCard: 'Landing-Service-Card',
  serviceCardImageContainer: 'Landing-Service-Card-ImgContainer',
  serviceCardTextContainer: 'Landing-Service-Card-TxtContainer',
};

const ServicesSection = styled('section')<{ theme: Theme }>(({ theme }) => ({
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

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
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
}));

export default {
  ServicesSection,
};