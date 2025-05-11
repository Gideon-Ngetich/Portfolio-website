import React from 'react'
import img from '../assets/pngegg.png'
import TopNav from '../components/Topnav'
import Footer from '../components/Footer'
import MessageForm from '../components/MessageForm'

const Contacts = () => {
    return (
        <div className='flex flex-col h-full'>
            <TopNav />
            <div className='w-full flex flex-col items-center gap-24 justify-center py-10 md:py-20 lg:py-20 xl:py-20 2xl:py-20'>
                <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center gap-20 items-center h-auto w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4'>
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-10 md:px-0 lg:px-0 2xl:px-0 flex flex-col justify-center border-r border-slate-700 gap-5'>
                        <span className='text-xl border-l-2 pl-2 border-red-600 flex '>
                            Contacts
                        </span>
                        <div className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail" /> <p>giddy.k.ngetich@gmail.com</p>
                        </div>
                        <div className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/fluency/50/phone.png" alt="phone" /> <div>+254 724631983</div>
                        </div>
                        <span className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
                            <p><a href="https://www.linkedin.com/in/gideon-ngetich-72a4b0252/">Gideon Ngetich</a></p>
                        </span>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-10 md:px-0 lg:px-0 2xl:px-0 flex flex-col justify-center gap-5'>
                        <span className='text-xl border-l-2 pl-2 border-red-600 flex items-center'>
                            Profiles
                        </span>
                        <span className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/fluency/50/github.png" alt="github" />
                            <p><a href="https://github.com/Gideon-Ngetich">github.com/gideon-ngetich</a></p></span>
                        <span className='flex gap-4 w-full items-center'>
                            <img className='w-14 h-10' src="https://assets.tryhackme.com/img/THMlogo.png" alt="" />
                            <p><a href="https://tryhackme.com/r/p/GideonNgetich">tryhackme.com/GideonNgetich</a></p>
                        </span>
                        <span className='flex gap-4 w-full items-center'>
                            <img className='w-10 h-10' src={img} alt="" />
                            <p><a href="https://learningnetwork.cisco.com/s/profile/0056e00000D7jnf">Cisco Networking Academy</a></p>
                        </span>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <MessageForm />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Contacts