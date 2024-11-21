import { React, useEffect, useContext, useState } from 'react'
import TopNav from '../components/Topnav'
import { FaRegCalendarAlt } from "react-icons/fa";
import ThemeContext from '../components/ThemeContext';
import Footer from '../components/Footer';

const BlogContent = () => {

    const img = 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg';
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`flex flex-col justify-center items-center ${theme === 'light' && 'bg-slate-100'}`}>
            <TopNav />
            <div className={`md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 px-5 my-10`}>
                <div style={{ fontFamily: 'barlow' }} className='text-2xl lg:text-4xl font-semibold py-4'>Cisco 2911 Site-to-Site VPN Configuration</div>
                <div className='flex justify-between py-5'>
                    <div className='flex gap-3 justify-center items-center'>
                        <span className='rounded-full'>
                            <img className='rounded-full w-12 h-12 ' src={img} alt="" />
                        </span>
                        <span className='font-semibold text-sm md:text-md lg:text-md xl:text-md 2xl:text-md'>Gideon Ngetich</span>
                    </div>
                    <span className='flex justify-center items-center gap-2 font-semibold text-sm md:text-md lg:text-md xl:text-md 2xl:text-md'><FaRegCalendarAlt />  May, 29th 2024</span>
                </div>
                <div>
                    <ul className='flex gap-3 text-sm md:text-md lg:text-md xl:text-md 2xl:text-md'>
                        <li className='border border-slate-700 rounded-3xl p-2'>Networks</li>
                        <li className='border border-slate-700 rounded-3xl p-2'>VPN</li>
                    </ul>
                </div>
                <div className={`paragraph py-5 text-md ${theme === "light" && 'text-slate-700'} `}>
                    <p>NVIDIA today announced that xAI’s Colossus supercomputer cluster comprising 100,000 NVIDIA Hopper GPUs in Memphis, Tennessee, achieved this massive scale by using the NVIDIA Spectrum-X™ Ethernet networking platform, which is designed to deliver superior performance to multi-tenant, hyperscale AI factories using standards-based Ethernet, for its Remote Direct Memory Access (RDMA) network.

                        Colossus, the world’s largest AI supercomputer, is being used to train xAI’s Grok family of large language models, with chatbots offered as a feature for X Premium subscribers. xAI is in the process of doubling the size of Colossus to a combined total of 200,000 NVIDIA Hopper GPUs.

                        The supporting facility and state-of-the-art supercomputer was built by xAI and NVIDIA in just 122 days, instead of the typical timeframe for systems of this size that can take many months to years. It took 19 days from the time the first rack rolled onto the floor until training began.

                        While training the extremely large Grok model, Colossus achieves unprecedented network performance. Across all three tiers of the network fabric, the system has experienced zero application latency degradation or packet loss due to flow collisions. It has maintained 95% data throughput enabled by Spectrum-X congestion control.

                        This level of performance cannot be achieved at scale with standard Ethernet, which creates thousands of flow collisions while delivering only 60% data throughput.

                        “AI is becoming mission-critical and requires increased performance, security, scalability and cost-efficiency,” said Gilad Shainer, senior vice president of networking at NVIDIA. “The NVIDIA Spectrum-X Ethernet networking platform is designed to provide innovators such as xAI with faster processing, analysis and execution of AI workloads, and in turn accelerates the development, deployment and time to market of AI solutions.”

                        “Colossus is the most powerful training system in the world,” said Elon Musk on X. “Nice work by xAI team, NVIDIA and our many partners/suppliers.”

                        “xAI has built the <img src={img} alt="" />world’s largest, most-powerful supercomputer,” said a spokesperson for xAI. “NVIDIA’s Hopper GPUs and Spectrum-X allow us to push the boundaries of training AI models at a massive-scale, creating a super-accelerated and optimized AI factory based on the Ethernet standard.”

                        At the heart of the Spectrum-X platform is the Spectrum SN5600 Ethernet switch, which supports port speeds of up to 800Gb/s and is based on the Spectrum-4 switch ASIC. xAI chose to pair the Spectrum-X SN5600 switch with NVIDIA BlueField-3® SuperNICs for unprecedented performance.

                        Spectrum-X Ethernet networking for AI brings advanced features that deliver highly effective and scalable bandwidth with low latency and short tail latency, previously exclusive to InfiniBand. These features include adaptive routing with NVIDIA Direct Data Placement technology, congestion control, as well as enhanced AI fabric visibility and performance isolation — all key requirements for multi-tenant generative AI clouds and large enterprise environments.
                        <img src={img} alt="" />
                        </p>
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default BlogContent