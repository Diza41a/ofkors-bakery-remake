import styled from "styled-components";
import type { StyledComponent } from "../../../global/types/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../../global/theme";
import { zIndexes } from "../../../global/styles";

export const classes = {
  root: 'About-Video-Container',
};

const VideoSection = styled('section')<StyledComponent>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '100px 5%',
  position: 'relative',
  overflowX: 'hidden',
  backgroundColor: theme.colors.bg.lightAlt,

  iframe: {
    width: '80%',
    height: '600px',
    position: 'relative',
    zIndex: zIndexes.aboutMainMediaEls,
  },

  '@media (max-width: 1350px)': {
    padding: '100px 2.5%',

    iframe: {
      width: '100%',
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    padding: '80px 3%',

    iframe: {
      height: '400px',
    },
  },
}));

export default {
  VideoSection,
};
