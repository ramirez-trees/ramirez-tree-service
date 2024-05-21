import { Protect } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { UploadButton } from "~/components/uploadthing";

export default function CreateProject() {
  const user = auth();
  console.log(user);

  return (
    <Protect
      permission="org:permission:admin"
      fallback={<p>you dont have permission</p>}
    >
      <p>you do have permission</p>
      <UploadButton endpoint="imageUploader" />
    </Protect>
  );
}
