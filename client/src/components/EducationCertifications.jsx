import React from "react";

const educationData = [
  {
    period: "September 2022 - December 2026 (Awaiting Graduation)",
    institution: "Kabarak University",
    program: "BSc in Information Technology",
    highlights: [
      "Specialized in software engineering and networking.",
      "Built academic and personal full-stack projects.",
    ],
  },
  {
    period: "2018 - 2022",
    institution: "Secondary Education",
    program: "KCSE",
    highlights: [
      "Developed early passion for technology and problem-solving.",
    ],
  },
];

const certificationData = [
    {
    period: "2025",
    name: "GDGOC Cyber security Lead",
    issuer: "Google Developer Groups",
    details: "",
  },
  {
    period: "2025",
    name: "Fiber Optic Installation and Maintenance",
    issuer: "FIber Mtaani Training Program",
    details: "Comprehensive training in fiber optic installation and maintenance techniques, including splicing, testing, and troubleshooting to ensure reliable network connectivity.",
  },
  {
    period: "2025",
    name: "Proffessional Foundation",
    issuer: "ALX Africa",
    details: "Comprehensive training in foundational professional skills, including communication, teamwork, problem-solving, and time management to prepare for success in the workplace.",
  },
  {
    period: "2024",
    name: "Software Development",
    issuer: "PLP Africa",
    details: "Comprehensive training in software development principles, including programming languages, software design, and development methodologies to prepare for a career in software engineering.",
  },
  {
    period: "2024",
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    details: "Comprehensive training in API fundamentals, including RESTful API design, testing, and documentation using Postman to prepare for a career in API development and testing.",
  },
  {
    period: "2023",
    name: "CCNA - Network Security",
    issuer: "Cisco Networking Academy",
    details: "Comprehensive training in network security principles, including threat mitigation, secure network design, and implementation of security protocols to protect against cyber threats.",
  },
  {
    period: "2023",
    name: "CCNA - Introduction to Networks",
    issuer: "Cisco Networking Academy",
    details: "Fundamental networking concepts, including network architecture, protocols, and troubleshooting techniques to build a strong foundation in computer networking.",
  },
  {
    period: "2023",
    name: "CCNA - Routing, Switching and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    details: "In-depth training on routing and switching technologies, wireless networking, and network troubleshooting to prepare for the CCNA certification exam.",
  },
  {
    period: "2023",
    name: "CCNA - Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    details: "Advanced training in enterprise networking, security, and automation technologies to prepare for the CCNA certification exam and enhance skills in modern network management.",
  },
  {
    period: "2023",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    details: "Fundamental cybersecurity concepts, including threat landscape, attack vectors, and basic security measures to protect against cyber threats.",
  },
  {
    period: "2023",
    name: "HCIA - Data Communication",
    issuer: "Huawei ICT Academy",
    details: "Comprehensive training in data communication technologies, including network architecture, protocols, and troubleshooting techniques to build a strong foundation in computer networking.",
  },
  {
    period: "2023",
    name: "Cloud Security",
    issuer: "Cloud Security Alliance",
    details: "Comprehensive training in cloud security principles, including threat mitigation, secure cloud architecture design, and implementation of security controls to protect against cyber threats in cloud environments.",
  },

];

const EducationCertifications = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-28 text-white">
      <h2
            style={{ fontFamily: "Oswald", fontWeight: 600 }}
            className="text-2xl text-white md:text-3xl border-l-4 border-red-600 pl-3 mb-8"
          >
            Education & Certifications:
          </h2>

      <div className="space-y-12">
        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-5">Education</h3>

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <div key={index} className="pl-1">
                <p className="text-sm text-gray-200">{item.period}</p>
                <h4 className="text-lg font-semibold">{item.institution}</h4>
                <p className="text-sm font-medium text-red-300">{item.program}</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-100">
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-5">Certifications</h3>

          <div className="space-y-6">
            {certificationData.map((item, index) => (
              <div key={index} className="pl-1">
                <p className="text-sm text-gray-200">{item.period}</p>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm font-medium text-red-300">{item.issuer}</p>
                <p className="text-sm text-gray-100 mt-1">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
