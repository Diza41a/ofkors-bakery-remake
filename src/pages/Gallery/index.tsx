import PageBanner from "../../components/PageBanner";
import Gallery from "./Gallery";

const GalleryPage = (): JSX.Element => {
  return (
    <div>
      <PageBanner pageTitle="Gallery" />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
