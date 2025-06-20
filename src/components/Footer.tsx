import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 mx-auto container max-w-3xl text-neutral-300 px-4 md:px-0 md:py-20 z-50 animate-fade-up animate-once animate-duration-1000 animate-delay-[600ms]">
      <div className="border rounded-lg p-6 flex flex-col md:flex-row justify-between">
        <div className="logo flex flex-col justify-end mb-6 md:mb-0">
          <p className="second-font font-bold text-5xl">
            Abdechakour
            <br />
            Omari.
          </p>
        </div>
        <div className="flex flex-row space-x-12">
          <div className="menu mb-6 md:mb-0">
            <h3 className="text-neutral-300 mb-4">Explore</h3>
            <ul className="flex flex-col text-neutral-500 font-light">
              <li>
                <Link href="/">
                  <p className="hover:underline hover:text-neutral-300">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="hover:underline hover:text-neutral-300">
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p className="hover:underline hover:text-neutral-300">
                    Projects
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <h3 className="text-neutral-300 mb-4">Let&apos;s Connect</h3>
            <ul className="flex flex-col text-neutral-500 font-light">
              <li>
                <a
                  href="mailto:abdechakouromari@gmail.dev"
                  className="hover:underline hover:text-neutral-300"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/4nglp"
                  className="hover:underline hover:text-neutral-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/4nglp/"
                  className="hover:underline hover:text-neutral-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 text-neutral-700 text-thin flex justify-between">
        <p>© 2025</p>
        <p>Abdechakour Omari.</p>
      </div>
    </footer>
  );
};

export default Footer;
