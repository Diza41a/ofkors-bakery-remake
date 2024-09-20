import PageBanner from "../../components/PageBanner";

const CLASS_NAME = 'Menu';

const MenuPage = (): JSX.Element => {
  return (
    <div className={CLASS_NAME}>
      <PageBanner pageTitle="Menu" />
    </div>
  );
};

export default MenuPage;
