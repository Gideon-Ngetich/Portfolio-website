import React, { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import TopNav from '../components/Topnav'
import { ThemeProvider } from '../components/ThemeContext'
import ThemeContext from '../components/ThemeContext';


const Blogs = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <TopNav />
            <div className={`${theme === 'light' && 'bg-slate-100'}`}>
                <div className={`px-3 md:px-10 lg:px-10 xl:px-10 2xl:px-10 py-5 md:py-10 lg:py-10 xl:py-10 2xl:py-10  `}>
                    <div className='flex flex-col gap-6 py-10'>
                        <span className='text-3xl font-bold border-l-4 pl-3 border-red-600 '>BLOGS</span>
                        <span className='text-md md:text-lg xl:text-lg 2xl:text-lg px-5'>Sharing insights, tips, and projects in tech, coding, and innovation. Dive in and explore:</span>
                    </div>
                    <BlogCard />
                </div>

            </div>
        </>

    )
}

export default Blogs