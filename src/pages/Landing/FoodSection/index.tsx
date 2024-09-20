import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { tweenGenerator, timelineGenerator } from './utils';
import S, { classes } from './styles';
import FoodSectionLineIcon from '../../../assets/images/landing_page/food_section_line.svg';
import LinchpinImage from '../../../assets/images/landing_page/food_section_linchpin.png';
import SecondaryImage from '../../../assets/images/landing_page/food_section_secondary.png';
import BranchImage from '../../../assets/images/landing_page/food_section_branch.svg';
import BeansImage from '../../../assets/images/beans.svg';
import Button from '../../../components/Button';

const FoodSection = (): JSX.Element => {
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
        <h2>Providing unique coffee experiences</h2>
        <img src={FoodSectionLineIcon} draggable={false} />
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.imageContainer}>
          <img src={LinchpinImage} className={classes.linchpinImage} />
          <img src={SecondaryImage} className={classes.secondaryImage} />
          <img src={BranchImage} className={classes.branchImage} draggable={false} />
        </div>
        <div className={classes.textContainer}>
          <h2>
            We believe this is the best coffee in New York. Try it for yourself
          </h2>
          <p>
            Our roasts feature multiple underlying notes. We believe the unexpected can happen when good design and great coffee come together. We also believe there is an outside in all of us
            to be found.
          </p>
          <Button>
            VIEW MENU
          </Button>
        </div>
      </div>

      <div className={classes.beansImageContainer}>
        <img src={BeansImage} draggable={false} />
      </div>
    </S.FoodSection>
  );
};

export default FoodSection;
