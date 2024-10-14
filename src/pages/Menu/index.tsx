import { useTranslation } from "react-i18next";
import PageBanner from "../../components/PageBanner";
import MenuSection from "./MenuSection";

const CLASS_NAME = 'Menu';

const MenuPage = (): JSX.Element => {
  const { t } = useTranslation('menu');

  return (
    <div className={CLASS_NAME}>
      <PageBanner pageTitle={t('banner')} />
      <MenuSection />
    </div>
  );
};

export default MenuPage;
