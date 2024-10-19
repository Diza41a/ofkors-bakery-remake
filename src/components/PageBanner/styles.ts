import styled from "styled-components";
import { constants as headerConstants } from "../Header/styles";
import { MOBILE_VIEW_BREAKPOINT } from "../../global/theme";
import type { StyledComponent } from "../../global/types/styleTypes";
import { zIndexes } from "../../global/styles";

export const classes = {
  container: 'PageBanner-Container',
  root: 'PageBanner',
  loadingOverlay: 'PageBanner-LoadingOverlay',
  loadingOverlayTransparent: 'PageBanner-LoadingOverlay--transparent',
};

const PageBannerContainer = styled('div')<StyledComponent>(({ theme }) => ({
  position: 'relative',
  zIndex: zIndexes.pageBanner,

  [`.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 328 + headerConstants.height,
    background: 'linear-gradient(to bottom, rgb(0 0 0 / 80%) 0%, rgb(0 0 0 / 56%) 100%)',
    textShadow: '3px 3px 2px #252525',

    h2: {
      position: 'relative',
      zIndex: zIndexes.pageBannerTitle,
      ...theme.typography.display2,
      color: theme.colors.text.white,
    },
  },

  [`.${classes.loadingOverlay}`]: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0)',
    opacity: 0.8,
    zIndex: zIndexes.pageBannerLoadingOverlay,
    transition: 'opacity 0.2s ease-in-out',

    [`&.${classes.loadingOverlayTransparent}`]: {
      opacity: 0,
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
