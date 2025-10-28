import React, { useContext } from "react";
import { FaCode } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { ThemeProvider } from "../components/ThemeContext";
import { projects } from "../data/projects";
import Footer from "./Footer";

const ProjectCard = () => {
  const theme = useContext(ThemeProvider);

  const truncateText = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group block transform transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Glassmorphic Card */}
            <div
              className={`
                relative overflow-hidden rounded-2xl border backdrop-blur-xl text-white
                transition-all duration-500 ease-out h-[420px]
                ${theme === 'dark'
                  ? 'bg-trasparent border-white/20 shadow-2xl shadow-black/20'
                  : 'bg-trasparent border-white/40 shadow-xl shadow-gray-500/10'
                }
                hover:shadow-2xl hover:border-red-500/50
              `}
            >
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
              </div>

              {/* Content */}
              <div className="relative p-5">
                {/* Icons Row */}
                <div className="flex justify-between items-start mb-4">
                  <FaCode className="text-2xl text-red-600" />
                  <GoLinkExternal className="text-lg text-white group-hover:text-red-600 transition-colors" />
                </div>

                {/* Thumbnail */}
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={project.thumbNail}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white dark:text-white">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white dark:text-gray-300">
                  {truncateText(project.description, 18)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ProjectCard;