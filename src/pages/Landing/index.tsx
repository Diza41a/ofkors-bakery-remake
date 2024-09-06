import HeroSection from './HeroSection/index';
import ServicesSection from './ServicesSection';

const CLASS_NAME = 'Landing';

const LandingPage = ():JSX.Element => {
  return (
    <div className={CLASS_NAME}>
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default LandingPage;
