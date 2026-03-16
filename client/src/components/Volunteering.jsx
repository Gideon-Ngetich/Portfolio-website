import React from "react";

const volunteeringData = [
  {
    period: "November 2024 - October 2025",
    role: "Cyber Security Lead",
    organization: "Google Developer Groups on Campus",
    description:
      "Support security awareness sessions, mentor students on cybersecurity basics, and help organize technical learning activities on safe digital practices.",
  },
  {
    period: "June 2023 - June 2025",
    role: "Huawei Campus Ambassador",
    organization: "Huawei ICT Academy - Kabarak University",
    description:
      "Promoted Huawei's ICT Academy programs, organized workshops on Huawei technologies, and facilitated student engagement with Huawei's educational resources to enhance learning opportunities in ICT.",
  },
];

const Volunteering = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-28 text-white">
      <h2
        style={{ fontFamily: "Oswald", fontWeight: 600 }}
        className="text-2xl md:text-3xl border-l-4 border-red-600 pl-3 mb-8"
      >
        Volunteering
      </h2>

      <div className="space-y-6">
        {volunteeringData.map((item, index) => (
          <div key={index} className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-sm text-gray-200">{item.period}</p>
            <h3 className="text-lg font-semibold mt-1">{item.role}</h3>
            <p className="text-sm font-medium text-red-300">{item.organization}</p>
            <p className="text-sm text-gray-100 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteering;
