import { Protect } from "@clerk/nextjs";
export default function CreateProject() {
  return (
    <Protect permission="org:admin" fallback={<p>You dont have permission</p>}>
      <p>you do have permission</p>
    </Protect>
  );
}
