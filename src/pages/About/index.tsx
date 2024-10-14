import { useTranslation } from 'react-i18next';
import PageBanner from '../../components/PageBanner';
import IntroSection from './IntroSection';
import VideoSection from './VideoSection';

const CLASS_NAME = 'About';

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about');

  return (
    <div className={CLASS_NAME}>
      <PageBanner pageTitle={t('banner')} />
      <IntroSection />
      <VideoSection />
    </div>
  );
};

export default AboutPage;
