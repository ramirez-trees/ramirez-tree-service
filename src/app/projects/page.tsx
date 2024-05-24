import { getProjects } from "~/server/queries";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <h1>projects page</h1>
      <Images />
    </div>
  );
}

async function Images() {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <Image
            src={project.url}
            alt="project image"
            width={600}
            height={400}
          />
        </div>
      ))}
    </div>
  );
}
