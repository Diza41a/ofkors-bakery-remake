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
      <input {...register('name')} placeholder="Name" />
      <input {...register('email')} placeholder="Email" />
      <input {...register('phone')} placeholder="Phone" />
      <input {...register('subject')} placeholder="Subject" />
      <textarea {...register('comment')} placeholder="Comment" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
