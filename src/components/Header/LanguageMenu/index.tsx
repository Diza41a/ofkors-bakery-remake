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

const LanguageMenu = ({ isHeaderOpaque }: LanguageMenuProps): JSX.Element => {
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
    const handleExternalClick = (e: MouseEvent | TouchEvent) => {
      const htmlEl = e.target as HTMLElement;

      if (!htmlEl.closest(`.${classes.languageMenu}`) && isLanguageMenuExpanded) {
        console.log('here');
        setIsLanguageMenuExpanded(false);
      }
    };

    window.addEventListener('click', handleExternalClick);

    return () => {
      window.removeEventListener('click', handleExternalClick);
    };
  }, []);

  return (
    <S.LanguageMenu
      isHeaderOpaque={isHeaderOpaque}
      className={classes.languageMenuContainer}
    >
      <button
        className={classes.languageMenuToggle}
        onClick={() => setIsLanguageMenuExpanded(!isLanguageMenuExpanded) }
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
