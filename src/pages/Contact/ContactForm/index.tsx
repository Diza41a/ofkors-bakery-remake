import { useTranslation } from "react-i18next";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { Input, TextArea } from '../../../components/Inputs';
import { Send as SendIcon } from "lucide-react";
import S, { classes } from './styles';
import Button from "../../../components/Button";
import LeftBranchImg from '../../../assets/images/contact_page/left_branch.svg';

type ContactFormInputs = {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = (): JSX.Element => {
  const { t } = useTranslation('contact');

  const { handleSubmit, control, watch, formState: { errors } } = useForm<ContactFormInputs>({
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      phone: '',
      message: '',
    },
  });
  const onSubmit: SubmitHandler<ContactFormInputs> = (/* data */) => {};

  const emailVal = watch('email');
  const phoneVal = watch('phone');

  const validateRequiredContactMethod = () => {
    if (!emailVal && !phoneVal) return t('contact_method_required_error');

    return true;
  }

  return (
    <S.ContactFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputContainer}>
          <p className={classes.inputLabel}>
            {t('name_label')}
            <span className={classes.requiredAsterisk}>*</span>
          </p>
          <Controller
            name="name"
            control={control}
            rules={{
              required: t('name_required_error'),
              minLength: { value: 2, message: t('name_min_length_error') },
            }}
            render={({ field }) => (
              <Input {...field} errorMessage={errors.name?.message} placeholder={t('name_placeholder')} />
            )}
          />
        </div>
        <div className={classes.inputContainer}>
          <p className={classes.inputLabel}>{t('subject_label')}</p>
          <Controller
            name="subject"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder={t('subject_placeholder')} />
            )}
          />
        </div>
        <div className={classes.inputContainer}>
          <p className={classes.inputLabel}>{t('email_label')}</p>
          <Controller
            name="email"
            control={control}
            rules={{
              validate: validateRequiredContactMethod,
              pattern: {
                value: /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=.{1,64}@.{1,255}$)(?:(?!.*\.\.)[a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: t('email_format_error'),
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={t('email_placeholder')}
                errorMessage={errors.email?.message}
              />
            )}
          />
        </div>
        <div className={classes.inputContainer}>
          <p className={classes.inputLabel}>{t('phone_label')}</p>
          <Controller
            name="phone"
            control={control}
            rules={{
              validate: validateRequiredContactMethod,
              pattern: {
                value: /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?(\d{3}[-.\s]?\d{4})$/,
                message: t('phone_format_error'),
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="tel"
                placeholder={t('phone_placeholder') }
                errorMessage={errors.phone?.message}
              />
            )}
          />
        </div>
        <div className={`${classes.inputContainer} ${classes.messageInputContainer}`}>
          <p className={classes.inputLabel}>
            {t('message_label')}
            <span className={classes.requiredAsterisk}>*</span>
          </p>
          <Controller
            name="message"
            control={control}
            rules={{
              required: t('message_required_error'),
              minLength: { value: 10, message: t('message_min_length_error') },
            }}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder={t('message_placeholder')}
                rows={5}
                errorMessage={errors.message?.message}
              />
            )}
          />
        </div>
        <Button type="submit" endIcon={<SendIcon />}>{t('submit_button')}</Button>
      </form>

      <img src={LeftBranchImg} className={classes.imgLeftBranch} draggable={false} />
    </S.ContactFormContainer>
  );
};

export default ContactForm;
