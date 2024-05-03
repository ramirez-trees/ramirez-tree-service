import Image from "next/image";

export default function HomePage() {
  return (
    <main className="mx-auto my-auto">
      <div
        className="flex h-40 w-screen items-center justify-center bg-cover bg-center text-center"
        style={{
          backgroundImage: `url('https://www.nps.gov/common/uploads/cropped_image/primary/922495AE-C96F-ED4B-5D1FBBC03B80FB39.jpg?width=1600&quality=90&mode=crop')`,
        }}
      >
        <h1 className="text-3xl text-white">Ramirez Tree Service</h1>
      </div>
      <div className="mx-10 mt-10 flex flex-col items-center justify-center gap-10">
        <Image
          src="https://i.imgur.com/3q73nnP.jpeg"
          width={600}
          height={300}
          alt="picture of crew"
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
