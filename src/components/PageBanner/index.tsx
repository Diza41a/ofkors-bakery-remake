import S, { classes } from './styles';

interface PageBannerProps {
  pageTitle: string;
};

const PageBanner = ({ pageTitle }: PageBannerProps): JSX.Element => (
  <S.PageBannerContainer className={classes.container}>
    <div className={classes.root}>
      <h2>{pageTitle}</h2>
    </div>
  </S.PageBannerContainer>
);

export default PageBanner;
