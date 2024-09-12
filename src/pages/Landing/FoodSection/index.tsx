import S, { classes } from './styles';
import FoodSectionLineIcon from '../../../assets/images/food_section_line.svg';
import LinchpinImage from '../../../assets/images/food_section_linchpin.png';
import SecondaryImage from '../../../assets/images/food_section_secondary.png';
import BranchImage from '../../../assets/images/food_section_branch.svg';
import BeansImage from '../../../assets/images/food_section_beans.svg';
import Button from '../../../components/Button';

const FoodSection = (): JSX.Element => (
  <S.FoodSection className={classes.root}>
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

    <img src={BeansImage} className={classes.beansImage} draggable={false} />
  </S.FoodSection>
);

export default FoodSection;
