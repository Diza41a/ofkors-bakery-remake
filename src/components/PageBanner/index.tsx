import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

import S, { classes } from './styles';

interface PageBannerProps {
  pageTitle: string;
  bgImage: string;
};

const PageBanner = ({ pageTitle, bgImage }: PageBannerProps): JSX.Element => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const overlayClassNames = [classes.loadingOverlay];
  if (isImgLoaded) overlayClassNames.push(classes.loadingOverlayTransparent);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsImgLoaded(true);

    return () => {
      img.src = '';
    }
  }, [bgImage]);

  return (
    <Parallax bgImage={bgImage}>
      <S.PageBannerContainer className={classes.container}>
        <div className={classes.root}>
          <h2>{pageTitle}</h2>
        </div>

        <div className={overlayClassNames.join(' ')} />
      </S.PageBannerContainer>
    </Parallax>
  );
};

export default PageBanner;
