export default function NavBar() {
  return (
    <nav className="flex h-full items-center justify-center bg-green-300 p-5">
      <ul className="flex flex-col justify-between gap-10">
        <li>Home</li>
        <li>About us</li>
        <li>Projects</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
}
