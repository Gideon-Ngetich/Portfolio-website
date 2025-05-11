import React, { useContext, useEffect, useState } from 'react';
import TopNav from '../components/Topnav';
import ThemeContext from '../components/ThemeContext';
import { GoLinkExternal } from "react-icons/go";
import { projects } from '../data/projects';
import { useParams } from 'react-router-dom';

const ProjectContent = () => {
  const { theme } = useContext(ThemeContext);
  const [project, setProject] = useState(null); // Initialize as null
  const { projectID } = useParams();

  useEffect(() => {
    const projectInfo = projects.find((proj) => proj.id === projectID);
    setProject(projectInfo);
  }, [projectID]);

  if (!project) return <div>Loading...</div>; // Handle loading state

  return (
    <>
      <TopNav />
      <div className={`flex flex-col w-full justify-center items-center py-14 ${theme === 'light' ? 'bg-slate-100' : ''}`}>
        <div className='w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4'>
          <div className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold pb-10 px-5'>
            {project.name}
          </div>
          <div className='flex gap-1 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3 pb-5 px-3'>
            {project.tags.map((tag, index) => (
              <span key={index} className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>{tag}</span>
            ))}
          </div>
          <div className='w-full pb-10 px-3 flex justify-center items-center'>
            <img className='h-full w-full' src={project.thumbNail} alt={project.name} />
          </div>
          <div className={`w-full text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl px-5 font-light ${theme === "dark" ? 'text-white' : 'text-slate-600'}`}>
            <p>{project.description}</p>
          </div>
          <div className='flex py-5 px-5'>
            <a 
              href={project.siteLink} 
              className='flex gap-2 justify-center items-center text-lg text-white px-6 rounded-sm py-3 bg-red-600 hover:bg-red-800 duration-75' 
              target='_blank'
              rel="noopener noreferrer"
            >
              <span>View Live</span>
              <span><GoLinkExternal /></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;