import { useTranslation } from "react-i18next";
import Button from "../../../components/Button";
import S, { classes } from './styles';
import HeroImg from '../../../assets/images/hero_img.png';
import HeroTopLeftCornerImg from '../../../assets/images/hero_top-left_corner.svg';
import HeroBottomRightCornerImg from '../../../assets/images/hero_bottom-right_corner.svg';

const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <S.HeroSection className={classes.root}>
      <div className={classes.textContainer}>
        <h1 className={classes.titleText}>{t('landing.hero.title')}</h1>
        <p className={classes.bodyText}>{t('landing.hero.body')}</p>
        <Button>{t('landing.hero.to_menu').toUpperCase()}</Button>
      </div>
      <div className={classes.imageContainer}>
        <img src={HeroImg} draggable={false} />
      </div>

      <div className={classes.topLeftCornerImageContainer}>
        <img src={HeroTopLeftCornerImg} draggable={false} />
      </div>
      <div className={classes.bottomRightCornerImageContainer}>
        <img src={HeroBottomRightCornerImg} draggable={false} />
      </div>
    </S.HeroSection>
  );
};

export default HeroSection;
