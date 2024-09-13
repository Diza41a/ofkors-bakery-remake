import { useEffect, useState } from "react";
import S, { classes } from './styles';
import { useTranslation } from "react-i18next";
import { Languages as LangIcon, ChevronDown as ChevronDownIcon } from 'lucide-react';
import type { LanguageLabels, LanguageMenuProps } from "./props";

const LANGUAGES: LanguageLabels = {
  en: {
    activeLabel: 'ENG',
    menuLabel: 'English',
  },
  uk: {
    activeLabel: 'УКР',
    menuLabel: 'Українська',
  },
  ru: {
    activeLabel: 'РУС',
    menuLabel: 'Русский',
  },
};

const LanguageMenu = ({ isHeaderOpaque, isNavMenuExpanded }: LanguageMenuProps): JSX.Element => {
  const { i18n } = useTranslation();

  const [isLanguageMenuExpanded, setIsLanguageMenuExpanded] = useState(false);
  const languageMenuClassNames = [classes.languageMenu];
  if (isLanguageMenuExpanded) languageMenuClassNames.push(classes.languageMenuExpanded);

  const currentLanguageCode = i18n.language;
  const currentLanguageLabel = LANGUAGES[currentLanguageCode].activeLabel;
  const languageOptions = Object.entries(LANGUAGES)
    .filter(([langCode]) => langCode !== currentLanguageCode)
    .map(([langCode, langLabels]) => (
      { label: langLabels.menuLabel, value: langCode }
    ));

  useEffect(() => {
    if (!isLanguageMenuExpanded) return;

    const closeLanguageMenuOnExternalClick = (e: MouseEvent | TouchEvent) => {
      const domEl = e.target as HTMLElement;
      const isExternalClick = !domEl.closest(`.${classes.languageMenuContainer}`);
      if (isExternalClick) setIsLanguageMenuExpanded(false);
    };

    window.addEventListener('click', closeLanguageMenuOnExternalClick);
    return () => window.removeEventListener('click', closeLanguageMenuOnExternalClick);
  }, [isLanguageMenuExpanded]);

  return (
    <S.LanguageMenu
      isHeaderOpaque={isHeaderOpaque}
      isNavMenuExpanded={isNavMenuExpanded}
      className={classes.languageMenuContainer}
    >
      <button
        className={classes.languageMenuToggle}
        onClick={() => {
          if (!isNavMenuExpanded) setIsLanguageMenuExpanded(!isLanguageMenuExpanded);
        }}
      >
        <LangIcon className={classes.languageIcon} />
        <p className={classes.currentLanguageLabel}>{currentLanguageLabel}</p>
        <ChevronDownIcon className={classes.chevronDownIcon} />
      </button>
      <ul className={languageMenuClassNames.join(' ')}>
        {languageOptions.map(({ label, value }) => (
          <li key={value}>
            <button
              onClick={() => {
                i18n.changeLanguage(value);
                setIsLanguageMenuExpanded(false);
              }
            }>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </S.LanguageMenu>
  );
};

export default LanguageMenu;
