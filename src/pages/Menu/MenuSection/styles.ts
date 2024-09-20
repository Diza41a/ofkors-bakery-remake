import styled from "styled-components";
import type { StyledComponent } from "../../../global/types/styleTypes";

// TODO: Replace with some animated background transition feature
import BgImg from '../../../assets/images/menu_page/menu-section_bg.png';
import { rgba } from "polished";

export const classes = {
  root: 'Menu-MenuSection-Container',
  menuContainer: 'Menu-MenuSection-MenuContainer',
  title: 'Menu-MenuSection-Title',
};

const MenuSection = styled('section')<StyledComponent>(({ theme }) => ({
  backgroundImage: `url(${BgImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '120px 10%',

  [`.${classes.menuContainer}`]: {
    padding: '40px 60px',
    backgroundColor: rgba(theme.colors.bg.dark, 0.8),
    border: `1px dashed ${theme.colors.text.darkGray}`,

    [`.${classes.title}`]: {
      paddingBottom: 90,
      ...theme.typography.display3,
      color: theme.colors.text.white,
      textAlign: 'center',
      textShadow: '3px 3px 8px #080808',
    },
  },
}));

export default {
  MenuSection,
};
