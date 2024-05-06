"use client";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
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
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log(userForm);
  };

  return (
    <Form {...userForm}>
      <form onSubmit={handleSubmit}>
        <FormField
          // control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
