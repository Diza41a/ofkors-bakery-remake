import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import S, { classes } from './styles';
import RightBranchImg from '../../assets/images/contact_page/right_branch.svg';
import PageBanner from '../../components/PageBanner';
import BannerImg from '../../assets/images/contact_page/page_banner.png';

const CLASS_NAME = 'Contact';

const ContactPage = (): JSX.Element => {
  const { t } = useTranslation('contact');

  return (
    <div className={CLASS_NAME}>
      <PageBanner pageTitle={t('banner')} bgImage={BannerImg} />

      <S.ContactContainer>
        <h2 className={classes.title}>{t('title')}</h2>
        <ContactForm />

        <img src={RightBranchImg} className={classes.imgRightBranch} draggable={false} />
      </S.ContactContainer>
    </div>
  );
};

export default ContactPage;
