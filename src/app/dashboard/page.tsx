import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
export default function DashBoard() {
  const user = auth();
  console.log(user.userId);
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
        <p>this is your user role: {user.orgId}</p>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}
