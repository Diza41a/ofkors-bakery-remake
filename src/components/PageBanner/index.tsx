import S, { classes } from './styles';

interface PageBannerProps {
  pageTitle: string;
};

const PageBanner = ({ pageTitle }: PageBannerProps): JSX.Element => (
  <S.PageBanner className={classes.root}>
    <h2>{pageTitle}</h2>
  </S.PageBanner>
);

export default PageBanner;
