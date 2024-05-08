import Image from "next/image";

export default function HomePage() {
  return (
    <main className="mx-auto my-auto">
      <div className="mx-10 mt-10 flex flex-col items-center justify-center gap-10">
        <Image
          src="https://i.imgur.com/3q73nnP.jpeg"
          alt="picture of crew"
          priority={true}
          width={600}
          height={300}
          className="rounded-2xl"
        />
        <p className="text-3xl">About us</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
          arcu dui vivamus arcu felis bibendum ut. Placerat orci nulla
          pellentesque dignissim enim sit. Elementum sagittis vitae et leo duis.
          Accumsan tortor posuere ac ut consequat semper viverra nam.
        </p>
      </div>
    </main>
  );
}
