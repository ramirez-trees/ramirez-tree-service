import { Separator } from "~/components/ui/separator";

export default function Services() {
  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-4xl">Services</h1>
        <p>blurb about the services that we offer</p>
        <div className="mx-auto flex flex-col">
          <p>List of services</p>
          <Separator className="my-4" style={{ backgroundColor: "black" }} />
          <ul className="list-disc">
            <li>Tree Pruing</li>
            <li>Brush Clearing</li>
            <li>Garden Work</li>
            <li>Landscaping</li>
            <li>Chipping</li>
            <li>Tree Removal</li>
            <li>Driveway Grading</li>
            <li>Dump Runs</li>
            <li>Patio Construction</li>
            <li>and more!</li>
          </ul>
        </div>
      </div>
    </>
  );
}
