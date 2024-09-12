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
        <p className={classes.bodyText}>
          The suppliers and producers we work with are at the top of their game.
          It’s our role to carry the magic from their hands to your table.
        </p>
        <Button>
          VIEW MENU
        </Button>
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
