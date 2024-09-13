import styled from "styled-components";
import { HEADER_BURGER_BREAKPOINT, MOBILE_VIEW_BREAKPOINT, type Theme } from "../../../global/theme";
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
    'isNavMenuExpanded',
  ].includes(prop)
);

const LanguageMenu = styled('div').withConfig({
  shouldForwardProp: styledLanguageMenuShouldForwardProp,
})<StyledLanguageMenuProps>(({ theme, isHeaderOpaque, isNavMenuExpanded }) => ({
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
    opacity: isNavMenuExpanded ? 0 : 1,
    transition: 'color 0.2s ease-in-out, opacity 0.2s ease-in-out',

    [`.${classes.languageIcon}`]: {
      width: 17,
      strokeWidth: 1.5,
    },

    [`.${classes.currentLanguageLabel}`]: {
      marginLeft: 2,
    },

    [`.${classes.chevronDownIcon}`]: {
      position: 'relative',
      top: 2,
      width: 17,
    },
  },

  [`.${classes.languageMenu}`]: {
    display: 'none',
    paddingTop: 10,
    position: 'absolute',
    listStyle: 'none',

    li: {
      button: {
        width: '100%',
        padding: '10px',
        textAlign: 'left',
        ...theme.typography.link,
        color: theme.colors.text.white,
        backgroundColor: theme.colors.brown,
        border: 'none',
        transition: 'color 0.2s ease-in-out',
        cursor: 'pointer',

        '&:hover': {
          color: theme.colors.action.gold,
        },
      },

      '&:first-of-type': {
        button: {
          paddingBottom: 5,
        },
      },
      '&:last-of-type': {
        button: {
          paddingTop: 5,
        },
      },
    },

    [`&.${classes.languageMenuExpanded}`]: {
      display: 'block',
    },
  },

  '@media (max-width: 960px)': {
    marginLeft: 25,
  },

  [`@media(max-width: ${HEADER_BURGER_BREAKPOINT}px)`]: {
    [`.${classes.languageMenuToggle}`]: {
      right: 5,

      [`.${classes.languageIcon}`]: {
        width: 25,
      },

      [`.${classes.currentLanguageLabel}`]: {
        display: 'none',
      },

      [`.${classes.chevronDownIcon}`]: {
        width: 17,
        top: 7,
      },
    },
  },

  [`@media(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    [`.${classes.languageMenu}`]: {
      li: {
        button: {
          fontSize: 20,
        },
      },
    },
  },
}));

export default {
  LanguageMenu,
};
