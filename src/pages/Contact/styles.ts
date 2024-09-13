import styled from "styled-components";
import BgImage from '../../assets/images/bg_main.png'
import type { StyledComponent } from "../../global/props/styleTypes";

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
}));

export default {
  ContactContainer,
};
