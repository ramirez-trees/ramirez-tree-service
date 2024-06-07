import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";

export const dynamic = "force-dynamic";

export default function DashBoard() {
  const user = auth();

  return (
    <div>
      <h1>Dashboard</h1>
      <SignedOut>
        <p>Please sign in</p>
        <Button className="rounded bg-blue-400">
          <SignInButton />
        </Button>
      </SignedOut>
      <SignedIn>
        <p>you are signed in</p>
        <p>this is your userId: {user.userId}</p>
        <p>this is your org id: {user.orgId}</p>
        <p>this is your user roles: {user.orgRole}</p>
        <Button className="rounded bg-red-400">
          <SignOutButton />
        </Button>
      </SignedIn>
    </div>
  );
}
