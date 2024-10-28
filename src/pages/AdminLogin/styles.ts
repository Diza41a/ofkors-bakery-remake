import styled from "styled-components";
import BgImage from '../../assets/images/bg_main.png';
import { StyledComponent } from "../../global/types/styleTypes";

export const classes = {
  root: 'AdminPageContainer',
};

const AdminLoginPageContainer = styled('div')<StyledComponent>(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30,
    background: theme.colors.bg.white,
    width: '90%',
    maxWidth: 500,
    boxShadow: '0px 18px 30px -5px #0000002b',

    '>p': {
      ...theme.typography.paragraph2,
      color: theme.colors.text.heading,
      marginBottom: 14,
    },

    '>button': {
      marginTop: 14,

    },
  },
}));

export default {
  AdminLoginPageContainer,
};
