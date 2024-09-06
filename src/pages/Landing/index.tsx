import Button from '../../components/Button';
import S, { classes } from './styles.ts';
import HeroImg from '../../assets/images/hero_img.png';
import HeroTopLeftCornerImg from '../../assets/images/hero_top-left_corner.svg';
import HeroBottomRightCornerImg from '../../assets/images/hero_bottom-right_corner.svg';
import CoffeeBeansIcon from '../../assets/icons/coffee_beans_icon.svg';
import BaristaIcon from '../../assets/icons/barista_icon.svg';
import BlenderIcon from '../../assets/icons/blender_icon.svg';

const LandingPage = ():JSX.Element => {
  const HeroSection = (
    <section className={classes.heroContainer}>
      <div className={classes.heroTextContainer}>
        <h1 className={classes.heroTitleText}>Welcome to Lorem Ips, and Coffee Espresso!</h1>
        <p className={classes.heroBodyText}>
          The suppliers and producers we work with are at the top of their game.
          It’s our role to carry the magic from their hands to your table.
        </p>
        <Button>
          VIEW MENU
        </Button>
      </div>
      <div className={classes.heroImageContainer}>
        <img src={HeroImg} draggable={false} />
      </div>

      <div className={classes.heroTopLeftCornerImageContainer}>
        <img src={HeroTopLeftCornerImg} draggable={false} />
      </div>
      <div className={classes.heroBottomRightCornerImageContainer}>
        <img src={HeroBottomRightCornerImg} draggable={false} />
      </div>
    </section>
  );
  const ServicesSection = (
    <section className={classes.servicesContainer}>
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
    </section>
  );

  return (
    <S.LandingContainer>
      {HeroSection}
      {ServicesSection}
    </S.LandingContainer>
  );
};

export default LandingPage;
