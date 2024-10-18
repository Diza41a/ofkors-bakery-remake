import Menu from "./Menu";
import { getMenus } from "../../../api/menuItemsAPI.ts";
import S, { classes } from "./styles";

const MenuSection = (): JSX.Element => {
  const menus = getMenus();

  const coffeeMenu = menus.find((menu) => (menu.category.en === 'Coffee & Drinks'));
  const breakfastLunchMenu = menus.find((menu) => (menu.category.en === 'Breakfast & Lunch'));
  const drinksMenu = menus.find((menu) => (menu.category.en === 'Drinks'));
  const dessertsMenu = menus.find((menu) => (menu.category.en === 'Desserts'));

  return (
    <S.MenuSection className={classes.root}>
      <div className={classes.menusContainer}>
        {coffeeMenu && <Menu data={coffeeMenu} backgroundImageUrl={''} />}
        {breakfastLunchMenu && <Menu data={breakfastLunchMenu} backgroundImageUrl={''} />}
        {drinksMenu && <Menu data={drinksMenu} backgroundImageUrl={''} />}
        {dessertsMenu && <Menu data={dessertsMenu} backgroundImageUrl={''} />}
      </div>
    </S.MenuSection>
  );
};

export default MenuSection;
