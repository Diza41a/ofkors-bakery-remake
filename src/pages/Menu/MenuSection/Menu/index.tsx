import { useTranslation } from 'react-i18next';
import S, { classes } from './styles';
import { locales, type TLanguage } from '../../../../translations';
import { getMenu } from '../../../../api/menuItemsAPI';
import type { MenuItem } from '../../../../types/Menu';

const Menu = (): JSX.Element => {
  const { i18n: { language } } = useTranslation();

  const menuItems = getMenu();

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
    <S.MenuWrapper className={classes.root}>
      <div className={classes.nav}>
      </div>
      <div className={classes.body}>
        {menuItems.map((menuItem) => renderMenuItemCard(menuItem))}
      </div>
    </S.MenuWrapper>
  );
};

export default Menu;
