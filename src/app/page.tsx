import Image from "next/image";
import { Separator } from "~/components/ui/separator";

export default function HomePage() {
  return (
    <main>
      <div className="mx-10 my-10 flex flex-col items-center justify-center gap-10">
        <p className="text-3xl">About Us</p>
        <Separator className="my-4" style={{ backgroundColor: "black" }} />
        <p className="text-xl md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
          arcu dui vivamus arcu felis bibendum ut. Placerat orci nulla
          pellentesque dignissim enim sit. Elementum sagittis vitae et leo duis.
          Accumsan tortor posuere ac ut consequat semper viverra nam.
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
