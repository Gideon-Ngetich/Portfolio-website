import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import TopNav from "../components/Topnav";
import { ThemeProvider } from "../components/ThemeContext";
import ThemeContext from "../components/ThemeContext";
import bgVideo from "../assets/video.mp4";


const Blogs = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ===== DARK OVERLAY FOR READABILITY ===== */}
      <div className="fixed inset-0 bg-black/50 -z-10" />
      <TopNav />
      <div className={`${theme === "light" && "bg-transparent"}`}>
        <div
          className={`px-3 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-5 md:py-10 lg:py-10 xl:py-10 2xl:py-10  `}
        >
          <div className="flex flex-col gap-6 py-10">
            <span className="text-3xl text-white font-bold border-l-4 pl-3 border-red-600 ">
              BLOGS
            </span>
            <span className="text-md text-white md:text-lg xl:text-lg 2xl:text-lg px-5">
              Sharing insights, tips, and projects in tech, coding, and
              innovation. Dive in and explore:
            </span>
          </div>
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
