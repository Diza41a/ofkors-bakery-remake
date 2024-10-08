import Menu from "./Menu";
import S, { classes } from "./styles";

const MenuSection = (): JSX.Element => {
  return (
    <S.MenuSection className={classes.root}>
      <div className={classes.menuContainer}>
        <h2 className={classes.title}>
          It is our pride to offer premium quality products from all over the world
        </h2>

        <Menu />
      </div>
    </S.MenuSection>
  );
};

export default MenuSection;
