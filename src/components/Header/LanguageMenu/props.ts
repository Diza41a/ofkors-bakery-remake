export interface LanguageMenuProps {
  isHeaderOpaque: boolean;
  isNavMenuExpanded: boolean;
};

export type LanguageLabels = {
  [key in string]: {
    activeLabel: string,
    menuLabel: string,
  }
};