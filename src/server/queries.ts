// import "use-server";
import { db } from "./db";

export async function getProjects() {
  const projects = await db.query.projects.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  return projects;
}
