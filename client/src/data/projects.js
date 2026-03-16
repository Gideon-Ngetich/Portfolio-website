import {
  kristec,
  kristecShop,
  theCube,
  theCubeAcademy,
  cyden,
  moiben,
  savor,
  ajaytunner,
  assuredBrokers,
  cubelms,
  lisheapp,
  devkit,
  solbyerp,
  lms,
  solbyweb,
  tenantplus,
  accounting,
  agrimind
} from "../assets";

export const projects = [
  {
    name: "Solby ERP",
    thumbNail: solbyerp,
    description:
      "Enterprise resource planning platform designed to support B2C, B2B, and retail operations through integrated modules including POS, CRM, HR & payroll, inventory management, accounting, invoicing, and advanced analytics to streamline business processes and improve operational efficiency.",
    githubLink: "",
    siteLink: "https://erp.solby.io", // (Note: Corrected link if different from Cyden's)
    tags: ["Web", "NestJs", "Angular", "MongoDB", "TailwindCSS", "Typescript"],
    id: "ERP",
  },
  {
    name: "Solby Accounting",
    thumbNail: accounting,
    description:
      "A financial management system designed to integrate with ERP workflows, providing tools for expense management, budgeting, ledger operations, asset tracking, invoicing, and analytical reporting to streamline accounting processes across business operations.",
    githubLink: "",
    siteLink: "https://accounting.solby.io", // (Note: Corrected link if different from Cyden's)
    tags: ["Web", "NestJs", "Angular", "MongoDB", "TailwindCSS", "Typescript"],
    id: "accounting",
  },
  {
    name: "Assured Insurance Brokers",
    thumbNail: assuredBrokers,
    description:
      "A website for Moiben Technical Training Institute, offering course information and online applications for prospective students.",
    githubLink: "",
    siteLink: "https://assuredbrokers.org/", // (Note: Corrected link if different from Cyden's)
    tags: ["Web"],
    id: "assured-brokers",
  },
  {
    name: "Lancola Institute LMS",
    thumbNail: lms,
    description:
      "A Learning Management System designed for Lancola Innovation Institute to deliver online courses to students and provide corporate partners with structured learning resources for employee training and executive development.",
    githubLink: "",
    siteLink: "https://students.lancolainstitute.ac.ke",
    tags: ["NextJs", "Web", "MongoDB", "TailwindCSS", "Typescript", "NestJs"],
    id: "lancola-LMS",
  },
  {
    name: "Solby Website",
    thumbNail: solbyweb,
    description:
      "A website for Solby ERP, providing a platform for users to access various business management tools and resources.",
    githubLink: "",
    siteLink: "https://solby.io",
    tags: ["React", "Web", "TailwindCSS", "Typescript"],
    id: "solby-website",
  },
  {
    name: "LisheApp",
    thumbNail: lisheapp,
    description:
      "An AI web based application that enables dairy farmers manage their dairy cattle by monitoring and recommending the best feed for the animal",
    githubLink: "",
    siteLink: "https://lisheapp.tech/",
    tags: ["React", "Web", "MySQL", "PHP", "TailwindCSS", "Typescript"],
    id: "lisheapp",
  },
  {
    name: "TenantPlus",
    thumbNail: tenantplus,
    description:
      "A property management platform that helps landlords and tenants manage rental properties and lease agreements.",
    githubLink: "",
    siteLink: "https://app.tenantplus.co.ke/",
    tags: ["React", "Web", "MySQL", "TailwindCSS", "Typescript"],
    id: "tenantplus",
  },
  {
    name: "Savor Restaurant",
    thumbNail: savor,
    description:
      "A restaurant website showcasing menus and enabling online orders. Users can log in, select meals, and pay via M-Pesa for a streamlined dining experience.",
    githubLink: "https://github.com/Gideon-Ngetich/Savor_Restaurant.git",
    siteLink: "https://savor-restaurant.vercel.app/",
    tags: ["React", "Web", "MongoDB", "NodeJs", "TailwindCSS", "ExpressJs"],
    id: "savor-restaurant",
  },
  {
    name: "The Cube Academy",
    thumbNail: theCubeAcademy,
    description:
      "An educational platform for tech enthusiasts to learn and enhance their skills. Users can explore courses and sign up directly through the website.",
    githubLink: "",
    siteLink: "https://learning.the-cube.co.ke/",
    tags: ["NextJs", "Web", "SCSS", "JSON"],
    id: "the-cube-academy",
  },
  {
    name: "The Cube Hub",
    thumbNail: theCube,
    description:
      "A startup incubator for tech innovators. The website provides information about the hub and allows users to enroll in courses.",
    githubLink: "",
    siteLink: "https://the-cube.co.ke/",
    tags: ["React", "Web", "TailwindCSS", "JSON"],
    id: "the-cube-hub",
  },
  {
    name: "PayHero Devkit",
    thumbNail: devkit,
    description:
      "A lightweight Node.js SDK for PayHero APIs, enabling developers to initiate STK Push payments, poll transaction statuses, and check wallet balances with a focus on simplicity and webhook-free workflows. ",
    githubLink: "https://github.com/Gideon-Ngetich/PayHero-devkit.git",
    siteLink: "https://www.npmjs.com/package/payhero-devkit",
    tags: ["NPM", "NodeJS", "TypeScript", "FinTech"],
    id: "devkit",
  },
  {
    name: "Cyden Distributors",
    thumbNail: cyden,
    description:
      "The leading distributor of alcoholic beverages in Eldoret. The site displays their catalog and redirects clients to an external platform for orders.",
    githubLink: "",
    siteLink: "https://cyden-distributors.vercel.app/",
    tags: ["React", "Web", "TailwindCSS"],
    id: "cyden-distributors",
  },
  {
    name: "Moiben TVC",
    thumbNail: moiben,
    description:
      "A website for Moiben Technical Training Institute, offering course information and online applications for prospective students.",
    githubLink: "",
    siteLink: "https://moiben-tvc.vercel.app/", // (Note: Corrected link if different from Cyden's)
    tags: ["React", "Web", "TailwindCSS"],
    id: "moiben-tvc",
  },
  {
    name: "AjayTuner",
    thumbNail: ajaytunner,
    description:
      "A web-based guitar tuner that uses your device’s microphone to detect string frequencies and indicates whether they are in tune.",
    githubLink: "https://github.com/Gideon-Ngetich/Guitar-Tuning-App.git",
    siteLink: "https://ajaytuner.netlify.app/",
    tags: ["JavaScript", "Web", "Firebase", "HTML", "TailwindCSS"],
    id: "ajay-tuner",
  },
  {
    name: "Agrimind",
    thumbNail: agrimind,
    description:
      "Agrimind360 is a fully integrated AgriTech ecosystem combining intelligent livestock management, digital marketplaces, automated greenhouses, and farmer wellbeing solutions.",
    githubLink: "",
    siteLink: "https://agrimind360.vercel.app/",
    tags: ["React", "Web", "TailwindCSS"],
    id: "agrimind",
  },
];
