import React from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';


const BlogCard = () => {
    const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkk2frsBnTFhwjv8GIbhAtOt2mRXx246K4HQ&s'
    return (
        <div>
            <Link to={'/blogs/blog'}>
                <Card
                className="max-w-sm cursor-pointer hover:shadow-xl duration-75"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={img}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
        </Link>
    
        </div >
    )
}

export default BlogCard