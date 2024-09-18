import PageBanner from '../../components/PageBanner';
import IntroSection from './IntroSection';
import VideoSection from './VideoSection';

const CLASS_NAME = 'About';

const AboutPage = (): JSX.Element => {

  return (
    <div className={CLASS_NAME}>
      <PageBanner pageTitle="About Us" />
      <IntroSection />
      <VideoSection />
    </div>
  );
};

export default AboutPage;
