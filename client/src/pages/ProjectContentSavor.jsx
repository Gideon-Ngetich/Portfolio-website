import React, { useContext } from 'react'
import TopNav from '../components/Topnav'
import ThemeContext from '../components/ThemeContext'
import { GoLinkExternal } from "react-icons/go";
import img from '../assets/savor.JPG'


const ProjectContent = () => {

    const { theme } = useContext(ThemeContext)
    return (
        <>
            <TopNav />
            <div className={`flex flex-col justify-center items-center py-14 w-full ${theme === 'light' && 'bg-slate-100'}`}>
                <div className='w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4'>
                    <div className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold pb-10 px-5'>
                        Savor Restaurant
                    </div>
                    <div className='overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden xl:overflow-x-hidden 2xl:overflow-x-hidden flex gap-1 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3 pb-5 px-2'>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>ReactJs</span>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>Web</span>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>MongoDB</span>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>NodeJs</span>
                        <span className='text-sm p-2 border-[1px] border-gray-200 rounded-xl'>TailwindCss</span>
                    </div>
                    <div className='w-full pb-10 px-2 flex justify-center items-center'>
                        <img  className='h-full w-full' src={img} alt="" />
                    </div>
                    <div className={`w-full text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl px-5 font-light ${theme === "dark" ? 'text-white' : 'text-slate-600'}`}>
                        <p>Savor Restaurant’s website highlights its services and menu offerings, allowing customers to explore dishes and place online orders. Users can log into their accounts, select their favorite meals, and conveniently pay via M-Pesa for a seamless dining experience.</p>
                    </div>
                    <div className='flex py-5 px-5'>
                        <a href='https://savor-restaurant.vercel.app/' className='flex gap-2 justify-center items-center text-lg text-white px-6 py-3 bg-red-600 hover:bg-red-800 duration-75' target='_blank'><span>View Live</span><span><GoLinkExternal /></span> </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectContent