import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { tweenGenerator, timelineGenerator } from './utils';
import S, { classes } from './styles';
import FoodSectionLineIcon from '../../../assets/images/landing_page/food_section_line.svg';
import LinchpinImage from '../../../assets/images/landing_page/food_section_linchpin.png';
import SecondaryImage from '../../../assets/images/landing_page/food_section_secondary.png';
import BranchImage from '../../../assets/images/landing_page/food_section_branch.svg';
import BeansImage from '../../../assets/images/beans.svg';
import Button from '../../../components/Button';

const FoodSection = (): JSX.Element => {
  const { t } = useTranslation('landing');

  const foodSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    tweenGenerator.titleText();
    tweenGenerator.titleLineImg();
    tweenGenerator.bodyImgs();
    timelineGenerator.bodyText();
  }, { scope: foodSectionRef });

  return (
    <S.FoodSection className={classes.root} ref={foodSectionRef}>
      <div className={classes.titleContainer}>
        <h2>{t('food:title')}</h2>
        <img src={FoodSectionLineIcon} draggable={false} />
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.imageContainer}>
          <img src={LinchpinImage} className={classes.linchpinImage} />
          <img src={SecondaryImage} className={classes.secondaryImage} />
          <img src={BranchImage} className={classes.branchImage} draggable={false} />
        </div>
        <div className={classes.textContainer}>
          <h2>{t('food:body_title')}</h2>
          <p>{t('food:body')}</p>
          <Button routerHref='/menu'>{t('hero:to_menu')}</Button>
        </div>
      </div>

      <div className={classes.beansImageContainer}>
        <img src={BeansImage} draggable={false} />
      </div>
    </S.FoodSection>
  );
};

export default FoodSection;
