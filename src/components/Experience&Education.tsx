"use client";
import Image from "next/image";
import React, { useState } from "react";
import istabm from "../../public/assets/education/ofppt.png";
import fsbm from "../../public/assets/education/fsbm.jpeg";
import soussi from "../../public/assets/education/soussi.jpeg";

const ExperienceEducationSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const studiesData = [
    {
      id: 1,
      period: "Sep 2023 - Jul. 2025",
      title: "ISTA Ben M'sik",
      subtitle: "Diplome technicien spécialisé en developpement digital",
      description:
        "Classed the 3rd in my class and participated in the 2nd edition of ISGI Hackathon.",
      logo: istabm,
      bgColor: "bg-gray-700",
    },
    {
      id: 2,
      period: "Sep 2022 - Jul 2023",
      title: "Faculté des Sciences Ben M'sik",
      subtitle: "S1 & S2 in SMP (Sciences de la Matière Physique)",
      description:
        "Passed the S1 realized that I ain't built for physics then decided to switch to IT.",
      logo: fsbm,
      bgColor: "bg-blue-600",
    },
    {
      id: 3,
      period: "Sep 2019 - Jul 2022",
      title: "Lycée Mokhtar Essoussi",
      subtitle: "Baccalauréat Sciences Phusique et Chimie ",
      description: "Graduated with honors (montion bien) ",
      logo: soussi,
      bgColor: "bg-green-600",
    },
  ];

  const workData = [
    {
      id: 1,
      period: "Apr 2025 - May 2025",
      title: "ISTA Ben M'sik",
      subtitle: "Fullstack Developer Intern",
      description:
        "Built an entre desktop application using Electron.js to manage the interns' absence and their discipline note and helped with the UI and the auth of the mobile version.",
      logo: istabm,
      bgColor: "bg-cyan-600",
    },
  ];

  const currentData = activeTab === "education" ? studiesData : workData;

  return (
    <div className="bg-black text-white py-4 px-3">
      <section className="pt-6 mx-auto container max-w-3xl px-3 md:px-0 md:pt-12 z-50">
        <p className="text-lg font-light text-white mb-4 tracking-widest text-left">
          Experience & Education
        </p>
        <div
          className="h-8 items-center justify-center rounded-lg bg-black/50 border border-white/20 mb-3 grid w-full grid-cols-2"
          role="tablist"
        >
          <button
            role="tab"
            aria-selected={activeTab === "experience"}
            onClick={() => setActiveTab("experience")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-1 text-xs sm:text-sm font-medium transition-all  hover:cursor-pointer ${
              activeTab === "experience"
                ? "bg-white text-black"
                : "text-white hover:text-white/80"
            }`}
          >
            Experience
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "education"}
            onClick={() => setActiveTab("education")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-1 text-xs sm:text-sm font-medium transition-all  hover:cursor-pointer ${
              activeTab === "education"
                ? "bg-white text-black"
                : "text-white hover:text-white/80"
            }`}
          >
            Education
          </button>
        </div>
        <div
          role="tabpanel"
          className="mt-2 border border-white/20 rounded-lg bg-black/80"
        >
          <ul className="ml-3 sm:ml-8 border-l border-white/30 list-none">
            {currentData.map((item) => (
              <li
                key={item.id}
                className="relative ml-4 sm:ml-8 pr-2 py-3 sm:py-4"
              >
                <div className="absolute -left-7 sm:-left-13 top-3 sm:top-4 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      fill
                      className="object-cover object-center rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <time className="text-xs text-white/60">{item.period}</time>
                  <h2 className="font-bold leading-none text-xs sm:text-sm">
                    {item.title}
                  </h2>
                  <p className="text-xs text-white/70 sm:text-2sm">
                    {item.subtitle}
                  </p>
                  {item.description && (
                    <p className="text-xs text-white font-bold leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ExperienceEducationSection;
