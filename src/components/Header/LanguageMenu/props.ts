export interface LanguageMenuProps {
  isLandingHeaderOpaque: boolean;
  isNavMenuExpanded: boolean;
};

export type LanguageLabels = {
  [key in string]: {
    activeLabel: string,
    menuLabel: string,
  }
};