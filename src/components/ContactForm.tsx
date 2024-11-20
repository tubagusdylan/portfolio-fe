import { FC, FormEvent, ChangeEvent, RefObject } from "react";
import Button from "@components/Button";
import { ClipLoader } from "react-spinners";

interface ContactFormProp {
  submit: (event: FormEvent<HTMLFormElement>) => void;
  refForm: RefObject<HTMLFormElement>;
  username: string;
  email: string;
  message: string;
  status: string;
  onNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onMessageChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ContactForm: FC<ContactFormProp> = (props) => {
  const { submit, refForm, username, email, message, status, onNameChange, onEmailChange, onMessageChange } = props;
  return (
    <form onSubmit={submit} ref={refForm}>
      <label htmlFor="name" className="text-base text-blue font-semibold">
        Name
        <input
          type="text"
          id="name"
          name="user_name"
          value={username}
          onChange={onNameChange}
          disabled={status === "submitting"}
          className="block w-full mt-2 mb-4 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:ring-2 focus:ring-orange outline-none font-normal"
          placeholder="Enter your name"
          required
        />
      </label>
      <label htmlFor="email" className="text-base text-blue font-semibold">
        Email
        <input
          type="email"
          id="email"
          name="user_email"
          value={email}
          onChange={onEmailChange}
          disabled={status === "submitting"}
          className="block w-full mt-2 mb-4 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:ring-2 focus:ring-orange outline-none font-normal"
          placeholder="Enter your email"
          required
        />
      </label>
      <label htmlFor="message" className="text-base text-blue font-semibold">
        Message
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={onMessageChange}
          disabled={status === "submitting"}
          className="block w-full mt-2 mb-8 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:ring-2 focus:ring-orange outline-none font-normal"
          rows={6}
          placeholder="Enter your message"
          required
        />
      </label>
      <Button width={"full"} status={status}>
        <ClipLoader size={15} color="#fff" className="mr-2" loading={status === "submitting"} />
        {status === "submitting" ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
