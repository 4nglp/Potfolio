import SocialLinks from "./SocialLinks";
import Image from "next/image";
import avatar from "../../public/assets/avatar.png";
import flag from "../../public/assets/morocco-flag-small.png";

const Main = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center px-4 mt-[200px]">
        <div className="flex items-center space-x-6">
          <Image src={avatar} alt="avatar" className="w-[100px] object-cover" />
          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-bold">
              Abdechakour Omari.
            </h1>
            <div className="flex items-center space-x-2 mt-1">
              <Image src={flag} alt="morocco-flag" className="w-6 h-4" />
              <p className="text-white text-sm">Based in Morocco</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start mb-[30px]">
        <h1 className="font-bold text-8xl">
          FULLSTACK <br /> DEVELOPER
        </h1>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Main;
