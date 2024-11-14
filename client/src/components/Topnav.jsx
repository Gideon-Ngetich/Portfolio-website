import { React, useState, useEffect, useContext } from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import Logo from '../assets/gn-logo.jpg'
import ThemeContext from './ThemeContext';

const TopNav = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div className=' w-full '>
            <Navbar fluid rounded className='md:px-28 lg:px-28 xl:px-28 2xl:px-28 font-bold bg-slate-400 bg-opacity-15' style={{ fontFamily: 'Barlow' }}>
                <Navbar.Brand href="#">
                    <span className="self-center whitespace-nowrap text-sm lg:text-xl xl:text-xl md:text-xl text-black font-semibold "><Link to={'/'}><img className='w-16 h-16' src={Logo} alt='Logo' /></Link></span>
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse className='cursor-pointer'>
                    <Navbar.Link href='/' className='text-black text-xl hover:text-blue-500 ease-in duration-75'>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href='/' className='text-black text-xl hover:text-blue-500 ease-in duration-75'><ScrollLink to='about' smooth={true} duration={500} offset={-70}>About</ScrollLink></Navbar.Link>
                    <Navbar.Link href='/projects' className='text-black text-xl hover:text-blue-500 ease-in duration-75'>Projects</Navbar.Link>
                    <Navbar.Link href='/blogs' className='text-black text-xl hover:text-blue-500 ease-in duration-75'>Blogs</Navbar.Link>
                    <Navbar.Link className='text-black text-xl hover:text-blue-500 ease-in duration-75'>Contacts</Navbar.Link>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors duration-300 ${theme === "light"
                                ? "bg-gray-200 text-gray-900"
                                : "bg-gray-800 text-gray-100"
                            }`}
                    >
                        {theme === "light" ? "🌞 Light Mode" : "🌜 Dark Mode"}
                    </button>
                </Navbar.Collapse>

            </Navbar>
        </div>

    )
}

export default TopNav