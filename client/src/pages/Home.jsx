import React, { useEffect, useContext } from "react";
import TopNav from "../components/Topnav";
import resume from "../assets/Gideon-Ngetich-Resume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import Typical from "react-typical";
import { motion, useAnimation } from "framer-motion";
import { Tabs } from "flowbite-react";
import { FaNetworkWired, FaCode } from "react-icons/fa";
import Content from "../assets/Content.json";
import { ThemeProvider } from "../components/ThemeContext";
import Footer from "../components/Footer";
import profileImg from "../assets/me.jpg";
import bgVideo from "../assets/video.mp4";
import { TimelineComponet } from "../components/TimeLine";

const Home = () => {
  const aboutControls = useAnimation();
  const proficientControls = useAnimation();
  const theme = useContext(ThemeProvider);

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutControls, proficientControls]);

  const softwareData = Content[0].software;
  const networkData = Content[1].networking;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ===== VIDEO BACKGROUND ===== */}
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

      {/* ===== NAVIGATION ===== */}
      <TopNav />

      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col justify-center gap-5 px-6 md:px-20 lg:px-28 h-screen text-white">
        <motion.span
          style={{ fontFamily: "Prompt", fontWeight: 400 }}
          className="text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello! My name is
        </motion.span>

        <motion.h1
          style={{ fontFamily: "Oswald", fontWeight: 600 }}
          className="text-4xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          GIDEON <span className="text-red-600">NGETICH</span>
        </motion.h1>

        <motion.p
          style={{ fontFamily: "Prompt", fontWeight: 400 }}
          className="text-lg md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I am a{" "}
          <Typical
            steps={["Network Specialist", 2000, "Software Developer", 2000]}
            loop={Infinity}
            wrapper="span"
            className="text-red-600 font-semibold"
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <a
            href={resume}
            download="Gideon-Ngetich-Resume.pdf"
            className="inline-flex items-center gap-2 px-10 py-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            <MdOutlineFileDownload className="text-xl" />
            Download my Resume
          </a>
        </motion.div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <motion.section
        id="about"
        className={`py-16 px-6 md:px-20 lg:px-28 ${
          theme === "light"
            ? "bg-transparent text-white"
            : "bg-transparent text-white"
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={aboutControls}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          style={{ fontFamily: "Oswald", fontWeight: 600 }}
          className="text-2xl md:text-3xl border-l-4 border-red-600 pl-3 mb-10"
        >
          ABOUT ME
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 text-sm md:text-base lg:text-lg">
            I am a versatile Web Developer and Networking Specialist passionate
            about delivering innovative digital solutions and reliable network
            infrastructures. With expertise in designing scalable, responsive
            applications and implementing efficient, secure connectivity
            solutions, I bring a comprehensive approach to every project.
          </div>
          <div className="w-full max-w-md lg:max-w-lg">
            <img
              src={profileImg}
              alt="Gideon Ngetich"
              className="w-full h-auto rounded-lg shadow-xl profile-pic"
            />
          </div>
        </div>
      </motion.section>

      {/* ===== PROFICIENCY SECTION ===== */}
      <section
        id="proficient"
        className="py-16 px-6 md:px-20 lg:px-28 bg-transparent dark:bg-transparent"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={proficientControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            style={{ fontFamily: "Oswald", fontWeight: 600 }}
            className="text-2xl text-white md:text-3xl border-l-4 border-red-600 pl-3 mb-8"
          >
            PROFICIENT IN:
          </h2>

          <Tabs aria-label="Skills Tabs" variant="underline" className="mt-8">
            <Tabs.Item title="Software" icon={FaCode}>
              <div className="space-y-8 grid grid-cols-1 md:grid-cols-2">
                {softwareData.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.logo}
                          alt={item.Name}
                          className="w-8 h-8 rounded-md"
                        />
                        <h3 className="text-xl font-bold text-white">
                          {item.Name}
                        </h3>
                      </div>
                      <p className="text-sm text-white dark:text-white">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.category.map((cat, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-xs text-white rounded-full border ${
                              theme !== "dark"
                                ? "border-gray-700"
                                : "border-gray-300"
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm font-medium text-white">
                        Proficiency: {item.Proficiency}
                      </p>
                      <div>
                        <span className="font-medium text-white">
                          Projects:
                        </span>
                        <ul className="list-disc pl-6 mt-1">
                          {item.projects.map((proj, i) => (
                            <li
                              key={i}
                              className="text-sm font-semibold text-white"
                            >
                              {proj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                ))}
              </div>
            </Tabs.Item>

            {/* NETWORKING TAB */}
            <Tabs.Item title="Networking" icon={FaNetworkWired}>
              <div className="space-y-8 grid grid-cols-1 md:grid-cols-2">
                {networkData.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.logo}
                        alt={item.Name}
                        className="w-8 h-8"
                      />
                      <h3 className="text-xl font-bold text-white">
                        {item.Name}
                      </h3>
                    </div>
                    <p className="text-sm text-white dark:text-white">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.category.map((cat, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs rounded-full border text-white ${
                            theme !== "dark"
                              ? "border-gray-700"
                              : "border-gray-300"
                          }`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-white">
                      Proficiency: {item.Proficiency}
                    </p>
                    <div className="text-sm text-white">
                      {item.projects.map((proj, i) => (
                        <div key={i} className="font-semibold">
                          • {proj}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Item>

            {/* SOFTWARE TAB */}
          </Tabs>
        </motion.div>
      </section>
      <motion.section className={`py-16 px-6 md:px-20 lg:px-28 ${
          theme === "light"
            ? "bg-transparent text-white"
            : "bg-transparent text-white"
        }`}>
            <h2
            style={{ fontFamily: "Oswald", fontWeight: 600 }}
            className="text-2xl text-white md:text-3xl border-l-4 border-red-600 pl-3 mb-8"
          >
            Experience:
          </h2>
            <TimelineComponet />
      </motion.section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default Home;
