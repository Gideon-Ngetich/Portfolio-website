import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export function TimelineComponet() {
  const data = [
    {
      period: "Jan 2026 – Present",
      role: "Software Engineer and Instructor (Full-time)",
      company: "Lancola Tech Company Ltd",
      description:
        "Develop in-house applications using Angular, TypeScript, and Node.js. Collaborate with senior developers to deliver production-ready projects. Additionally, teach software development courses including full-stack development, as well as coding and robotics for kids, driving both technical excellence and the next generation of developers.",
    },
    {
      period: "Dec 2024 – Dec 2025",
      role: "Software Engineer (Internship)",
      company: "Lancola Tech Company Ltd",
      description:
        "Develop in-house applications using Angular, TypeScript, and Node.js. Learned Angular from scratch, collaborated with senior developers, and delivered multiple production projects accelerating technical and professional growth.",
    },
    {
      period: "Aug 2025 – Dec 2025",
      role: "Lead Fiber Technician (Part-time)",
      company: "Tanzunet Solutions",
      description:
        "At Kristec Networks, I was responsible for designing, deploying, and maintaining wireless and fiber network infrastructures for residential and enterprise clients. My work involved configuring MikroTik routers, CPE devices (TP-Link, Ubiquiti, Comfast, Tenda), and managing hotspot and PPPoE user setups. I also performed troubleshooting, network monitoring, and bandwidth optimization to ensure stable client connectivity. Additionally, I supported the technical team in client installations, network expansion, and infrastructure upgrades.",
    },
    {
      period: "June 2023 – Nov 2025",
      role: "Networking and Cybersecurity Assistant Instructor (Part-time)",
      company: "Cisco Academy - Kabarak University",
      description:
        "Guided students through CCNA certification, delivering hands-on labs and theory sessions. Organized practical classes on routing, switching, and security fundamentals helping learners build real-world networking skills and pass their exams with confidence.",
    },
    {
      period: "Oct 2023 – Jul 2025",
      role: "Network Technician and Software Developer (Internship)",
      company: "Kristec Developers",
      description:
        "As a Full Stack Developer at Kristec Networks, I developed internal web applications to streamline network and client management. I built systems for monitoring router performance, managing hotspot and PPPoE users, and integrating Daraja API for automated M-Pesa payments. Using the MERN stack (React, Node.js, Express, and MongoDB/MySQL), I created responsive admin dashboards and RESTful APIs that improved operational efficiency and client experience.",
    },
  ];
  return (
    <Timeline>
      {data.map((info, index) => (
        <TimelineItem key={index}>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className="text-white">
              {info.period}
            </TimelineTime>
            <TimelineTitle className="text-blue-800">
              {info.role}
            </TimelineTitle>
            <p className="text-white">{info.company}</p>
            <TimelineBody className="text-white">
              {info.description}
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      ))}

      {/* <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime>September 2023 - Present</TimelineTime>
          <TimelineTitle>Kabarak</TimelineTitle>
          <TimelineBody>
            Guided students through CCNA certification, delivering hands-on labs and theory sessions. Organized practical classes on routing, switching, and security fundamentals helping learners build real-world networking skills and pass their exams with confidence.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
