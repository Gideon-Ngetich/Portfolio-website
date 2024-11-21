import React, { useState, useEffect } from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { IoArrowForward } from "react-icons/io5";
import { motion, useAnimation } from 'framer-motion';


const BlogCard = () => {
    const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnehkZRNAkreoME3BnCO7mINj7pn2wA6tgiw&s'
    const description = 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order'

    const truncateText = (text, maxWords) => {
        const words = text.split(' ')
        return words.length > maxWords ? words.slice(0, maxWords).join(' ') + "..." : text
    };

    const handleScroll = () => {
        const windowHeight = window.innerHeight;

        // Trigger animation when section is in view
        if (aboutTop < windowHeight - 100) {
            aboutControls.start({ opacity: 1, y: 0 });
        }
        if (proficientTop < windowHeight - 100) {
            proficientControls.start({ opacity: 1, y: 0 });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <motion.div className='flex flex-col gap-5 md:grid lg:grid xl:grid 2xl:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
            {/* <Link to={'/blogs/blog'}>
                <Card
                    className="max-w-sm h-[500px] cursor-pointer hover:shadow-xl duration-75"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={img}
                >
                    <span className="text-lg h-1/2 font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions  2021
                    </span>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {truncateText(description,15)}
                        <span className='text-red-500'><a href="/blogs/blog">See more</a></span>
                    </p>
                    <span className='flex justify-center items-center gap-1 w-full text-center text-red-600 hover:text-red-800 duration-75 ease-in'>Read <IoArrowForward /></span>
                </Card>
            </Link> */}
            <Link to={'/blogs/blog'}>
                <Card
                    className="max-w-sm h-[500px] cursor-pointer hover:shadow-xl duration-75"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={img}
                >
                    <h5 className="text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions acquisitions acquisitions  2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {truncateText(description, 15)}
                        <span className='text-blue-500'><a href="/blogs/blog">See more</a></span>
                    </p>
                    <span className='flex justify-center items-center gap-1 w-full text-center text-blue-500 hover:text-blue-800 duration-75 ease-in'>Read <IoArrowForward /></span>
                </Card>
            </Link>
        </motion.div >
    )
}

export default BlogCard