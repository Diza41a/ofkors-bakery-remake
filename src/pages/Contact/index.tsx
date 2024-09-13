import S, { classes } from './styles';
import ContactForm from './ContactForm';

const ContactPage = (): JSX.Element => {
  return (
    <S.ContactContainer>
      <h2 className={classes.title}>
        Contact us if you have any questions about our products or services
      </h2>
      <ContactForm />
    </S.ContactContainer>
  );
};

export default ContactPage;
