import React from 'react'
import { FaCode } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import img from '../assets/shop-k.PNG'
import { ThemeProvider } from '../components/ThemeContext';
import { useContext } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';


const ProjectCard = () => {

    const theme = useContext(ThemeProvider)

    const description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, id. Sapiente accusamus harum tempora dicta dolores nobis laborum cumque voluptates facere maiores. Perferendis, et quia.'
    const truncateText = (text, wordCount) => {
        const words = text.split(' ')
        return words.length > wordCount ? words.slice(0, wordCount).join(' ') + '...' : text
    }

    return (
        <div className='flex flex-col md:grid lg:grid xl:grid 2xl:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 px-3 md:px-7 lg:px-10 xl:px-10 2xl:px-1- py-5'>
            <Link to='/projects/project'>
                <Card className={`w-full lg:w-96 shadow-lg hover:shadow-xl duration-75`}>

                    <span className='flex justify-between'>
                        <FaCode className='text-2xl text-red-600' />
                        <GoLinkExternal className='text-xl' />
                    </span>
                    <span>
                        <img src={img} alt="" className='w-full h-64' />
                    </span>
                    <div className='text-2xl font-bold'>
                        Kristec Shop
                    </div>
                    <div className=''>
                        <p>{truncateText(description, 15)}</p>
                    </div>
                </Card>
            </Link>


        </div>
    )
}

export default ProjectCard