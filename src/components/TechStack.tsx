"use client";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiLaravel,
  SiFirebase,
  SiPrisma,
  SiPostman,
  SiElectron,
  SiGit,
  SiGithub,
  SiExpo,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";

const techStack = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "Javascript", Icon: SiJavascript },
  { name: "Typescript", Icon: SiTypescript },
  { name: "PHP", Icon: SiPhp },
  { name: "Python", Icon: SiPython },
  { name: "React", Icon: SiReact },
  { name: "Expo", Icon: SiExpo },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Laravel", Icon: SiLaravel },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Postman", Icon: SiPostman },
  { name: "Electron", Icon: SiElectron },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
];

export default function TechStack() {
  return (
    <div className="bg-black text-white py-4 px-3">
      <section className="pt-6 mx-auto container max-w-2xl px-3 md:px-0 md:pt-12 z-50">
        <p className="text-lg font-light text-white mb-4 tracking-widest text-left">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2 items-center">
          {techStack.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center p-2 bg-neutral-950/30 rounded-xl transition hover:bg-neutral-800 hover:cursor-pointer"
            >
              <Icon className="text-white w-5 h-5" />
              <p className="ml-2 text-sm text-white">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
