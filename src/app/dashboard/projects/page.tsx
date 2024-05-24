import { getProjects } from "~/server/queries";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { deleteProject } from "~/server/queries";

export default function Projects() {
  return (
    <div>
      <h1>test projects page</h1>
      <ProjectImages />
    </div>
  );
}

async function ProjectImages() {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col">
          <h2 className="mb-2 text-center">{project.name}</h2>
          <Image
            src={project.url}
            alt="project image"
            className="rounded"
            width={600}
            height={400}
          />
          <form
            action={async () => {
              "use server";
              await deleteProject(project.id, project.name);
            }}
          >
            <Button
              type="submit"
              variant="destructive"
              className="rounded bg-red-400"
            >
              delete
            </Button>
          </form>
        </div>
      ))}
    </div>
  );
}
