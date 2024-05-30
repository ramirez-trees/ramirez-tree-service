import { getProject } from "~/server/queries";
import { Modal } from "./modal";
import Image from "next/image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  const image = await getProject(idAsNumber);

  return (
    <Modal>
      <Image
        src={image.url}
        alt="landscaping work picture"
        className="mx-auto mt-10"
        width={800}
        height={600}
      />
    </Modal>
  );
}
