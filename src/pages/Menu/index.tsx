import { useTranslation } from "react-i18next";
import PageBanner from "../../components/PageBanner";
import MenuSection from "./MenuSection";
import BannerImg from "../../assets/images/menu_page/page_banner.png";

const CLASS_NAME = 'Menu';

const MenuPage = (): JSX.Element => {
  const { t } = useTranslation('menu');

  return (
    <div className={CLASS_NAME}>
      <PageBanner pageTitle={t('banner')} bgImage={BannerImg} />
      <MenuSection />
    </div>
  );
};

export default MenuPage;
