
import { useState } from 'react';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from 'yet-another-react-lightbox/plugins';
import { ZoomIn as ZoomInIcon } from 'lucide-react';
// import { photos } from './slides';
import S, { classes } from './styles';

import "react-photo-album/columns.css";
import "yet-another-react-lightbox/styles.css";

const Gallery = (): JSX.Element => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <S.GalleryWrapper className={classes.root}>
      <ColumnsPhotoAlbum
        photos={[]}
        padding={0}
        spacing={0}
        onClick={({ index }) => {
          setIsLightboxOpen(true);
          setLightboxIndex(index);
        }}
        render={{
          extras: () => (
            <div className={classes.photoHoverOverlayWrapper}>
              <ZoomInIcon />
            </div>
          )
        }}
      />

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={lightboxIndex}
        slides={[]}
        plugins={[Zoom]}
        controller={{ closeOnBackdropClick: true }}
      />
    </S.GalleryWrapper>
  );
};

export default Gallery;
