import { getProjects } from "~/server/queries";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { deleteProject } from "~/server/queries";
import { revalidatePath } from "next/cache";
import { Protect } from "@clerk/nextjs";

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl">Projects</h1>
      <h2>These are all the pictures you&apos;ve loaded</h2>
      <h3>These images aren&apos;t fullsize.</h3>
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
            width={300}
            height={200}
          />
          <Protect
            permission="org:permission:admin"
            fallback={<p>you dont have permission</p>}
          >
            <form
              action={async () => {
                "use server";
                await deleteProject(project.id, project.name);
                revalidatePath("/dashboard/projects");
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
          </Protect>
        </div>
      ))}
    </div>
  );
}
