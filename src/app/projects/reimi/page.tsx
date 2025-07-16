import Image from "next/image";
import home from "../../../../public/assets/projects/reimi/reimi_home_page.png";
import browse from "../../../../public/assets/projects/reimi.png";
import search from "../../../../public/assets/projects/reimi/reimi_search_page.png";
import details from "../../../../public/assets/projects/reimi/reimi_details.png";
import chapter from "../../../../public/assets/projects/reimi/reimi_chapter.png";

const Reimi = () => {
  const data = [
    {
      id: 1,
      title: "Home Page",
      img: home,
      desc: "A simple, incomplete layout where I used Swiper to display a banner of recommended titles.",
    },
    {
      id: 2,
      title: "Browse Page",
      img: browse,
      desc: "A listing page showcasing the latest 50 manga updates retrieved from the MangaDex API.",
    },
    {
      id: 3,
      title: "Search Page",
      img: search,
      desc: "After submitting a search query, users are redirected to a page displaying entries that match the query.",
    },
    {
      id: 4,
      title: "Details Page",
      img: details,
      desc: "Clicking an entry from any page leads here, where detailed information is fetched from AniList's GraphQL API and chapters from MangaDex.",
    },
    {
      id: 5,
      title: "Chapter Page",
      img: chapter,
      desc: "Users can read chapters by selecting one from the chapter list. The chapter reader is simple and functional.",
    },
  ];

  const notice =
    "Note: This project is currently on hold and remains incomplete. It lacks the Library page, mobile responsiveness, and a 'Mark as Read' feature (planned via localStorage).";

  return (
    <div className="bg-black text-white px-6">
      <section className="min-h-screen flex flex-col justify-center items-center text-center max-w-4xl mx-auto py-16">
        <h1 className="font-bold text-4xl sm:text-5xl mb-6">Reimi</h1>
        <p className="font-light tracking-widest text-base sm:text-lg leading-relaxed text-left">
          One of the first projects I built using Next.js. Through it, I learned
          how to work with both RESTful and GraphQL APIs, and gained
          foundational experience in project structuring with Next.js. Although
          mobile responsiveness was never completed, this project marked a
          meaningful step forward in my development journey.
          <br />
          <br />
          You can explore the project on GitHub:{" "}
          <a
            href="https://github.com/4nglp/Reimi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300"
          >
            https://github.com/4nglp/Reimi
          </a>
          <br />
          Or try the live version here:{" "}
          <a
            href="https://reimi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300"
          >
            https://reimi.vercel.app
          </a>
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
      <section className="py-12 text-left">
        <p className="text-white text-md italic max-w-3xl mx-auto pt-6">
          {notice}
        </p>
      </section>
    </div>
  );
};

export default Reimi;
