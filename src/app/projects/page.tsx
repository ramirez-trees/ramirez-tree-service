import { getProjects } from "~/server/queries";

export default function Projects() {
  const projects = await getProjects();
  return (
    <div>
      <h1>projects page</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.url}</p>
        </div>
      ))}
    </div>
  );
}
