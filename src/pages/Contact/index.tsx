import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import S, { classes } from './styles';

const ContactPage = (): JSX.Element => {
  const { t } = useTranslation('contact');

  return (
    <S.ContactContainer>
      <h2 className={classes.title}>{t('title')}</h2>
      <ContactForm />
    </S.ContactContainer>
  );
};

export default ContactPage;
