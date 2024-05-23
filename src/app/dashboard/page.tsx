import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { getProjects } from "~/server/queries";

export default function DashBoard() {
  const user = auth();
  const projects = getProjects();
  return (
    <div>
      <h1>Dashboard</h1>
      <SignedOut>
        <p>Please sign in</p>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <p>you are signed in</p>
        <p>this is your userId: {user.userId}</p>
        <p>this is your org id: {user.orgId}</p>
        <p>this is your user roles: {user.orgRole}</p>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}
