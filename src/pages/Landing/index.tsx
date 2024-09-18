import HeroSection from './HeroSection/index';
import ServicesSection from './ServicesSection';
import FoodSection from './FoodSection';
import InstagramSection from './InstagramSection';

const CLASS_NAME = 'Landing';

const LandingPage = ():JSX.Element => {
  return (
    <div className={CLASS_NAME}>
      <HeroSection />
      <ServicesSection />
      <FoodSection />
      <InstagramSection />
    </div>
  );
};

export default LandingPage;
