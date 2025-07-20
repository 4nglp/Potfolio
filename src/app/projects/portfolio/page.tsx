import Image from "next/image";
import home from "../../../../public/assets/projects/portfolio/home_page.png";
import exp_edc from "../../../../public/assets/projects/portfolio/exp_edc.png";
import tech_stack from "../../../../public/assets/projects/portfolio/tech_stack.png";
import projects_comp from "../../../../public/assets/projects/portfolio/projects.png";
import about from "../../../../public/assets/projects/portfolio/about.png";
import projects_page from "../../../../public/assets/projects/portfolio/projects_page.png";
import projects_list from "../../../../public/assets/projects/portfolio/projects_list.png";
import project_details_1 from "../../../../public/assets/projects/portfolio/project_details.png";
import project_details_2 from "../../../../public/assets/projects/portfolio/project_details_2.png";
import navbar from "../../../../public/assets/projects/portfolio/navbar.png";
import footer from "../../../../public/assets/projects/portfolio/footer.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      title: "Home Page",
      img: home,
      desc: "The homepage features my full name, location, and social links for contact. The 'Contact Me' button leads directly to the email section.",
    },
    {
      id: 2,
      title: "Experience & Education",
      img: exp_edc,
      desc: "This section outlines my academic background and professional experience in a clear, concise format.",
    },
    {
      id: 3,
      title: "Tech Stack",
      img: tech_stack,
      desc: "Highlights the technologies and tools I work with, displayed in a visually appealing and categorized format.",
    },
    {
      id: 4,
      title: "Projects Overview",
      img: projects_comp,
      desc: "A grid view of my projects, each showing a title, short description, tech used, GitHub repository, and links to live demos or downloads.",
    },
    {
      id: 5,
      title: "About Page",
      img: about,
      desc: "A detailed section about me, and a recap of the technologies I specialize in.",
    },
    {
      id: 6,
      title: "Projects Page",
      img: projects_page,
      desc: "A dedicated page listing all of my featured projects, each with a link to a more in-depth project detail view.",
    },
    {
      id: 7,
      title: "Extended Projects List",
      img: projects_list,
      desc: "An extended list of current and upcoming projects, providing a deeper look into the breadth of my work.",
    },
    {
      id: 8,
      title: "Project Details – Overview",
      img: project_details_1,
      desc: "The first part of a project detail page, featuring the title, description, and key information about the project.",
    },
    {
      id: 9,
      title: "Project Details – Screenshots",
      img: project_details_2,
      desc: "Includes multiple screenshots of the project along with detailed explanations of features, functionality, and implementation.",
    },
    {
      id: 10,
      title: "Navbar",
      img: navbar,
      desc: "A responsive navigation bar that includes smooth scrolling and a direct link to the contact section.",
    },
    {
      id: 11,
      title: "Footer",
      img: footer,
      desc: "A clean footer with links for navigation and direct access to my social profiles and email.",
    },
  ];

  return (
    <div className="bg-black text-white px-6">
      <section className="min-h-screen flex flex-col justify-center items-center text-center max-w-4xl mx-auto py-16">
        <h1 className="font-bold text-4xl sm:text-5xl mb-6">Portfolio</h1>
        <p className="font-light tracking-widest text-base sm:text-lg leading-relaxed text-left">
          This project is a personal portfolio built with Next.js, designed to
          showcase my development skills, professional experience, and notable
          projects. It reflects both my technical abilities and my eye for
          design and structure.
          <br />
          <br />
          You can view the source code on{" "}
          <a
            href="https://github.com/4nglp/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300"
          >
            GitHub
          </a>
          .
          <br />
          Check out the{" "}
          <a
            href="https://4nglp-portfoio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300"
          >
            live site
          </a>
          .
        </p>
      </section>

      <section className="min-h-screen flex flex-col items-center gap-16 max-w-4xl mx-auto py-12">
        {data.map(({ id, title, img, desc }) => (
          <div
            key={id}
            className="w-full p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h2>
            <Image
              alt={title}
              className="w-full rounded-md mb-4"
              placeholder="blur"
              src={img}
            />
            <p className="text-base sm:text-lg font-light">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
