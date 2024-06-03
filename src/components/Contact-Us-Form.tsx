"use client";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import emailjs from "emailjs-com";

emailjs.init(process.env.NEXT_PUBLIC_USER_ID ?? "default_user_id");

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

    const templateId: string =
      process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "default_template_id";
    const serviceId: string =
      process.env.NEXT_PUBLIC_SERVICE_ID ?? "default_service_id";

    emailjs.send(serviceId, templateId, userForm).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setUserForm({
          name: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
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
          required
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
          required
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
          required
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
          required
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="rounded border bg-green-800">
        Submit
      </Button>
    </form>
  );
}
