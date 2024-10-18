import Menu from "./Menu";
import { getMenus } from "../../../api/menuItemsAPI.ts";
import S, { classes } from "./styles";

import CoffeeMenuBg from '../../../assets/images/menu_page/coffee_menu_bg.jpg';
import BakedGoodsMenuBg from '../../../assets/images/menu_page/baked_goods_menu_bg.jpg';
import LunchMenuBg from '../../../assets/images/menu_page/lunch_menu_bg.jpg';
import DessertsMenuBg from '../../../assets/images/menu_page/desserts_menu_bg.jpg';

const MenuSection = (): JSX.Element => {
  const menus = getMenus();

  const coffeeMenu = menus.find((menu) => (menu.category.en === 'Coffee & Drinks'));
  const bakedGoodsMenu = menus.find((menu) => (menu.category.en === 'Baked Goods'));
  const breakfastLunchMenu = menus.find((menu) => (menu.category.en === 'Breakfast & Lunch'));
  const dessertsMenu = menus.find((menu) => (menu.category.en === 'Desserts'));

  return (
    <S.MenuSection className={classes.root}>
      <div className={classes.menusContainer}>
        {coffeeMenu && <Menu data={coffeeMenu} backgroundImageUrl={CoffeeMenuBg} />}
        {bakedGoodsMenu && <Menu data={bakedGoodsMenu} backgroundImageUrl={BakedGoodsMenuBg} />}
        {breakfastLunchMenu && <Menu data={breakfastLunchMenu} backgroundImageUrl={LunchMenuBg} />}
        {dessertsMenu && <Menu data={dessertsMenu} backgroundImageUrl={DessertsMenuBg} />}
      </div>
    </S.MenuSection>
  );
};

export default MenuSection;
