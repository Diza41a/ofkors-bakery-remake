import Menu from "./Menu";
import { getMenus } from "../../../api/menuItemsAPI.ts";
import S, { classes } from "./styles";

const MenuSection = (): JSX.Element => {
  const menus = getMenus();

  return (
    <S.MenuSection className={classes.root}>
      <div className={classes.menusContainer}>
        {menus.map((menu) => <Menu key={menu.id} menu={menu} />)}
      </div>
    </S.MenuSection>
  );
};

export default MenuSection;
