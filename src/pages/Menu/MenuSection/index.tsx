import Menu from "./Menu";
import { getMenus } from "../../../api/menuItemsAPI.ts";
import S, { classes } from "./styles";
import { MenuCategoryEn } from "../../../types/Menu.d";

const MenuSection = (): JSX.Element => {
  const menus = getMenus();

  const coffeeMenu = menus.find((menu) => (menu.category.en === MenuCategoryEn.COFFEE_DRINKS));
  const breakfastLunchMenu = menus.find((menu) => (menu.category.en === MenuCategoryEn.BREAKFAST_LUNCH));
  const drinksMenu = menus.find((menu) => (menu.category.en === MenuCategoryEn.DRINKS));
  const dessertsMenu = menus.find((menu) => (menu.category.en === MenuCategoryEn.DESSERTS));

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
