import React from 'react'
import img from '../assets/pngegg.png'
import TopNav from '../components/Topnav'
import Footer from '../components/Footer'

const Contacts = () => {
    return (
        <div className='flex flex-col h-screen'>
            <TopNav />
            <div className='w-full h-96 flex justify-center '>
                <div className='flex justify-center gap-20 items-center h-auto w-3/4'>
                    <div className='w-1/2 flex flex-col justify-center border-r border-slate-700 gap-5'>
                        <span className='text-xl border-l-2 pl-2 border-red-600 flex items-center'>
                            Contacts
                        </span>
                        <span className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail" /> <p>giddy.k.ngetich@gmail.com</p>
                        </span>
                        <div className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/fluency/50/phone.png" alt="phone" /> <div>+254 724631983</div>
                        </div>
                        <span className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
                            <p><a href="linkedin.com/in/gideon-ngetich-72a4b0252/">Gideon Ngetich</a></p>
                        </span>
                    </div>
                    <div className='w-1/2 flex flex-col justify-center gap-5'>
                        <span className='text-xl border-l-2 pl-2 border-red-600 flex items-center'>
                            Profiles
                        </span>
                        <span className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/fluency/50/github.png" alt="github" />
                            <p><a href="https://github.com/Gideon-Ngetich">Gideon Ngetich</a></p></span>
                        <span className='flex gap-4 w-full items-center'>
                            <img className='w-14 h-10' src="https://assets.tryhackme.com/img/THMlogo.png" alt="" />
                            <p><a href="https://tryhackme.com/r/p/GideonNgetich">TryHackMe</a></p>
                        </span>
                        <span className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src={img} alt="" />
                            <p><a href="https://learningnetwork.cisco.com/s/profile/0056e00000D7jnf">Cisco Networking Academy</a></p>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Contacts