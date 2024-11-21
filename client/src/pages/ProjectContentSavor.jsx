import React, {useContext} from 'react'
import TopNav from '../components/Topnav'
import ThemeContext from '../components/ThemeContext'
import { GoLinkExternal } from "react-icons/go";
import img from '../assets/savor.JPG'


const ProjectContent = () => {

    const { theme } = useContext(ThemeContext)
    return (
        <>
            <TopNav />
            <div className={`flex flex-col justify-center items-center py-14 ${theme === 'light' && 'bg-slate-100'}`}>
                <div className='md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4'>
                    <div className='text-3xl font-bold pb-10'>
                        AjayTuner
                    </div>
                    <div className='flex gap-3 pb-5'>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>ReactJs</span>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>Web</span>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>MongoDB</span>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>NodeJs</span>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>TailwindCss</span>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>ExpressJs</span>
                    </div>
                    <div className='w-full pb-10'>
                        <img src={img} alt="" />
                    </div>
                    <div className={`w-full text-xl font-light ${theme === "dark" ? 'text-white' : 'text-slate-600'}`}>
                        <p>Savor Restaurant’s website highlights its services and menu offerings, allowing customers to explore dishes and place online orders. Users can log into their accounts, select their favorite meals, and conveniently pay via M-Pesa for a seamless dining experience.</p>
                    </div>
                    <div className='flex py-5'>
                        <a href='https://savor-restaurant.vercel.app/' className='flex gap-2 justify-center items-center text-lg px-6 py-3 bg-red-600 hover:bg-red-800 duration-75' target='_blank'><span>View Live</span><span><GoLinkExternal /></span> </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectContent