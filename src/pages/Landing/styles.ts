import styled from "styled-components";
import type { Theme } from "../../global/theme";
import { constants as headerStyleConstants } from "../../components/Header/styles";

const LandingWrapper = styled('div')<{ theme: Theme }>(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  bottom: `${headerStyleConstants.height}px`,
  backgroundColor: theme.colors.bg.light,

  [`@media (max-width: ${headerStyleConstants.burgerDisplayBreakpoint}px)`]: {
    bottom: `${headerStyleConstants.mobileHeight}px`,
  },
}));

export default {
  LandingWrapper,
};
