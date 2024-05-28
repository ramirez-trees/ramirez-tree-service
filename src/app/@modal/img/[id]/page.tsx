import { Modal } from "./modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  return <Modal>{photoId}</Modal>;
}
