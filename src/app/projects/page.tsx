import { getProjects } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <h1 className="my-3 text-center text-3xl">Previous Work</h1>
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
