// import { getProject } from "~/server/queries";
// import { Modal } from "./modal";
// import Image from "next/image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  // const idAsNumber = Number(photoId);
  // if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  // const image = await getProject(idAsNumber);

  return <div>{photoId}</div>;
}
