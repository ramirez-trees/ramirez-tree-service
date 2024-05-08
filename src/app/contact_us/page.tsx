import ContactUsForm from "~/components/Contact-Us-Form";

export default function Contactus() {
  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h1 className="text-4xl">Contact us</h1>
      <ContactUsForm />
    </div>
  );
}
