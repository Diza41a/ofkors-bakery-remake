import { Parallax } from 'react-parallax';

import S, { classes } from './styles';
import BgImg from '../../assets/images/about_page/page_banner.jpg';

interface PageBannerProps {
  pageTitle: string;
};

const PageBanner = ({ pageTitle }: PageBannerProps): JSX.Element => (
  <Parallax bgImage={BgImg}>
    <S.PageBannerContainer className={classes.container}>
      <div className={classes.root}>
        <h2>{pageTitle}</h2>
      </div>
    </S.PageBannerContainer>
  </Parallax>
);

export default PageBanner;
