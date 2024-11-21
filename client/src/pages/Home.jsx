import { React, useEffect, useContext } from 'react';
import TopNav from '../components/Topnav';
import resume from '../assets/Gideon-Ngetich-Resume.pdf';
import { MdOutlineFileDownload } from "react-icons/md";
import Typical from 'react-typical';
import { motion, useAnimation } from 'framer-motion';
import { Tabs } from "flowbite-react";
import { FaNetworkWired, FaCode } from "react-icons/fa";
import Content from '../assets/Content.json'
import { ThemeProvider } from '../components/ThemeContext';
import Footer from '../components/Footer';
import profileImg from '../assets/me.jpg'

const Home = () => {
    const bg = 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMThiYXRjaDQta2F0aWUtMTcuanBn.jpg';

    const aboutControls = useAnimation();
    const proficientControls = useAnimation();
    const theme = useContext(ThemeProvider)

    const handleScroll = () => {
        const aboutSection = document.getElementById("about");
        const proficientSection = document.getElementById("proficient");

        const aboutTop = aboutSection?.getBoundingClientRect().top;
        const proficientTop = proficientSection?.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (aboutTop < windowHeight - 100) {
            aboutControls.start({ opacity: 1, y: 0 });
        }
        if (proficientTop < windowHeight - 100) {
            proficientControls.start({ opacity: 1, y: 0 });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const softwareData = Content[0].software
    const networkData = Content[1].networking

    return (
        <>
            <TopNav />
            <div
                // style={{ backgroundImage: `url(${bg})` }}
                className="flex flex-col bg-slate-400 justify-center gap-5 px-10 md:p-28 lg:p-28 xl:p-28 2xl:p-28 h-screen md:h-[500px] lg:h-[570px] xl:h-[570px] 2xl:h-[570px] bg-no-repeat bg-cover bg-opacity-90"
            >
                <motion.span
                    style={{ fontFamily: 'prompt', fontWeight: '400' }}
                    className="text-3xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hello! My name is
                </motion.span>

                <motion.span
                    style={{ fontFamily: 'oswald', fontWeight: '600' }}
                    className="text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-7xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    GIDEON <span className="text-red-600">NGETICH</span>
                </motion.span>

                <motion.span
                    style={{ fontFamily: 'prompt', fontWeight: '400' }}
                    className="text-2xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    I am a{' '}
                    <Typical
                        steps={['Network Engineer', 2000, 'Software Developer', 2000, 'Web Developer', 2000]}
                        loop={Infinity}
                        wrapper="span"
                        className="text-red-600 font-semibold"
                    />
                </motion.span>

                <motion.span
                    className="flex items-center justify-center md:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <a href={resume} download="Gideon Ngetich Resume" className="px-10 py-4 w-72 bg-red-600 text-center">
                        <span className="flex gap-2">
                            <MdOutlineFileDownload className="text-2xl" />
                            <p className="font-semibold">Download my Resume</p>
                        </span>
                    </a>
                </motion.span>
            </div>

            <motion.div
                id="about"
                className={`h-auto ${theme === 'light' && 'bg-slate-700'} py-10 px-5 flex flex-col w-full`}
                initial={{ opacity: 0, y: 40 }}
                animate={aboutControls}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <span style={{ fontFamily: 'oswald', fontWeight: '600' }} className="px-5 md:px-28 lg:px-28 xl:px-28 2xl:px-28 text-2xl w-full">
                    <p className='border-l-4 border-red-600 px-3 '>ABOUT ME</p>
                </span>
                <div className="flex flex-col-reverse gap-5 lg:flex-row xl:flex-row 2xl:flex-row w-full justify-center items-center pt-10">
                    <div className="w-full md:px-20 lg:w-1/2 text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg pt-10">
                        I am a passionate Full-Stack Developer and Network Engineer with a focus on creating seamless digital experiences and efficient networking solutions. Proficient in technologies like React, Node.js, and MySQL, I specialize in building responsive, scalable web applications, including e-commerce platforms and learning management systems. With certifications like CCNA and HCIA, I also excel in network design and management, delivering tailored solutions for ISPs and other network-dependent businesses. I am driven by innovation and committed to solving real-world problems through technology.                    </div>
                    <div className="flex justify-center items-center w-[300px] md:w-[450px] lg:w-[500px] xl:w-[500px] 2xl:w-[550px]">
                        <img className="profile-pic framed" src={profileImg} alt="Profile Picture" />
                    </div>
                </div>
            </motion.div>

            <div id="proficient" className='py-10'>

                <motion.div
                    animate={proficientControls}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col w-full justify-between p-10 md:px-28 py-10"
                >
                    <span style={{ fontFamily: 'oswald', fontWeight: '600' }} className="px-1 md:px-5 lg:px-5 xl:px-5 2xl:px-5 text-2xl w-full">
                        <p className='border-l-4 border-red-600 px-3 '>PROFICIENT IN:</p>
                    </span>
                    <div className='py-5'>
                        <Tabs aria-label="Tabs with underline" variant="underline">
                            <Tabs.Item active title="Networking" icon={FaNetworkWired}>
                                <div className='flex flex-col gap-6'>
                                    {networkData.map((networkContent, networkIndex) => (
                                        <div key={networkIndex}>
                                            <div className='flex gap-4 justify-start items-center'>
                                                <img className='w-8 h-8 border bg-slate-100 rounded-md' src={networkContent.logo} alt={networkContent.Name} />
                                                <div className='font-bold text-xl '>{networkContent.Name}</div>
                                            </div>

                                            <div className='text-sm'>{networkContent.description}</div>
                                            <div className='flex gap-1'>
                                                {networkContent.category.map((categoryItem, categoryIndex) => (
                                                    <div className={`flex justify-center items-center rounded-3xl px-2 text-center py-1 text-sm border ${theme !== 'dark' ? 'border-slate-700' : 'border-slate-300'}`} key={categoryIndex}>{categoryItem}</div>
                                                ))}
                                            </div>
                                            <div className='text-sm '>Proficiency: {networkContent.Proficiency}</div>
                                            <div className='flex flex-col'>
                                                {networkContent.projects.map((project, projectIndex) => (
                                                    <div className='font-semibold text-sm' key={projectIndex}>{project}</div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tabs.Item>
                            <Tabs.Item active title="Software" icon={FaCode}>
                                <div className='flex flex-col gap-6'>
                                    {softwareData.map((softwareContent, index) => (
                                        <div key={index} className='flex flex-col gap-1'>
                                            <div className='flex gap-4 justify-start items-center'>
                                                <img className='w-8 h-8  rounded-md' src={softwareContent.logo} alt={softwareContent.Name} />
                                                <div className='font-bold text-xl '>{softwareContent.Name}</div>
                                            </div>

                                            <div className='text-sm'>{softwareContent.description}</div>
                                            <div className='flex gap-1'>
                                                {softwareContent.category.map((categoryItem, categoryIndex) => (
                                                    <div className={`flex justify-center items-center rounded-3xl px-2 text-center py-1 text-[12px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm  border ${theme !== 'dark' ? 'border-slate-700' : 'border-slate-300'}`} key={categoryIndex}>{categoryItem}</div>
                                                ))}
                                            </div>
                                            <div className='text-sm '>Proficiency: {softwareContent.Proficiency}</div>
                                            <div className='flex flex-col'>
                                                <span>Projects: </span>
                                                {softwareContent.projects.map((project, projectIndex) => (
                                                    <ul className='font-semibold text-sm list-disc px-7' key={projectIndex}>
                                                        <li>{project}</li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tabs.Item>
                            <Tabs.Item>
                                <span>
                                    <img width="500" height="500" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/500/external-huawei-technologies-company-a-chinese-multinational-technology-provides-telecommunications-equipment-and-consumer-electronics-logo-color-tal-revivo.png" alt="external-huawei-technologies-company-a-chinese-multinational-technology-provides-telecommunications-equipment-and-consumer-electronics-logo-color-tal-revivo" />
                                    <p>Huawei</p>
                                </span>
                            </Tabs.Item>
                        </Tabs>
                    </div>

                </motion.div>
                <div>
                    <motion.div>
                        <Footer />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Home;
