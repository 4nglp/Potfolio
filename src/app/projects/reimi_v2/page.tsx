import Image from "next/image";
import home from "../../../../public/assets/projects/reimi_v2/reimi_v2_home_page.png";
import anime_home from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime.png";
import anime_banner from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime_p1.png";
import anime_latests_updates from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime_p2.png";
import anime_details from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime_details.png";
import watch from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime_watch.png";
import modal_1 from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime_watch_modal_p1.png";
import modal_2 from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime_watch_modal_p2.png";
import modal_3 from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime_watch_modal_p3.png";
import anime_title from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime_watch_title.png";
import progress_bar from "../../../../public/assets/projects/reimi_v2/reimi_v2_anime_watch_progress_bar.png";
import search from "../../../../public/assets/projects/reimi_v2/reimi_v2_search.png";
import manga_home from "../../../../public/assets/projects/reimi_v2/reimi_v2_manga.png";
import manga_banner from "../../../../public/assets/projects/reimi_v2/reimi_v2_manga_p1.png";
import manga_latests_updates from "../../../../public/assets/projects/reimi_v2/reimi_v2_manga_p2.png";
import manga_details_ar from "../../../../public/assets/projects/reimi_v2/reimi_v2_manga_details_ar.png";
import manga_details_en from "../../../../public/assets/projects/reimi_v2/reimi_v2_manga_details_en.png";
import read from "../../../../public/assets/projects/reimi_v2/reimi_v2_manga_chapter.png";
import library_1 from "../../../../public/assets/projects/reimi_v2/reimi_v2_library_p1.png";
import library_2 from "../../../../public/assets/projects/reimi_v2/reimi_v2_library_p2.png";
import library_3 from "../../../../public/assets/projects/reimi_v2/reimi_v2_library_p3.png";
import library_4 from "../../../../public/assets/projects/reimi_v2/reimi_v2_library_p4.png";
import category from "../../../../public/assets/projects/reimi_v2/reimi_v2_library_p5.png";

