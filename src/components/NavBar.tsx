export default function NavBar() {
  return (
    <nav className="flex h-screen flex-col items-center justify-center bg-green-800 p-5">
      <ul className="flex flex-col justify-between gap-20">
        <li>Home</li>
        <li>About us</li>
        <li>Projects</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
}
