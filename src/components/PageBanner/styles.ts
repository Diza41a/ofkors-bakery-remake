import styled from "styled-components";
import BgImg from '../../assets/images/page_banner.jpg';
import type { StyledComponent } from "../../global/types/styleTypes";

export const classes = {
  root: 'PageBanner',
};

const PageBanner = styled('div')<StyledComponent>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '328px',
  background: `linear-gradient(to bottom, rgb(0 0 0 / 80%) 0%, rgb(0 0 0 / 56%) 100%), url(${BgImg})`,
  backgroundSize: 'cover',
  backgroundPositionY: '34%',

  h2: {
    ...theme.typography.display2,
    color: theme.colors.text.white,
  },
}));

export default {
  PageBanner,
};
