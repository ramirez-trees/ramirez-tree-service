import { getProject } from "~/server/queries";
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
    <div className="flex items-center justify-center">
      <Image
        src={image.url}
        alt="example landscaping work"
        className="mt-10"
        height={600}
        width={600}
      />
    </div>
  );
}
