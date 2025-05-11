import React from "react";
import { FaCode } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import img1 from "../assets/ajayTuner.JPG";
import img2 from "../assets/savor.JPG";
import { ThemeProvider } from "../components/ThemeContext";
import { useContext } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { projects } from "../data/projects";

const ProjectCard = () => {
  const theme = useContext(ThemeProvider);

  const ajaytunerdescription =
    "AjayTuner is a web application designed for guitar tuning. It utilizes the microphone on your device to detect string frequencies and provides feedback on whether they are correctly tuned.";
  const savorDescription =
    "Savor Restaurant’s website highlights its services and menu offerings, allowing customers to explore dishes and place online orders. Users can log into their accounts, select their favorite meals, and conveniently pay via M-Pesa for a seamless dining experience.";
  const truncateText = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-3">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <Card
              className={`w-full shadow-lg hover:shadow-xl duration-75`}
            >
              <span className="flex justify-between">
                <FaCode className="text-2xl text-red-600" />
                <GoLinkExternal className="text-xl" />
              </span>
              <span>
                <img src={project.thumbNail} alt={project.name} className="w-full h-64" />
              </span>
              <div className="text-2xl font-bold">{project.name}</div>
              <div className="">
                <p>{truncateText(project.description, 15)}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProjectCard;
