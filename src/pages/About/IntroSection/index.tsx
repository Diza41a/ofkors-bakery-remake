import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import S, { classes } from './styles';
import MainPhotoImg from '../../../assets/images/about_page/intro_1.png';
import SecondPhotoImg from '../../../assets/images/about_page/intro_2.png';
import DecorativePhotoImg from '../../../assets/images/about_page/intro_3.png';
import DecorativeBranchImg from '../../../assets/images/about_page/intro_branch.svg';
import BeansImg from '../../../assets/images/beans.svg';
import { timelineGenerator, tweenGenerator } from './utils';
import { useTranslation } from 'react-i18next';

const IntroSection = (): JSX.Element => {
  const { t } = useTranslation('about');

  const introSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    tweenGenerator.titleText();
    timelineGenerator.contentColumns();
  }, { scope: introSectionRef });

  return (
    <S.IntroSection className={classes.root} ref={introSectionRef}>
      <h2 className={classes.title}>{t('story:title')}</h2>
      <div className={classes.contentContainer}>
        <div className={classes.contentColumn}>
          <img src={MainPhotoImg} className={classes.mainPhotoImg} />
          <h3>{t('story:body_title')}</h3>
          <p>{t('story:paragraph1')}</p>
          <br />

          <img src={BeansImg} className={classes.beansImg} />
        </div>
        <div className={classes.contentColumn}>
          <p>{t('story:paragraph2')}</p>
          <br />
          <p>{t('story:paragraph3')}</p>
          <img src={SecondPhotoImg} className={classes.secondaryPhotoImg} />
        </div>
        <div className={classes.decorativeColumn}>
          <div className={classes.decorativeImgContainer}>
            <img src={DecorativePhotoImg} className={classes.decorativeImg} />
            <img src={DecorativeBranchImg} className={classes.branchImg} />
          </div>
        </div>
      </div>
    </S.IntroSection>
  );
};

export default IntroSection;
