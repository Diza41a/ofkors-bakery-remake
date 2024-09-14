import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import S, { classes } from './styles';
import RightBranchImg from '../../assets/images/contact_right_branch.svg';

const ContactPage = (): JSX.Element => {
  const { t } = useTranslation('contact');

  return (
    <S.ContactContainer>
      <h2 className={classes.title}>{t('title')}</h2>
      <ContactForm />

      <img src={RightBranchImg} className={classes.imgRightBranch} draggable={false} />
    </S.ContactContainer>
  );
};

export default ContactPage;
