import { Parallax } from 'react-parallax';

import S, { classes } from './styles';

interface PageBannerProps {
  pageTitle: string;
  bgImage: string;
};

const PageBanner = ({ pageTitle, bgImage }: PageBannerProps): JSX.Element => (
  <Parallax bgImage={bgImage}>
    <S.PageBannerContainer className={classes.container}>
      <div className={classes.root}>
        <h2>{pageTitle}</h2>
      </div>
    </S.PageBannerContainer>
  </Parallax>
);

export default PageBanner;
