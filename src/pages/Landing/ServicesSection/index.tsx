import S, { classes } from './styles';
import CoffeeBeansIcon from '../../../assets/icons/coffee_beans_icon.svg';
import BaristaIcon from '../../../assets/icons/barista_icon.svg';
import BlenderIcon from '../../../assets/icons/blender_icon.svg';

const ServicesSection = (): JSX.Element => (
  <S.ServicesSection className={classes.servicesContainer}>
    <div className={classes.serviceCard}>
      <div className={classes.serviceCardImageContainer}>
        <img src={CoffeeBeansIcon} />
      </div>
      <div className={classes.serviceCardTextContainer}>
        <h3>
          High Quality Ipsum
        </h3>
        <p>
        Our coffees are carefully selected for quality, flavor, and social impact
        </p>
      </div>
    </div>
    <div className={classes.serviceCard}>
      <div className={classes.serviceCardImageContainer}>
        <img src={BaristaIcon} />
      </div>
      <div className={classes.serviceCardTextContainer}>
        <h3>
          High Quality Ipsum
        </h3>
        <p>
        Our coffees are carefully selected for quality, flavor, and social impact
        </p>
      </div>
    </div>
    <div className={classes.serviceCard}>
      <div className={classes.serviceCardImageContainer}>
        <img src={BlenderIcon} />
      </div>
      <div className={classes.serviceCardTextContainer}>
        <h3>
          High Quality Ipsum
        </h3>
        <p>
        Our coffees are carefully selected for quality, flavor, and social impact
        </p>
      </div>
    </div>
  </S.ServicesSection>
);

export default ServicesSection;
