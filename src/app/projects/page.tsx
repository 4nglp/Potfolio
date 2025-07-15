import Projects2 from "@/components/Projects2lol";

const ProjectsPage = () => {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center overflow-x-hidden text-center px-6">
        <h1 className="font-bold text-5xl mb-4 text-center">Projects</h1>
        <p className="max-w-3xl font-light tracking-widest text-lg leading-relaxed text-center">
          Explore a list of projects showcasing various skills and technologies.
        </p>
      </section>
      <Projects2 />
    </div>
  );
};
export default ProjectsPage;
