import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { Input, TextArea } from '../../../components/Inputs';
import S from './styles';

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
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Your name" />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input {...field} type="email" placeholder="Your email address" />
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input {...field} type="tel" placeholder="Your phone number" />
        )}
      />
      <Controller
        name="subject"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Your subject" />
        )}
      />
      <Controller
        name="comment"
        control={control}
        render={({ field }) => (
          <TextArea {...field} placeholder="Your comment" rows={5} />
        )}
      />
      <button type="submit">Send</button>
    </S.ContactForm>
  );
};

export default ContactForm;
