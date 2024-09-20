import PageBanner from "../../components/PageBanner";
import MenuSection from "./MenuSection";

const CLASS_NAME = 'Menu';

const MenuPage = (): JSX.Element => {
  return (
    <div className={CLASS_NAME}>
      <PageBanner pageTitle="Menu" />
      <MenuSection />
    </div>
  );
};

export default MenuPage;