const ReimiV2 = () => {
  const data = [
    {
      id: 1,
      title: "Home Page",
      img: home,
      desc: "Displays the user's personalized library of anime and manga entries stored locally using localStorage.",
    },
    {
      id: 2,
      title: "Anime Home Page",
      img: anime_home,
      desc: "Features a banner of pinned anime followed by a dynamic section of the latest episode updates scraped from Anime4up.",
    },
    {
      id: 3,
      title: "Anime Banner",
      img: anime_banner,
      desc: "An interactive Swiper.js-powered banner displaying pinned anime entries that redirect to their respective details pages when clicked.",
    },
    {
      id: 4,
      title: "Latest Anime Episodes",
      img: anime_latests_updates,
      desc: "Lists the latest anime episode releases from Anime4up. Clicking an item navigates the user directly to the video player.",
    },
    {
      id: 5,
      title: "Anime Details Page",
      img: anime_details,
      desc: "Provides detailed information about the selected anime including title, synopsis, genres, status, and episode list with an option to add it to the library.",
    },
    {
      id: 6,
      title: "Anime Video Player",
      img: watch,
      desc: "A custom video player that supports advanced features and is accessible from both the home and details pages.",
    },
    {
      id: 7,
      title: "Context Menu – Servers",
      img: modal_1,
      desc: "First section of the custom modal triggered on right-click, allowing the user to switch between available video servers.",
    },
    {
      id: 8,
      title: "Context Menu – Episodes",
      img: modal_2,
      desc: "Second section of the modal offering navigation between episodes and a quick return to the anime details page.",
    },
    {
      id: 9,
      title: "Context Menu – Shortcuts",
      img: modal_3,
      desc: "Final section displaying all available keyboard shortcuts to enhance playback control and user experience.",
    },
    {
      id: 10,
      title: "Episode Title Hover",
      img: anime_title,
      desc: "Displays the current episode title when the user hovers near the top of the video player.",
    },
    {
      id: 11,
      title: "Progress Bar Hover",
      img: progress_bar,
      desc: "Reveals the video progress bar on hover with auto-hide functionality using mouse enter/leave events.",
    },
    {
      id: 12,
      title: "Search Page",
      img: search,
      desc: "Supports both anime and manga queries, displaying all matching entries retrieved from multiple sources.",
    },
    {
      id: 13,
      title: "Manga Home Page",
      img: manga_home,
      desc: "Displays pinned manga entries and latest chapters across three sources: two Arabic (3asq, Despair) and one English (Comick).",
    },
    {
      id: 14,
      title: "Manga Banner",
      img: manga_banner,
      desc: "Swiper-based banner showcasing highlighted manga titles from all supported sources.",
    },
    {
      id: 15,
      title: "Latest Manga Updates",
      img: manga_latests_updates,
      desc: "Displays recently updated manga entries across sources in a clean and scrollable format.",
    },
    {
      id: 16,
      title: "Manga Details Page (Arabic)",
      img: manga_details_ar,
      desc: "Presents full details for Arabic manga including chapters, categories, and an 'Add to Library' option.",
    },
    {
      id: 17,
      title: "Manga Details Page (English)",
      img: manga_details_en,
      desc: "Same as the Arabic version, but for English sources such as Comick, showing chapters and metadata.",
    },
    {
      id: 18,
      title: "Manga Reader",
      img: read,
      desc: "A simple, functional manga reader that displays all pages of a selected chapter. Will be enhanced in future versions.",
    },
    {
      id: 19,
      title: "Library View",
      img: library_1,
      desc: "The main dashboard for users to view all anime and manga they’ve added, stored via localStorage.",
    },
    {
      id: 20,
      title: "Add Category",
      img: library_2,
      desc: "Allows users to create custom categories from the sidebar for organizing their library entries.",
    },
    {
      id: 21,
      title: "Entry Context Menu",
      img: library_3,
      desc: "Right-clicking a library entry opens a modal with options to manage or remove it from categories.",
    },
    {
      id: 22,
      title: "Manage Categories",
      img: library_4,
      desc: "A modal that provides the ability to assign entries to categories or delete them from existing ones.",
    },
    {
      id: 23,
      title: "Category Filter",
      img: category,
      desc: "Displays all user-created categories in the sidebar. Clicking on one filters the library view to its entries.",
    },
  ];
  return (
    <div className="bg-black text-white px-6">
      <section className="min-h-screen flex flex-col justify-center items-center text-center max-w-4xl mx-auto py-16">
        <h1 className="font-bold text-4xl sm:text-5xl mb-6">ReimiV2</h1>
        <p className="font-light tracking-widest text-base sm:text-lg leading-relaxed text-left">
          Reimi V2 is one of my most meaningful projects—built with passion and
          a deep love for anime and manga. Over the past year, I developed it as
          a full-featured Electron.js app focused on Arabic content, allowing
          users to watch anime and read manga through custom web scraping.
          Features like library management and categories are handled
          client-side using localStorage. Used by friends and constantly
          evolving, Reimi V2 has been a rewarding learning experience.
          <br />
          <br />
          The app is still in development, but you can try the beta (v0.0.2) via
          GitHub:{" "}
          <a
            href="https://github.com/4nglp/ReimiV2/releases/tag/v0.0.2"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300"
          >
            Download v0.0.2 Beta
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
      <section className="py-12 text-left">
        <div className="text-white text-md italic max-w-3xl mx-auto pt-6">
          <p>
            <strong>Note:</strong> This project is still under active
            development, but you can download the current version or explore the
            source code on GitHub:
          </p>
          <p className="mt-2">
            <a
              href="https://github.com/4nglp/ReimiV2"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400 hover:text-blue-300"
            >
              https://github.com/4nglp/ReimiV2
            </a>
          </p>
          <p className="mt-4">
            The next planned beta release (<strong>v0.0.3</strong>) will feature
            an improved manga reader and support for user accounts, replacing
            localStorage with a more scalable system.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReimiV2;
