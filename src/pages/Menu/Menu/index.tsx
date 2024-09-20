import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import S, { classes } from './styles';
import { locales, type TLanguage } from '../../../translations';
import { getMenu } from '../../../api/menuItemsAPI';
import type { MenuItem } from '../../../types/Menu';

const FOOD_CATEGORIES = ['Baked Goods', 'Drinks', 'Savory', 'Hot Foods', 'Desserts'];

const Menu = (): JSX.Element => {
  const { i18n: { language } } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState(FOOD_CATEGORIES[0]);
  const menuItems = getMenu();

  const renderNavBtn = (category: string) => {
    const classNames = [classes.btnNav];
    if (selectedCategory === category) classNames.push(classes.btnNavActive);

    return (
      <button
        key={category}
        className={classNames.join(' ')}
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    );
  };
  const renderMenuItemCard = (menuItem: MenuItem) => {
    const lang = locales.includes(language as TLanguage) ? language : 'en';

    return (
      <div className={classes.menuCard} key={menuItem.id}>
        <div className={classes.menuCardTitleRow}>
          <h3 className={classes.menuCardTitle}>{menuItem.name[lang]}</h3>
          <span className={classes.menuCardPrice}>${menuItem.price.toFixed(2)}</span>
        </div>
        <div className={classes.menuCardBody}>
          <p className={classes.menuCardBody}>
            {menuItem.description[lang]}
          </p>
        </div>
      </div>
    );
  };

  return (
    <S.MenuWrapper className={classes.root}>
      <div className={classes.nav}>
        {FOOD_CATEGORIES.map((category) => renderNavBtn(category))}
      </div>
      <div className={classes.body}>
        {menuItems.map((menuItem) => renderMenuItemCard(menuItem))}
      </div>
    </S.MenuWrapper>
  );
};

export default Menu;
