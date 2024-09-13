import { useForm, type SubmitHandler } from "react-hook-form";

type ContactFormInputs = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  comment: string;
};

const ContactForm = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>();
  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log({ data, errors });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Your name" />
      <input {...register('email')} placeholder="Your email" />
      <input {...register('phone')} placeholder="Your phone" />
      <input {...register('subject')} placeholder="Your subject" />
      <textarea {...register('comment')} placeholder="Your comment" />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
