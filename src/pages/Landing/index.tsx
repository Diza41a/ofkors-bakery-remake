import HeroSection from './HeroSection/index';
import ServicesSection from './ServicesSection';
import FoodSection from './FoodSection';

const CLASS_NAME = 'Landing';

const LandingPage = ():JSX.Element => {
  return (
    <div className={CLASS_NAME}>
      <HeroSection />
      <ServicesSection />
      <FoodSection />
    </div>
  );
};

export default LandingPage;
