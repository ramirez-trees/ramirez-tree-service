import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { projects } from "./db/schema";
import { eq } from "drizzle-orm";
import { utapi } from "~/server/uploadthing";

export async function getProjects() {
  const projects = await db.query.projects.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  return projects;
}

export async function getProject(id: number) {
  const project = await db.query.projects.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!project) throw new Error("Not found");

  return project;
}

export async function deleteProject(id: number, imageKey: string) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.projects.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error("Not found");

  await db.delete(projects).where(eq(projects.id, id));
  await utapi.deleteFiles(imageKey);
  return image;
}
