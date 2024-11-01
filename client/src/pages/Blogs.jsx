import React from 'react'
import BlogCard from '../components/BlogCard'
import TopNav from '../components/Topnav'

const Blogs = () => {
    return (
        <div>
            <TopNav />
            <div className='py-10 px-10 '>
                <BlogCard />
            </div>

        </div>
    )
}

export default Blogs