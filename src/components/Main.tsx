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
      </footer>
    </section>
  );
};

export default Main;
