import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import reimi from "../../public/assets/projects/reimi.png";
import reimi_v2 from "../../public/assets/projects/reimi_v2.png";
import portfolio from "../../public/assets/projects/portfolio.png";
import sas_desk from "../../public/assets/projects/sas_desk.png";

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Reimi",
      description:
        "A next js web app for reading manga online using manga dex api and anilist graphql api.",
      status: "On hold",
      img: reimi,
      for: "Testing and learning purposes",
      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "MangaDex API",
        "Anilist GraphQL API",
      ],
      repo: "https://github.com/4nglp/Reimi",
      web: "https://reimi.vercel.app/",
    },
    {
      id: 2,
      title: "ReimiV2",
      description:
        "An arabic anime streaming (Anime4up) and manga reading (3asq, Despair) app built with electron js (added an english manga source 'Comick' using its api)",
      status: "In development / Beta",
      img: reimi_v2,
      for: "My personal use and for my friends",
      technologies: [
        "Electron.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Web Scraping",
        "Comick API",
      ],
      repo: "https://github.com/4nglp/ReimiV2",
      download: "https://github.com/4nglp/ReimiV2/releases/tag/v0.0.2",
    },
    {
      id: 3,
      title: "Pesonal Portfolio",
      description:
        "My personal protfolio showcasing my skills, projects, and experience.",
      status: "In development",
      img: portfolio,
      for: "Personal",
      technologies: ["Next.js", "React", "TypeScript", "Twailwind CSS"],
      repo: "https://github.com/4nglp/Potfolio",
      web: "https://4nglp-portfoio.vercel.app/",
    },
    {
      id: 4,
      title: "SAS Desk",
      description:
        "A desktop application for managing the ista ben msik interns' absence and discipline notes, built with Electron.js.",
      status: "Done",
      img: sas_desk,
      for: "ISTA Ben M'sik",
      technologies: [
        "Electron.js",
        "React",
        "TypeScript",
        "Bootstrap CSS",
        "Firebase",
      ],
      repo: "Private",
      download: "Private",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-8 px-4">
      <section className="pt-6 mx-auto container max-w-3xl px-3 md:px-0 md:pt-12 z-50">
        <div className="flex justify-between items-center mb-8">
          <p className="text-lg font-light text-white tracking-widest">
            Projects
          </p>
          <Link href="/projects">
            <button className="text-neutral-400 hover:text-white transition-colors text-sm hover:cursor-pointer">
              View More
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((project) => (
            <div
              key={project.id}
              className="border border-neutral-300 rounded-lg flex flex-col justify-between hover:-translate-y-2 transition ease-in-out duration-300 group"
            >
              <div className="w-full h-48 relative">
                <Image
                  alt={project.title}
                  className="object-cover"
                  src={project.img}
                  fill
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg text-gray-50">{project.title}</h3>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105">
                    <span className="second-font">Discover</span>
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
                      className="lucide lucide-arrow-right ml-2 h-5 w-5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
                  </button>
                </div>
                <div className="flex-grow">
                  <p className="text-neutral-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center mb-1">
                    <p className="text-neutral-400 text-sm">Status:</p>
                    <span className="text-neutral-300 text-sm ml-2">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="text-neutral-400 text-sm">For:</p>
                    <span className="text-neutral-300 text-sm ml-2">
                      {project.for}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <div className="flex gap-6 text-white text-[1.5rem]">
                    {project.repo && project.repo !== "Private" && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-300"
                        title="Source Code"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.web && (
                      <a
                        href={project.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-300"
                        title="Live Site"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                    {project.download && project.download !== "Private" && (
                      <a
                        href={project.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-300"
                        title="Download"
                      >
                        <FiDownload />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4 pt-2">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-neutral-200 text-black px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
