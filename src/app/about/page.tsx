/* eslint-disable react/no-unescaped-entities */
import TechStack from "@/components/TechStack";

const About = () => {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center overflow-x-hidden text-center px-6">
        <h1 className="font-bold text-2xl mb-4 text-left sm:text-5xl">
          Greetings, I'm Abdechakour Omari.
        </h1>
        <p className="max-w-3xl font-light tracking-widest text-lg leading-relaxed text-left">
          I'm a 20-year-old Fullstack Developer, passionate about building
          sleek, scalable, and user-friendly web applications. From frontend to
          backend, I love turning ideas into reality. I'm currently seeking my
          first professional experience through an internship or job opportunity
          where I can grow, contribute, and collaborate. I'm quick to adapt — if
          a technology isn't in my stack yet, give me a bit of time and I'll
          cook with it like it’s always been there.
        </p>
      </section>
      <TechStack />
    </div>
  );
};
export default About;
