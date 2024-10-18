import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Menu from "./Menu";
import { getMenus } from "../../../api/menuItemsAPI.ts";
import S, { classes } from "./styles";
import { classes as menuClasses } from "./Menu/styles";

import CoffeeMenuBg from '../../../assets/images/menu_page/coffee_menu_bg.jpg';
import BakedGoodsMenuBg from '../../../assets/images/menu_page/baked_goods_menu_bg.jpg';
import LunchMenuBg from '../../../assets/images/menu_page/lunch_menu_bg.jpg';
import DessertsMenuBg from '../../../assets/images/menu_page/desserts_menu_bg.jpg';
import LeftVectorImg from '../../../assets/images/menu_page/left_vector.svg';
import RightVectorImg from '../../../assets/images/menu_page/right_vector.svg';
import { useTranslation } from "react-i18next";

const MenuSection = (): JSX.Element => {
  const { t } = useTranslation('menu');

  const menuSectionRef = useRef<HTMLDivElement>(null);
  const menus = getMenus();

  const coffeeMenu = menus.find((menu) => (menu.category.en === 'Coffee & Drinks'));
  const bakedGoodsMenu = menus.find((menu) => (menu.category.en === 'Baked Goods'));
  const breakfastLunchMenu = menus.find((menu) => (menu.category.en === 'Breakfast & Lunch'));
  const dessertsMenu = menus.find((menu) => (menu.category.en === 'Desserts'));

  useGSAP(() => {
    if(!menuSectionRef.current) return;

    const menuEls = menuSectionRef.current.querySelectorAll(`.${menuClasses.root}`);

    menuEls.forEach((menuEl) => {
      gsap.fromTo(
        menuEl,
        { opacity: 0, scale: 0.75 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: menuEl,
            start: 'top 110%',
            end: 'bottom -10%',
          },
        },
      );
    });
  }, { scope: menuSectionRef });

  return (
    <S.MenuSection className={classes.root} ref={menuSectionRef}>
      <div className={classes.leftVectorImgWrapper}>
        <img src={LeftVectorImg} />
      </div>

      <h2 className={classes.title}>{t("menu:title")}</h2>

      <div className={classes.menusContainer}>
        {coffeeMenu && <Menu data={coffeeMenu} backgroundImageUrl={CoffeeMenuBg} />}
        {bakedGoodsMenu && <Menu data={bakedGoodsMenu} backgroundImageUrl={BakedGoodsMenuBg} />}
        {breakfastLunchMenu && <Menu data={breakfastLunchMenu} backgroundImageUrl={LunchMenuBg} />}
        {dessertsMenu && <Menu data={dessertsMenu} backgroundImageUrl={DessertsMenuBg} />}
      </div>

      <div className={classes.rightVectorImgWrapper}>
      <img src={RightVectorImg} />
      </div>
    </S.MenuSection>
  );
};

export default MenuSection;
