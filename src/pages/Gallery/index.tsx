import { useTranslation } from "react-i18next";
import PageBanner from "../../components/PageBanner";
import Gallery from "./Gallery";
import BannerImg from "../../assets/images/gallery_page/page_banner.png";

const GalleryPage = (): JSX.Element => {
  const { t } = useTranslation('gallery');

  return (
    <div>
      <PageBanner pageTitle={t('banner')} bgImage={BannerImg} />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
