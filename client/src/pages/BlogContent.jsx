import { React, useEffect, useContext, useState } from 'react'
import TopNav from '../components/Topnav'
import { FaRegCalendarAlt } from "react-icons/fa";
import ThemeContext from '../components/ThemeContext';
import Footer from '../components/Footer';
import priv from '../assets/priv.JPG'
import user from '../assets/user.JPG'
import ip from "../assets/ip.JPG"
import ssh from "../assets/ssh.JPG"
import save from "../assets/save.JPG"
import me from "../assets/me.jpg"
import bgVideo from "../assets/video.mp4";

const BlogContent = () => {

    const img = 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg';
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`flex flex-col justify-center items-center ${theme === 'light' && 'bg-transparent'} relative min-h-screen overflow-hidden`}>
            <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="fixed inset-0 w-full h-full object-cover -z-10"
                  >
                    <source src={bgVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            
                  {/* ===== DARK OVERLAY FOR READABILITY ===== */}
                  <div className="fixed inset-0 bg-black/50 -z-10" />
            <TopNav />
            <div className={`md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 px-5 my-10 bg-transparent`}>
                <div style={{ fontFamily: 'barlow' }} className='text-2xl text-white lg:text-4xl font-semibold py-4'>Basic Configuration of a Cisco Router: A Beginner's Guide.</div>
                <div className='flex justify-between py-5'>
                    <div className='flex gap-3 justify-center items-center'>
                        <span className='rounded-full'>
                            <img className='rounded-full w-12 h-12 ' src={me} alt="" />
                        </span>
                        <span className='font-semibold text-sm md:text-md lg:text-md xl:text-md 2xl:text-md text-white'>Gideon Ngetich</span>
                    </div>
                    <span className='flex justify-center items-center gap-2 font-semibold text-sm md:text-md lg:text-md xl:text-md 2xl:text-md'><FaRegCalendarAlt />  Nov, 21st 2024</span>
                </div>
                <div>
                    <ul className='flex gap-1 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3 text-sm md:text-md lg:text-md xl:text-md 2xl:text-md'>
                        <li className='border border-slate-700 rounded-3xl p-2 text-white'>Configuration</li>
                        <li className='border border-slate-700 rounded-3xl p-2 text-white'>Networks</li>
                        <li className='border border-slate-700 rounded-3xl p-2 text-white'>Cisco</li>
                    </ul>
                </div>
                <div className={`paragraph py-5 text-md ${theme === "light" && 'text-white'} `}>
                    <div className=''>Cisco routers are powerful devices that form the backbone of many networks. Configuring a Cisco router for the first time might seem intimidating, but this guide simplifies the process with step-by-step instructions.
                        <h3 className='font-bold py-2 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Step 1: Accessing the Router</h3>
                        <p className='text-md'>You can access the router through one of the following methods:</p>
                        <ul className='list-disc px-10'>
                            <li>Console Port: Using a console cable connected to a terminal emulator like PuTTY.</li>
                            <li>SSH or Telnet: Over the network once the initial configuration is complete.
                            </li>
                        </ul>
                        <h3 className='font-bold py-2 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Step 2: Entering Configuration Mode</h3>
                        <p className='text-md'>After logging in, enter global configuration mode:</p>
                        <img className='paragraph' src={priv} alt="" />

                        <h3 className='font-bold py-2 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Step 3: Setting Up Hostname and Passwords</h3>
                        <p>Assign a unique hostname and secure the router:</p>
                        <img className='paragraph' src={user} alt="" />

                        <h3 className='font-bold py-2 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Step 4: Configuring Interfaces</h3>
                        <p className='text-md'>Assign IP addresses to interfaces to enable communication. For example, configuring the GigabitEthernet0/0/0 interface:</p>
                        <img className='paragraph' src={ip} alt="" />

                        <h3 className='font-bold py-2 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Step 5: Setting Up a Default Gateway</h3>
                        <p className='text-md'>Assign IP addresses to interfaces to enable communication. For example, configuring the GigabitEthernet0/0/0 interface:</p>
                        <img className='paragraph' src={ip} alt="" />

                        <h3 className='font-bold py-2 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Step 6: Enabling SSH for Remote Access</h3>
                        <p className='text-md'>Secure remote management with SSH:</p>
                        <img className='paragraph' src={ssh} alt="" />

                        <h3 className='font-bold py-2 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>Step 7:  Saving the Configuration</h3>
                        <p className='text-md'>Save the running configuration to prevent loss after a reboot:</p>
                        <img className='paragraph' src={save} alt="" />

                    </div>
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default BlogContent