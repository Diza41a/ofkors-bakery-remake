import styled from "styled-components";
import type { Theme } from "../../../global/theme";
import type { LanguageMenuProps } from "./props";

interface StyledLanguageMenuProps extends LanguageMenuProps {
  theme: Theme;
};

export const classes = {
  languageMenuContainer: 'Header-LanguageContainer',
  languageMenuToggle: 'Header-LanguageMenuToggle',
  languageMenu: 'Header-LanguageMenu',
  languageMenuExpanded: 'Header-LanguageMenu--expanded',
  languageIcon: 'Header-LanguageMenu-LanguageIcon',
  currentLanguageLabel: 'Header-LanguageMenu-Lbl-CurrentLanguage',
  chevronDownIcon: 'Header-LanguageMenu-ChevronDownIcon',
};

const styledLanguageMenuShouldForwardProp = (prop: string) => (
  ![
    'isHeaderOpaque',
  ].includes(prop)
);

const LanguageMenu = styled('div').withConfig({
  shouldForwardProp: styledLanguageMenuShouldForwardProp,
})<StyledLanguageMenuProps>(({ theme, isHeaderOpaque }) => ({
  marginLeft: 30,

  [`.${classes.languageMenuToggle}`]: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    ...theme.typography.link,
    color: isHeaderOpaque ? theme.colors.text.heading : theme.colors.text.white,
    background: 'none',
    border: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'color 0.2s ease-in-out',

    [`.${classes.languageIcon}`]: {
      width: 17,
    },

    [`.${classes.currentLanguageLabel}`]: {
      marginLeft: 2,
    },

    [`.${classes.chevronDownIcon}`]: {
      position: 'relative',
      top: 2,
      width: 17,
    },

    '&:hover': {
      color: theme.colors.action.gold,
    },
  },

  [`.${classes.languageMenu}`]: {
    display: 'none',

    [`&.${classes.languageMenuExpanded}`]: {
      display: 'block',
    },
  },
}));

export default {
  LanguageMenu,
};
