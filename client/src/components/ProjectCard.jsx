import React from 'react'
import { FaCode } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import img1 from '../assets/ajayTuner.JPG'
import img2 from '../assets/savor.JPG'
import { ThemeProvider } from '../components/ThemeContext';
import { useContext } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ProjectCard = () => {

    const theme = useContext(ThemeProvider)

    const ajaytunerdescription = 'AjayTuner is a web application designed for guitar tuning. It utilizes the microphone on your device to detect string frequencies and provides feedback on whether they are correctly tuned.'
    const savorDescription = 'Savor Restaurant’s website highlights its services and menu offerings, allowing customers to explore dishes and place online orders. Users can log into their accounts, select their favorite meals, and conveniently pay via M-Pesa for a seamless dining experience.'
    const truncateText = (text, wordCount) => {
        const words = text.split(' ')
        return words.length > wordCount ? words.slice(0, wordCount).join(' ') + '...' : text
    }

    return (
        <>
            <div className='flex flex-col gap-3 md:grid lg:grid xl:grid 2xl:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 px-3 md:px-7 lg:px-10 xl:px-10 2xl:px-1- py-5'>
                <Link to='/projects/ajaytuner'>
                    <Card className={`w-full lg:w-96 shadow-lg hover:shadow-xl duration-75`}>

                        <span className='flex justify-between'>
                            <FaCode className='text-2xl text-red-600' />
                            <GoLinkExternal className='text-xl' />
                        </span>
                        <span>
                            <img src={img1} alt="" className='w-full h-64' />
                        </span>
                        <div className='text-2xl font-bold'>
                            AjayTuner
                        </div>
                        <div className=''>
                            <p>{truncateText(ajaytunerdescription, 15)}</p>
                        </div>
                    </Card>
                </Link>

                <Link to='/projects/savor'>
                    <Card className={`w-full lg:w-96 shadow-lg hover:shadow-xl duration-75`}>

                        <span className='flex justify-between'>
                            <FaCode className='text-2xl text-red-600' />
                            <GoLinkExternal className='text-xl' />
                        </span>
                        <span>
                            <img src={img2} alt="" className='w-full h-64' />
                        </span>
                        <div className='text-2xl font-bold'>
                            Savor Restaurant
                        </div>
                        <div className=''>
                            <p>{truncateText(savorDescription, 15)}</p>
                        </div>
                    </Card>
                </Link>
            </div>
            <Footer />

        </>

    )
}

export default ProjectCard