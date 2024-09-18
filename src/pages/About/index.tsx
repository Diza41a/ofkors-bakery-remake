import IntroSection from './IntroSection';
import VideoSection from './VideoSection';

const CLASS_NAME = 'About';

const AboutPage = (): JSX.Element => {
  return (
    <div className={CLASS_NAME}>
      <IntroSection />
      <VideoSection />
    </div>
  );
};

export default AboutPage;
