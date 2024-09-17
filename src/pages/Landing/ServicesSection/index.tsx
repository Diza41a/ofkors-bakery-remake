import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import S, { classes } from './styles';
import CoffeeBeansIcon from '../../../assets/icons/coffee_beans_icon.svg';
import BaristaIcon from '../../../assets/icons/barista_icon.svg';
import BlenderIcon from '../../../assets/icons/blender_icon.svg';

const ServicesSection = (): JSX.Element => {
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const generateCardsTween = () => gsap.fromTo(
      `.${classes.card}`,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: 'power2.inOut',

        scrollTrigger: {
          trigger: servicesSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },

      },
    );
    generateCardsTween();
  }, { scope: servicesSectionRef });

  return (
    <S.ServicesSection className={classes.root} ref={servicesSectionRef}>
      <div className={classes.card}>
        <div className={classes.cardImageContainer}>
          <img src={CoffeeBeansIcon} />
        </div>
        <div className={classes.cardTextContainer}>
          <h3>
            High Quality Ipsum
          </h3>
          <p>
          Our coffees are carefully selected for quality, flavor, and social impact
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.cardImageContainer}>
          <img src={BaristaIcon} />
        </div>
        <div className={classes.cardTextContainer}>
          <h3>
            High Quality Ipsum
          </h3>
          <p>
          Our coffees are carefully selected for quality, flavor, and social impact
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.cardImageContainer}>
          <img src={BlenderIcon} />
        </div>
        <div className={classes.cardTextContainer}>
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
};

export default ServicesSection;
