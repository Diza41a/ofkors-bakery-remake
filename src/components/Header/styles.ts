import styled from "styled-components";
import type { Theme } from "../../global/theme";

export const classes = {
  logoLink: 'Logo-Link',
};

const Header = styled('header')<{ theme: Theme }>(() => ({
  backgroundColor: 'red',
  height: '80px',
  width: '100%',
  borderBottom: '1px solid black',
  padding: '0 20%',

  [`.${classes.logoLink}`]: {
    img: {
      width: 135,
    },
  },
}));

export default {
  Header,
};
