import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { Input, TextArea } from '../../../components/Inputs';
import { Send as SendIcon } from "lucide-react";
import S, { classes } from './styles';
import Button from "../../../components/Button";

type ContactFormInputs = {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = (): JSX.Element => {
  const { handleSubmit, control, watch, formState: { errors } } = useForm<ContactFormInputs>({
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      phone: '',
      message: '',
    },
  });
  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log({ data, errors });
  }

  const emailVal = watch('email');
  const phoneVal = watch('phone');

  const validateRequiredContactMethod = () => {
    if (!emailVal && !phoneVal) return 'Email or phone number is required';

    return true;
  }

  return (
    <S.ContactForm onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.inputContainer}>
        <p className={classes.inputLabel}>
          Name
          <span className={classes.requiredAsterisk}>*</span>
        </p>
        <Controller
          name="name"
          control={control}
          rules={{
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters long' },
          }}
          render={({ field }) => (
            <Input {...field} errorMessage={errors.name?.message} placeholder="Your name" />
          )}
        />
      </div>
      <div className={classes.inputContainer}>
        <p className={classes.inputLabel}>Subject</p>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Your subject" />
          )}
        />
      </div>
      <div className={classes.inputContainer}>
        <p className={classes.inputLabel}>Email</p>
        <Controller
          name="email"
          control={control}
          rules={{
            validate: validateRequiredContactMethod,
            pattern: {
              value: /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=.{1,64}@.{1,255}$)(?:(?!.*\.\.)[a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email format',
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Your email address"
              errorMessage={errors.email?.message}
            />
          )}
        />
      </div>
      <div className={classes.inputContainer}>
        <p className={classes.inputLabel}>Phone</p>
        <Controller
          name="phone"
          control={control}
          rules={{
            validate: validateRequiredContactMethod,
            pattern: {
              value: /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?(\d{3}[-.\s]?\d{4})$/,
              message: 'Invalid phone number format',
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="tel"
              placeholder="Your phone number"
              errorMessage={errors.phone?.message}
            />
          )}
        />
      </div>
      <div className={`${classes.inputContainer} ${classes.messageInputContainer}`}>
        <p className={classes.inputLabel}>
          Message
          <span className={classes.requiredAsterisk}>*</span>
        </p>
        <Controller
          name="message"
          control={control}
          rules={{
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters long' },
          }}
          render={({ field }) => (
            <TextArea
              {...field}
              placeholder="Your message"
              rows={5}
              errorMessage={errors.message?.message}
            />
          )}
        />
      </div>
      <Button type="submit" endIcon={<SendIcon />}>Send Inquiry</Button>
    </S.ContactForm>
  );
};

export default ContactForm;
