import { useState } from 'react';
import Modal from '../../components/Modal';
import { MenuItemCreateForm } from './MenuItemForms';
import S, { classes } from './styles';
import Button from '../../components/Button';
import useMenus from '../../hooks/useMenus';

const AdminMenus = (): JSX.Element => {
  const { menus, isLoading } = useMenus();
  const [modalProps, setModalProps] = useState({
    open: false,
    content: <></>,
  });
  const onNewMenuItemBtnClick = () => {
    setModalProps({
      open: true,
      content: <MenuItemCreateForm />,
    });
  };

  const renderMenuContainers = () => {
    const coffeeMenu = menus.find((menu) => (menu.category === 'coffee_and_drinks'));
    const bakedGoodsMenu = menus.find((menu) => (menu.category === 'baked_goods'));
    const breakfastLunchMenu = menus.find((menu) => (menu.category === 'breakfast_and_lunch'));
    const dessertsMenu = menus.find((menu) => (menu.category === 'desserts'));

    return (
      <>
        {coffeeMenu && <div className={classes.menuContainer}>
          <h2>Coffee & Drinks</h2>
          {coffeeMenu.items.map((menuItem) => menuItem.name.en)}
        </div>}
        {bakedGoodsMenu && <div className={classes.menuContainer}>
          <h2>Baked Goods</h2>
          {bakedGoodsMenu.items.map((menuItem) => menuItem.name.en)}
        </div>}
        {breakfastLunchMenu && <div className={classes.menuContainer}>
          <h2>Breakfast & Lunch</h2>
          {breakfastLunchMenu.items.map((menuItem) => menuItem.name.en)}
        </div>}
        {dessertsMenu && <div className={classes.menuContainer}>
          <h2>Desserts</h2>
          {dessertsMenu.items.map((menuItem) => menuItem.name.en)}
        </div>}
      </>
    );
  };

  return (
    <S.AdminMenusPageContainer>
      <Button
        accentColor={'#0f86ff'}
        onClick={onNewMenuItemBtnClick}
      >
        Add Menu Item +
      </Button>

      {isLoading ? (
        <p>Loading...</p>
      ): renderMenuContainers()}

      <Modal
        open={modalProps.open}
        onClose={() => setModalProps({ open: false, content: <></> })}
      >
        {modalProps.content}
      </Modal>
    </S.AdminMenusPageContainer>
  );
};

export default AdminMenus;
