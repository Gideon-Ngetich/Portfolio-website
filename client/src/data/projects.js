import { kristec, kristecShop, theCube, theCubeAcademy, cyden, moiben, savor, ajaytunner } from "../assets";

export const projects = [
    {
        name: 'AjayTuner',
        thumbNail: ajaytunner,
        description: 'A web-based guitar tuner that uses your device’s microphone to detect string frequencies and indicates whether they are in tune.',
        githubLink: 'https://github.com/Gideon-Ngetich/Guitar-Tuning-App.git',
        siteLink: 'https://ajaytuner.netlify.app/',
        tags: [
            "JavaScript",
            "Web",
            "Firebase",
            "HTML",
            "TailwindCSS"
        ],
        id: 'ajay-tuner'
    },
    {
        name: 'Savor Restaurant',
        thumbNail: savor,
        description: 'A restaurant website showcasing menus and enabling online orders. Users can log in, select meals, and pay via M-Pesa for a streamlined dining experience.',
        githubLink: 'https://github.com/Gideon-Ngetich/Savor_Restaurant.git',
        siteLink: 'https://savor-restaurant.vercel.app/',
        tags: [
            "React",
            "Web",
            "MongoDB",
            "NodeJs",
            "TailwindCSS",
            "ExpressJs"
        ],
        id: 'savor-restaurant'
    },
    {
        name: 'The Cube Academy',
        thumbNail: theCubeAcademy,
        description: 'An educational platform for tech enthusiasts to learn and enhance their skills. Users can explore courses and sign up directly through the website.',
        githubLink: '',
        siteLink: 'https://learning.the-cube.co.ke/',
        tags: [
            "NextJs",
            "Web",
            "SCSS",
            "JSON",
        ],
        id: 'the-cube-academy'
    },
    {
        name: 'The Cube Hub',
        thumbNail: theCube,
        description: 'A startup incubator for tech innovators. The website provides information about the hub and allows users to enroll in courses.',
        githubLink: '',
        siteLink: 'https://the-cube.co.ke/',
        tags: [
            "React",
            "Web",
            "TailwindCSS",
            "JSON",
        ],
        id: 'the-cube-hub'
    },
    {
        name: 'Cyden Distributors',
        thumbNail: cyden,
        description: 'The leading distributor of alcoholic beverages in Eldoret. The site displays their catalog and redirects clients to an external platform for orders.',
        githubLink: '',
        siteLink: 'https://cyden-distributors.vercel.app/',
        tags: [
            "React",
            "Web",
            "TailwindCSS",
        ],
        id: 'cyden-distributors'
    },
    {
        name: 'Moiben TVC',
        thumbNail: moiben,
        description: 'A website for Moiben Technical Training Institute, offering course information and online applications for prospective students.',
        githubLink: '',
        siteLink: 'https://moiben-tvc.vercel.app/', // (Note: Corrected link if different from Cyden's)
        tags: [
            "React",
            "Web",
            "TailwindCSS",
        ],
        id: 'moiben-tvc'
    },
    {
        name: 'Kristec',
        thumbNail: kristec,
        description: 'An Internet Service Provider (ISP) offering connectivity solutions. The website serves as a portal for client services.',
        githubLink: '',
        siteLink: 'https://dev.kristec.co.ke/',
        tags: [
            "React",
            "Web",
            "TailwindCSS",
            "mySQL",
            "NodeJs"
        ],
        id: 'kristec'
    },
    {
        name: 'Kristec Shop',
        thumbNail: kristecShop,
        description: 'An e-commerce platform for Kristec ISP, allowing clients to purchase internet-related products and services.',
        githubLink: '',
        siteLink: 'https://shop.kristec.co.ke/',
        tags: [
            "React",
            "Web",
            "TailwindCSS",
            "mySQL",
            "NodeJs"
        ],
        id: 'kristec-shop'
    }
];