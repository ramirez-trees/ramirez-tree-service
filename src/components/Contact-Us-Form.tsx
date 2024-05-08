"use client";
import { useState } from "react";

type contactForm = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};
export default function ContactUsForm() {
  const [userForm, setUserForm] = useState<contactForm>({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(userForm);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input placeholder="name here" name="name" onChange={handleChange} />
      <label>phone number:</label>
      <input
        placeholder="123-456-7890"
        name="phoneNumber"
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        placeholder="email@email.com"
        name="email"
        onChange={handleChange}
      />
      <label>Message</label>
      <textarea
        placeholder="Question or Description of work needing to be done."
        name="message"
        onChange={handleChange}
      />
    </form>
  );
}
