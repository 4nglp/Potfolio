import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdechakour's Portfolio",
  description: "A portfolio showcasing my work, projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
