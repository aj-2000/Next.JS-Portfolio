import { useState } from "react";
import { motion } from "framer-motion";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
export default function Index() {

  const [xHome, setXHome] = useState("0%");
  const [yHome, setYHome] = useState("0%");
  const [xContactMe, setXContactMe] = useState("100%");
  const [yContactMe, setYContactMe] = useState("0%");
  const [xProjects, setXProjects] = useState("0%");
  const [yProjects, setYProjects] = useState("100%");
  const [xAboutMe, setXAboutMe] = useState("-100%");
  const [yAboutMe, setYAboutMe] = useState("0%");
  const [xExperience, setXExperience] = useState("0%");
  const [yExperience, setYExperience] = useState("-100%");

  function homeToContactMeHandler(event) {
    setXHome("-100%");
    setYHome("0%");
    setXContactMe("0%");
    setYContactMe("0%");
  }
  function contactMeToHomeHandler(event) {
    setXHome("0%");
    setYHome("0%");
    setXContactMe("100%");
    setYContactMe("0%");
  }

  function homeToProjectsHandler(event) {
    setXHome("0%");
    setYHome("-100%");
    setXProjects("0%");
    setYProjects("0%");
  }
  function projectsToHomeHandler(event) {
    setXHome("0%");
    setYHome("0%");
    setXProjects("0%");
    setYProjects("100%");
  }

  function homeToAboutMeHandler(event) {
    setXHome("100%");
    setYHome("0%");
    setXAboutMe("0%");
    setYAboutMe("0%");
  }
  function aboutMeToHomeHandler(event) {
    setXHome("0%");
    setYHome("0%");
    setXAboutMe("100%");
    setYAboutMe("0%");
  }

  function homeToExperienceHandler(event) {
    setXHome("0%");
    setYHome("100%");
    setXExperience("0%");
    setYExperience("0%");
  }
  function experienceToHomeHandler(event) {
    setXHome("0%");
    setYHome("0%");
    setXExperience("");
    setYExperience("-100%");
  }

  return (
    <div className="">

      <motion.div
        animate={{ x: xHome, y: yHome }}
        initial={{ x: xHome, y: yHome }}
        className={`h-screen w-screen fixed overflow-scroll bg-dark`}
      >
        {xHome === "0%" && yHome === "0%" && (
          <Home
            homeToContactMeHandler={homeToContactMeHandler}
            homeToProjectsHandler={homeToProjectsHandler}
            homeToAboutMeHandler={homeToAboutMeHandler}
            homeToExperienceHandler={homeToExperienceHandler}
          />
        )}
      </motion.div>

      <motion.div
        animate={{ x: xContactMe, y: yContactMe }}
        initial={{ x: xContactMe, y: yContactMe }}
        className={`w-screen h-screen fixed overflow-scroll bg-white`}
      >
        {xContactMe === "0%" && yContactMe === "0%" && (
          <ContactMe
            contactMeToHomeHandler={contactMeToHomeHandler}
            xContactMe={xContactMe}
            yContactMe={yContactMe}
          />
        )}
      </motion.div>

      <motion.div
        animate={{ x: xProjects, y: yProjects }}
        initial={{ x: xProjects, y: yProjects }}
        className={`h-screen w-screen fixed overflow-scroll bg-white`}
      >
        {xProjects === "0%" && yProjects === "0%" && (
          <Projects projectsToHomeHandler={projectsToHomeHandler} />
        )}
      </motion.div>

      <motion.div
        animate={{ x: xAboutMe, y: yAboutMe }}
        initial={{ x: xAboutMe, y: yAboutMe }}
        className={`h-screen w-screen fixed overflow-scroll bg-white`}
      >
        {xAboutMe === "0%" && yAboutMe === "0%" && (
          <AboutMe aboutMeToHomeHandler={aboutMeToHomeHandler}/>
        )}
      </motion.div>

      <motion.div
        animate={{ x: xExperience, y: yExperience }}
        initial={{ x: xExperience, y: yExperience }}
        className={`h-screen w-screen fixed overflow-scroll bg-white`}
      >
        {xExperience === "0%" && yExperience === "0%" && (
          <Experience experienceToHomeHandler={experienceToHomeHandler}/>
        )}
      </motion.div>
    </div>
  );
}
