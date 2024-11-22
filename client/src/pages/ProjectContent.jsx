import React, {useContext} from 'react'
import img from '../assets/ajayTuner.JPG'
import TopNav from '../components/Topnav'
import ThemeContext from '../components/ThemeContext'
import { GoLinkExternal } from "react-icons/go";
import img2 from '../assets/savor.JPG'


const ProjectContent = () => {

    const { theme } = useContext(ThemeContext)
    return (
        <>
            <TopNav />
            <div className={`flex flex-col w-full justify-center items-center py-14 ${theme === 'light' && 'bg-slate-100'}`}>
                <div className='w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4'>
                    <div className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold pb-10 px-5'>
                        AjayTuner
                    </div>
                    <div className='flex gap-1 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3 pb-5 px-3'>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>JavaScript</span>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>Web</span>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>Firebase</span>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>HTML</span>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>CSS</span>
                    </div>
                    <div className='w-full pb-10 px-3 flex justify-center items-center'>
                        <img className='h-full w-full' src={img} alt="" />
                    </div>
                    <div className={`w-full text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl px-5 font-light ${theme === "dark" ? 'text-white' : 'text-slate-600'}`}>
                        <p>AjayTuner is a web application designed for guitar tuning. It utilizes the microphone on your device to detect string frequencies and provides feedback on whether they are correctly tuned. Additional features include tutorials, jamming sessions, and a blog for music enthusiasts. The site offers an easy-to-navigate interface with sign-in options and social media links for engagement.</p>
                    </div>
                    <div className='flex py-5 px-5'>
                        <a href='https://ajaytuner.netlify.app/' className='flex gap-2 justify-center items-center text-lg text-white px-6 rounded-sm py-3 bg-red-600 hover:bg-red-800 duration-75' target='_blank'><span>View Live</span><span><GoLinkExternal /></span> </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectContent