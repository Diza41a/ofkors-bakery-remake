import styled from "styled-components";
import { constants as headerConstants } from "../Header/styles";
import { MOBILE_VIEW_BREAKPOINT } from "../../global/theme";
// TODO: Clear this
// import BgImg from '../../assets/images/page_banner.jpg';
import type { StyledComponent } from "../../global/types/styleTypes";

export const classes = {
  container: 'PageBanner-Container',
  root: 'PageBanner',
};

const PageBannerContainer = styled('div')<StyledComponent>(({ theme }) => ({
  // backgroundImage: `url(${BgImg})`,
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // backgroundAttachment: 'fixed',
  // backgroundRepeat: 'no-repeat',

  [`.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 328 + headerConstants.height,
    background: 'linear-gradient(to bottom, rgb(0 0 0 / 80%) 0%, rgb(0 0 0 / 56%) 100%)',
    textShadow: '3px 3px 2px #252525',

    h2: {
      ...theme.typography.display2,
      color: theme.colors.text.white,
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    [`.${classes.root}`]: {
      height: 328 + headerConstants.mobileHeight,
    },
  },
}));

export default {
  PageBannerContainer,
};
