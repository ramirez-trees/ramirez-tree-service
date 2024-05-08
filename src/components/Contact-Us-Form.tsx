"use client";
import { useState } from "react";
import { Button } from "~/components/ui/button";

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
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label>Name:</label>
        <input
          placeholder="name here"
          name="name"
          className="rounded border border-gray-300 px-1"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label>phone number:</label>
        <input
          placeholder="123-456-7890"
          name="phoneNumber"
          className="rounded border border-gray-300 px-1"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Email:</label>
        <input
          placeholder="email@email.com"
          name="email"
          className="rounded border border-gray-300 px-1"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Message</label>
        <textarea
          placeholder="Question or Description of work needing to be done."
          name="message"
          className="rounded border border-gray-300 px-1"
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="rounded border bg-green-800">
        Submit
      </Button>
    </form>
  );
}
