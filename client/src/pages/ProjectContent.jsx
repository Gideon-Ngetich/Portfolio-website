import React, {useContext} from 'react'
import img from '../assets/shop-k.JPG'
import TopNav from '../components/Topnav'
import ThemeContext from '../components/ThemeContext'
import { GoLinkExternal } from "react-icons/go";


const ProjectContent = () => {

    const { theme } = useContext(ThemeContext)
    return (
        <>
            <TopNav />
            <div className={`flex flex-col justify-center items-center py-14 ${theme === 'light' && 'bg-slate-100'}`}>
                <div className='md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4'>
                    <div className='text-3xl font-bold pb-10'>
                        Kristec Shop
                    </div>
                    <div className='flex gap-3 pb-5'>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>ReactJs</span>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>TailwindCss</span>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>SQL</span>
                        <span className='p-2 border-[1px] border-gray-200 rounded-xl'>NodeJs</span>
                    </div>
                    <div className='w-full pb-10'>
                        <img src={img} alt="" />
                    </div>
                    <div className={`w-full text-xl font-light ${theme === "dark" ? 'text-white' : 'text-slate-600'}`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam illum, distinctio ea commodi voluptatem. Nobis, et enim! Natus omnis non reprehenderit fugiat iusto consectetur nisi voluptatem autem ducimus excepturi ex accusamus quo, saepe qui dolorem commodi quos ratione eum nulla placeat possimus. Aliquam, similique optio laborum vel repellat earum!</p>
                    </div>
                    <div className='flex py-5'>
                        <a className='flex gap-2 justify-center items-center text-lg px-6 py-3 bg-red-600 hover:bg-red-800 duration-75'><span>View Live</span><span><GoLinkExternal /></span> </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectContent