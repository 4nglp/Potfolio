import { Analytics } from "@vercel/analytics/next";
import Main from "@/components/Main";
import ExperienceEducationSection from "@/components/Experience&Education";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Analytics />
      <Main />
      <ExperienceEducationSection />
      <TechStack />
    </>
  );
}
