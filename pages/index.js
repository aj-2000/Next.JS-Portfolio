import { useState } from "react";
import { motion } from "framer-motion";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";
import Home from "../components/Home";
export default function Index() {

  const [xHome, setXHome] = useState("0%");
  const [yHome, setYHome] = useState("0%");
  const [xContactMe, setXContactMe] = useState("100%");
  const [yContactMe, setYContactMe] = useState("0%");
  const [xProjects, setXProjects] = useState("0%");
  const [yProjects, setYProjects] = useState("100%");

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
    </div>
  );
}
