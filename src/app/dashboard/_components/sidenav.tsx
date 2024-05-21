import Link from "next/link";
export default function SideNav() {
  return (
    <ul className="mx-2 my-2 flex flex-col justify-center gap-2">
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link href="/dashboard/create">Add New Projects</Link>
      </li>
      <li>
        <Link href="/dashboard/projects">Projects</Link>
      </li>
    </ul>
  );
}
