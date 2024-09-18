import styled from "styled-components";
import { constants as headerConstants } from "../Header/styles";
import { MOBILE_VIEW_BREAKPOINT } from "../../global/theme";
import BgImg from '../../assets/images/page_banner.jpg';
import type { StyledComponent } from "../../global/types/styleTypes";

export const classes = {
  root: 'PageBanner',
};

const PageBanner = styled('div')<StyledComponent>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 328 + headerConstants.height,
  background: `linear-gradient(to bottom, rgb(0 0 0 / 80%) 0%, rgb(0 0 0 / 56%) 100%), url(${BgImg})`,
  backgroundSize: 'cover',
  backgroundPositionY: '34%',

  h2: {
    ...theme.typography.display2,
    color: theme.colors.text.white,
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    height: 328 + headerConstants.mobileHeight,
  },
}));

export default {
  PageBanner,
};
