import styled from "styled-components";
import BgImage from '../../assets/images/bg_main.png'
import type { StyledComponent } from "../../global/types/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../global/theme";

export const classes = {
  title: 'Contact-Title',
  imgRightBranch: 'Contact-Img-RightBranch',
  formContainer: 'Contact-FormContainer',
};

const ContactContainer = styled('div')<StyledComponent>(({ theme }) => ({
  backgroundImage: `url(${BgImage})`,
  padding: '120px 10%',
  position: 'relative',
  overflow: 'hidden',

  [`.${classes.title}`]: {
    ...theme.typography.display2,
    color: theme.colors.text.heading,
    textAlign: 'center',
    marginBottom: 80,
  },

  [`.${classes.imgRightBranch}`]: {
    position: 'absolute',
    bottom: 0,
    right: 0,

    animation: 'rotateRightBranch 6s infinite alternate',
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    padding: '60px 5%',

    [`.${classes.title}`]: {
      marginBottom: 55,
    },

    [`.${classes.imgRightBranch}`]: {
      width: 270,
    },
  },
}));

export default {
  ContactContainer,
};
