import { getProjects } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="my-3 text-center text-3xl">Previous Work</h1>
      <iframe
        width="439"
        height="781"
        src="https://www.youtube.com/embed/YW-PhEHNe0w"
        title="Gravel path plus Patio"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <Images />
    </div>
  );
}

async function Images() {
  const projects = await getProjects();

  return (
    <div className="mx-auto">
      {projects.map((project) => (
        <div key={project.id}>
          <Link href={`/img/${project.id}`}>
            <Image
              src={project.url}
              alt="project image"
              width={600}
              height={400}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
