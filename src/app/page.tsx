import Image from "next/image";
import { Separator } from "~/components/ui/separator";

export default function HomePage() {
  return (
    <main>
      <div className="mx-10 my-10 flex flex-col items-center justify-center gap-10">
        <p className="text-3xl">About Us</p>
        <Separator className="my-4" style={{ backgroundColor: "black" }} />
        <p className="text-xl md:w-1/2">
          Ramirez Tree Service has been servicing Marin and Sonoma country for
          over 30 years. Our team of skilled professionals are licensed and
          equipped to handle a wide range of projects. We pride ourselves
          ourselves on delivering high quality workmanship and customer service
          to gaurentee your landscaping needs are met.
        </p>
        <Image
          src="https://i.imgur.com/3q73nnP.jpeg"
          alt="picture of crew"
          priority={true}
          width={600}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </main>
  );
}
