export default function Navbar() {
  return (
    <nav className="fixed mt-[30px] top-0 left-1/2 z-50 w-[400px] -translate-x-1/2 bg-white/10 backdrop-blur-md shadow-lg rounded-full">
      <ul className="grid grid-cols-4 items-center justify-center py-2 border border-white/10 bg-transparent rounded-full text-white">
        <li className="px-4 py-2 text-center cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="px-4 py-2 text-center cursor-pointer">
          <a href="/about">About</a>
        </li>
        <li className="px-4 py-2 text-center cursor-pointer">
          <a href="/projects">Projects</a>
        </li>
        <li className="px-4 py-2 text-center cursor-pointer">
          <a href="mailto:contact@rafaelamaral.dev">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
