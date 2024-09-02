import styled from "styled-components";
import type { Theme } from "../../global/theme";
import theme from "../../global/theme";

export const classes = {
  opaqueBackground: 'Header-OpaqueBackground',
  logoLink: 'Header-LogoLink',
};

const Header = styled('header')<{ theme: Theme }>(() => ({
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  height: 80,
  width: '100%',
  padding: '0 20%',
  backgroundColor: theme.colors.brown,
  transition: 'background-color 0.3s ease-in-out',

  [`.${classes.logoLink}`]: {
    display: 'flex',

    img: {
      width: 145,
    },
  },

  [`&.${classes.opaqueBackground}`]: {
    backgroundColor: 'transparent',
  },
}));

export default {
  Header,
};
