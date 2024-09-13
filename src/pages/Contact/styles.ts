import styled from "styled-components";
import type { Theme } from "../../global/theme";
import BgImage from '../../assets/images/bg_main.png'

export const classes = {
  title: 'Contact-Title',
  imgLeftBranch: 'Contact-Img-LeftBranch',
  imgRightBranch: 'Contact-Img-RightBranch',
  formContainer: 'Contact-FormContainer',
};

const ContactContainer = styled('div')<{ theme: Theme }>(({ theme }) => ({
  backgroundImage: `url(${BgImage})`,
  padding: '120px 10%',

  [`.${classes.title}`]: {
    ...theme.typography.display2,
    color: theme.colors.text.heading,
    textAlign: 'center',
  },
}));

export default {
  ContactContainer,
};
