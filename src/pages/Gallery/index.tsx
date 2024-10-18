import { useTranslation } from "react-i18next";
import PageBanner from "../../components/PageBanner";
import Gallery from "./Gallery";

const GalleryPage = (): JSX.Element => {
  const { t } = useTranslation('gallery');

  return (
    <div>
      <PageBanner pageTitle={t('banner')} bgImage="" />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
