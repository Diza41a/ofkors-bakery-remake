import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { Input, TextArea } from '../../../components/Inputs';
import { Send as SendIcon } from "lucide-react";
import S, { classes } from './styles';
import Button from "../../../components/Button";

type ContactFormInputs = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  comment: string;
};

const ContactForm = (): JSX.Element => {
  const { handleSubmit, control, formState: { errors } } = useForm<ContactFormInputs>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      comment: '',
    },
  });
  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log({ data, errors });
  }

  return (
    <S.ContactForm onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.inputContainer}>
        <p className={classes.inputLabel}>Name</p>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Your name" />
          )}
        />
      </div>
      <div className={classes.inputContainer}>
        <p className={classes.inputLabel}>Email</p>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} type="email" placeholder="Your email address" />
          )}
        />
      </div>
      <div className={classes.inputContainer}>
        <p className={classes.inputLabel}>Phone</p>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input {...field} type="tel" placeholder="Your phone number" />
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
      <div className={`${classes.inputContainer} ${classes.commentInputContainer}`}>
        <p className={classes.inputLabel}>Comment</p>
        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <TextArea {...field} placeholder="Your comment" rows={5} />
          )}
        />
      </div>
      <Button type="submit" endIcon={<SendIcon />}>Send Inquiry</Button>
    </S.ContactForm>
  );
};

export default ContactForm;
