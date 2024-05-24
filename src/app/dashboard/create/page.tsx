"use client";
import { Protect } from "@clerk/nextjs";
import { UploadButton } from "~/components/uploadthing";
import { useRouter } from "next/navigation";
import "@uploadthing/react/styles.css";

export default function CreateProject() {
  const router = useRouter();
  return (
    <Protect
      permission="org:permission:admin"
      fallback={<p>you dont have permission</p>}
    >
      <div className="flex flex-col">
        <p>you do have permission</p>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={() => {
            router.push("/dashboard");
          }}
        />
      </div>
    </Protect>
  );
}
