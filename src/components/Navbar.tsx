"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    {
      name: "Contact",
      href: "mailto:abdechakouromari@gmail.com",
      external: true,
    },
  ];

  return (
    <nav className="fixed top-[30px] left-1/2 z-50 -translate-x-1/2 animate-in fade-in zoom-in-50 duration-700">
      <ul
        className="relative grid grid-cols-4 items-center justify-center py-2 border border-white/10 backdrop-blur-md bg-white/10 rounded-full shadow-lg transition-all duration-200 ease-in-out w-[90vw] max-w-[400px] text-neutral-300"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {activeIndex !== null && (
          <div
            className="absolute top-0 h-full w-1/4 bg-white/10 rounded-full transition-all duration-300"
            style={{ left: `${activeIndex * 25}%` }}
          ></div>
        )}

        {navItems.map((item, index) => (
          <li
            key={item.name}
            onMouseEnter={() => setActiveIndex(index)}
            className="relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer transition-colors duration-300 hover:text-white"
          >
            {item.external ? (
              <a href={item.href} className="relative z-20">
                {item.name}
              </a>
            ) : (
              <Link href={item.href} className="relative z-20">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
