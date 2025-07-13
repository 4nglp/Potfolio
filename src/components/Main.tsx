"use client";
import { useState } from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import avatar1 from "../../public/assets/avatar1.png";
import avatar2 from "../../public/assets/avatar2.png";
import flag from "../../public/assets/morocco-flag-small.png";

const Main = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="min-h-screen flex flex-col justify-center overflow-x-hidden">
      <header className="flex justify-center px-4 sm:mt-[50px]">
        <div className="flex items-center gap-6">
          <div className="relative w-[100px] sm:w-[120px]">
            <Image
              src={hovered ? avatar2 : avatar1}
              alt="avatar"
              priority
              className={`rounded-full object-cover w-full transition-transform duration-300 ease-out ${
                hovered ? "scale-110" : "scale-100"
              }`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>

          <div className="text-left">
            <h1 className="text-white font-bold text-lg">
              Abdechakour&nbsp;Omari.
            </h1>
            <div className="flex items-center gap-2">
              <Image src={flag} alt="Morocco flag" className="w-6 h-4" />
              <p className="text-white text-sm">
                Based&nbsp;in&nbsp;Morocco, Casablanca.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex justify-center px-4 mt-1">
        <h2 className="font-bold text-center text-5xl xs:text-5xl sm:text-8xl">
          FULLSTACK <br /> DEVELOPER
        </h2>
      </main>

      <footer className="pb-8">
        <SocialLinks />
        <div className="flex justify-center mt-4">
          <a href="mailto:abdechakouromari@gmail.com">
            <button className="flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send mr-2 h-4 w-4"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
              <span className="second-font">Contact me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
            </button>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Main;
