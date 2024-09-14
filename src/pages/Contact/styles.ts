import styled from "styled-components";
import BgImage from '../../assets/images/bg_main.png'
import type { StyledComponent } from "../../global/props/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../global/theme";

export const classes = {
  title: 'Contact-Title',
  imgLeftBranch: 'Contact-Img-LeftBranch',
  imgRightBranch: 'Contact-Img-RightBranch',
  formContainer: 'Contact-FormContainer',
};

const ContactContainer = styled('div')<StyledComponent>(({ theme }) => ({
  backgroundImage: `url(${BgImage})`,
  padding: '120px 10%',

  [`.${classes.title}`]: {
    ...theme.typography.display2,
    color: theme.colors.text.heading,
    textAlign: 'center',
    marginBottom: 80,
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    padding: '60px 5%',

    [`.${classes.title}`]: {
      marginBottom: 55,
    },
  },
}));

export default {
  ContactContainer,
};
