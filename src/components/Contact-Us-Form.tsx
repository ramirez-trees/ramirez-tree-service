import { useState } from "react";

type contactForm = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};
export default function ContactUsForm() {
  const [form, setForm] = useState<contactForm>({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  return <p>test page</p>;
}
