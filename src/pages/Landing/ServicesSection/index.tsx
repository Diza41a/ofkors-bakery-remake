import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Croissant as CroissantIcon,
  Soup as SoupIcon,
  CakeSlice as CakeSliceIcon,
} from 'lucide-react';
import S, { classes } from './styles';
import { useTranslation } from 'react-i18next';

const ServicesSection = (): JSX.Element => {
  const { t } = useTranslation('landing');
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
          <CroissantIcon size={44} />
        </div>
        <div className={classes.cardTextContainer}>
          <h3>{t('services:service_1:title')}</h3>
          <p>{t('services:service_1:body')}</p>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.cardImageContainer}>
          <SoupIcon size={44} />
        </div>
        <div className={classes.cardTextContainer}>
          <h3>{t('services:service_2:title')}</h3>
          <p>{t('services:service_2:body')}</p>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.cardImageContainer}>
          <CakeSliceIcon size={44} />
        </div>
        <div className={classes.cardTextContainer}>
          <h3>{t('services:service_3:title')}</h3>
          <p>{t('services:service_3:body')}</p>
        </div>
      </div>
    </S.ServicesSection>
  );
};

export default ServicesSection;
