export interface LanguageMenuProps {
  isHeaderOpaque: boolean;
};

export type LanguageLabels = {
  [key in string]: {
    activeLabel: string,
    menuLabel: string,
  }
};