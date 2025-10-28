import { React, useState, useEffect, useContext } from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import ThemeContext from './ThemeContext';

const TopNav = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div className=' w-full '>
            <Navbar fluid rounded className='md:px-28 lg:px-28 xl:px-28 2xl:px-28 font-bold bg-transparent' style={{ fontFamily: 'Barlow' }}>
                <Navbar.Brand href="#">
                    <span className="self-center whitespace-nowrap text-sm lg:text-xl xl:text-xl md:text-xl text-white font-semibold "><Link to={'/'}><span className='text-4xl font-extrabold text-white'><b className={`${theme === 'dark' ? 'text-white' : 'text-white'}`}>G</b><b className='text-red-600'>N</b></span></Link></span>
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse className='cursor-pointer'>
                    <Navbar.Link className='text-white text-xl hover:text-blue-500 ease-in duration-75'>
                        <Link to={'/'}>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link className='text-white text-xl hover:text-blue-500 ease-in duration-75'><ScrollLink to='about' smooth={true} duration={500} offset={-70}><Link to={'/'}>About</Link></ScrollLink></Navbar.Link>
                    <Navbar.Link className='text-white text-xl hover:text-blue-500 ease-in duration-75'><Link to={'/projects'}>Projects</Link></Navbar.Link>
                    <Navbar.Link className='text-white text-xl hover:text-blue-500 ease-in duration-75'><Link to={'/blogs'}>Blogs</Link></Navbar.Link>
                    <Navbar.Link className='text-white text-xl hover:text-blue-500 ease-in duration-75'><Link to={'/contacts'}>Contacts</Link></Navbar.Link>
                    {/* <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors duration-300 ${theme === "light"
                                ? "bg-gray-200 text-gray-900"
                                : "bg-gray-800 text-gray-100"
                            }`}
                    >
                        {theme === "light" ? "🌞 Light Mode" : "🌜 Dark Mode"}
                    </button> */}
                </Navbar.Collapse>

            </Navbar>
        </div>

    )
}

export default TopNav