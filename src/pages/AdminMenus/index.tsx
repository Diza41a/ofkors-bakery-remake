import { useState } from 'react';
import Modal from '../../components/Modal';
import { MenuItemCreateForm } from './MenuItemForms';
import S, { classes } from './styles';
import Button from '../../components/Button';

const AdminMenus = (): JSX.Element => {
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

  return (
    <S.AdminMenusPageContainer>
      <Button
        accentColor={'#0f86ff'}
        onClick={onNewMenuItemBtnClick}
      >
        Add Menu Item +
      </Button>

      <div className={classes.menuContainer}>
        <h2>Coffee & Drinks</h2>
      </div>
      <div className={classes.menuContainer}>
        <h2>Baked Goods</h2>
      </div>
      <div className={classes.menuContainer}>
        <h2>Breakfast & Lunch</h2>
      </div>
      <div className={classes.menuContainer}>
        <h2>Desserts</h2>
      </div>

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
