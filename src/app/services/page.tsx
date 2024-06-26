import { Separator } from "~/components/ui/separator";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-center gap-5">
        <div className="mx-auto flex flex-col">
          <p className="text-3xl">List of services</p>
          <Separator className="my-4" style={{ backgroundColor: "black" }} />
          <ul className="list-disc text-2xl">
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
        <p className="text-center text-xl">
          Need something else done you don&apos;t see here?{" "}
          <Link className="text-blue-700 underline" href={"/contact_us"}>
            Contact us
          </Link>{" "}
          and let us know how we can help.
        </p>
      </div>
    </>
  );
}
