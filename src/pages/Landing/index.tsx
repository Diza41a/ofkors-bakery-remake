import S, { classes } from './styles.ts';
import HeroImg from '../../assets/images/hero_img.png';

const LandingPage = ():JSX.Element => {
  return (
    <S.LandingWrapper>
      <div className={classes.heroContainer}>
        <div className={classes.heroTextContainer}>
          <h1>Welcome to Lorem Ips, and Coffee Espresso!</h1>
          <p>
            The suppliers and producers we work with are at the top of their game.
            It’s our role to carry the magic from their hands to your table.
          </p>
        </div>
        <div className={classes.heroImageContainer}>
          <img src={HeroImg} />
        </div>
      </div>
    </S.LandingWrapper>
  );
};

export default LandingPage;
