import { useTranslation } from 'react-i18next';
import S, { classes } from './styles';
import { locales, type TLanguage } from '../../../../translations';
import type { Menu, MenuItem } from '../../../../types/Menu';

interface MenuProps {
  menu: Menu
};

const Menu = ({ menu }: MenuProps): JSX.Element => {
  const { i18n: { language } } = useTranslation();

  const renderMenuItemCard = (menuItem: MenuItem) => {
    const lang = locales.includes(language as TLanguage) ? language : 'en';

    return (
      <div className={classes.menuCard} key={menuItem.id}>
        <div className={classes.menuCardTitleRow}>
          <h3 className={classes.menuCardTitle}>{menuItem.name[lang as TLanguage]}</h3>
          <span className={classes.menuCardPrice}>${menuItem.price.toFixed(2)}</span>
        </div>
        <div className={classes.menuCardBody}>
          <p className={classes.menuCardBody}>
            {menuItem.description[lang as TLanguage]}
          </p>
        </div>
      </div>
    );
  };

  return (
    <S.MenuWrapper
      className={classes.root}
      style={{ backgroundImage: `url(${menu.backgroundImageUrl})` }}
    >
      <h2 className={classes.title}>
        {menu.category[language as TLanguage] || menu.category.en}
      </h2>
      <div className={classes.body}>
        {menu.items.map((menuItem) => renderMenuItemCard(menuItem))}
      </div>
    </S.MenuWrapper>
  );
};

export default Menu;
