"use client";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import emailjs from "emailjs-com";

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

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", userForm).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      },
    );
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="Name here"
          name="name"
          className="rounded border border-gray-300 px-1"
          autoComplete="name"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          id="phoneNumber"
          placeholder="123-456-7890"
          name="phoneNumber"
          className="rounded border border-gray-300 px-1"
          autoComplete="tel"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          placeholder="email@email.com"
          name="email"
          className="rounded border border-gray-300 px-1"
          autoComplete="email"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Question or Description of work needing to be done."
          name="message"
          className="h-24 rounded border border-gray-300 px-1"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="rounded border bg-green-800">
        Submit
      </Button>
    </form>
  );
}
