import { getProjects } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export const dynamic = "force-dynamic";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="my-3 text-center text-3xl">Previous Work</h1>
      <div className="flex flex-col items-center justify-center gap-2">
        <Videos />
        <Images />
      </div>
    </div>
  );
}

async function Images() {
  const projects = await getProjects();

  return (
    <>
      <p>photos</p>
      <div className="mx-auto flex flex-col gap-2 md:flex-row">
        {projects.map((project) => (
          <div key={project.id}>
            <Link href={`/img/${project.id}`}>
              <Image
                src={project.url}
                alt="project image"
                width={600}
                height={400}
                className="rounded"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

function Videos() {
  const videoSource = [
    {
      id: 1,
      url: "https://youtu.be/YW-PhEHNe0w?si=AN4gA97CLxu_8SWG",
      image: "https://i.imgur.com/45CWr5n.png",
    },
    {
      id: 2,
      url: "https://youtu.be/tFLV0Oze2WI?si=dpEn8ufQlgOuA1FK",
      image: "https://i.imgur.com/EZnzh3t.jpeg",
    },
  ];

  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent className="md:-mr-96 md:ml-4">
        {videoSource.map((video) => (
          <CarouselItem key={video.id}>
            <Link href={video.url}>
              <Image
                src={video.image}
                alt="project image"
                width={400}
                height={300}
                className="rounded"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
