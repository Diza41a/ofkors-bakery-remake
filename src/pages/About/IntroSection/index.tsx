import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import S, { classes } from './styles';
import MainPhotoImg from '../../../assets/images/about_intro_1.png';
import SecondPhotoImg from '../../../assets/images/about_intro_2.png';
import DecorativePhotoImg from '../../../assets/images/about_intro_3.png';
import DecorativeBranchImg from '../../../assets/images/about_intro_branch.svg';
import BeansImg from '../../../assets/images/beans.svg';
import { timelineGenerator, tweenGenerator } from './utils';

const IntroSection = (): JSX.Element => {
  const introSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    tweenGenerator.titleText();
    timelineGenerator.contentColumns();
  }, { scope: introSectionRef });

  return (
    <S.IntroSection className={classes.root} ref={introSectionRef}>
      <h2 className={classes.title}>The highest quality from seed to cup</h2>
      <div className={classes.contentContainer}>
        <div className={classes.contentColumn}>
          <img src={MainPhotoImg} className={classes.mainPhotoImg} />
          <h3>It’s that moment when your hand is warmed by the mug</h3>
          <p>
            We are proud to offer this exquisite coffee and proud to support producer partners around the world doing sustainability
            work that benefits their farms, their communities, and the planet.
          </p>

          <img src={BeansImg} className={classes.beansImg} />
        </div>
        <div className={classes.contentColumn}>
          <p>
            Our roasts feature multiple underlying notes. We believe the unexpected can happen when good design
            and great coffee come together. We also believe there is an outside in all of us
            to be found.
            Our roasts feature multiple underlying notes. We believe the unexpected can happen when good design
            and great coffee come together. We also believe there is an outside in all of us
            to be found.
          </p>
          <br />
          <p>
            Our roasts feature multiple underlying notes. We believe the unexpected can happen when good design
            and great coffee come together. We also believe there is an outside in all of us
            to be found.
          </p>
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
