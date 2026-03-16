import React, { useContext } from 'react'
import TopNav from '../components/Topnav'
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import ThemeContext from '../components/ThemeContext';
import Footer from '../components/Footer';
import me from "../assets/me.jpeg"
import bgVideo from "../assets/video.mp4";
import { blogs, getBlogBySlug } from '../data/blogs';

const BlogContent = () => {
    const { slug } = useParams();
    const { theme } = useContext(ThemeContext)
    const blog = getBlogBySlug(slug) || blogs[0];

    if (!blog) {
        return null;
    }

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
                <div style={{ fontFamily: 'barlow' }} className='text-2xl text-white lg:text-4xl font-semibold py-4'>{blog.title}</div>
                <div className='flex justify-between py-5'>
                    <div className='flex gap-3 justify-center items-center'>
                        <span className='rounded-full'>
                            <img className='rounded-full w-12 h-12 ' src={me} alt="" />
                        </span>
                        <span className='font-semibold text-sm md:text-md lg:text-md xl:text-md 2xl:text-md text-white'>Gideon Ngetich</span>
                    </div>
                    <span className='flex justify-center items-center gap-2 font-semibold text-sm md:text-md lg:text-md xl:text-md 2xl:text-md text-white'><FaRegCalendarAlt />  {blog.date}</span>
                </div>
                <div>
                    <ul className='flex gap-1 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3 text-sm md:text-md lg:text-md xl:text-md 2xl:text-md'>
                        {blog.tags.map((tag, index) => (
                            <li key={index} className='border border-slate-700 rounded-3xl p-2 text-white'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className={`paragraph py-5 text-md ${theme === "light" && 'text-white'} `}>
                    <div className=''>
                        <p className='text-md'>{blog.content.intro}</p>

                        {blog.content.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <h3 className='font-bold py-2 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>
                                    {section.heading}
                                </h3>

                                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                                    <p key={paragraphIndex} className='text-md py-1'>{paragraph}</p>
                                ))}

                                {section.bullets && section.bullets.length > 0 && (
                                    <ul className='list-disc px-10 py-1'>
                                        {section.bullets.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        <div className='py-6'>
                            <Link to="/blogs" className='text-blue-400 hover:underline'>
                                ← Back to all blogs
                            </Link>
                        </div>
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