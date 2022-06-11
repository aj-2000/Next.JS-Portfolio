import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  // const [homeZIndex, setHomeZIndex] = useState(10);
  // const [contactMeZIndex, setContactMeZIndex] = useState(0);
  // const [projectsZIndex, setProjectsZIndex] = useState(0);
  // const [experienceZIndex, setExperienceZIndex] = useState(0);
  // const [aboutMeZIndex, setAboutMeZIndex] = useState(0);

  const [xHome, setXHome] = useState("0%");
  const [yHome, setYHome] = useState("0%");
  const [xContactMe, setXContactMe] = useState("100%");
  const [yContactMe, setYContactMe] = useState("0%");
  const [xProjects, setXProjects] = useState("0%");
  const [yProjects, setYProjects] = useState("100%");

  function homeToContactMeHandler(event) {
    setXHome('-100%')
    setYHome('0%')
    setXContactMe('0%')
    setYContactMe('0%')

  }
  function contactMeToHomeHandler(event) {
    setXHome('0%')
    setYHome('0%')
    setXContactMe('100%')
    setYContactMe('0%')

  }

  function homeToProjectsHandler(event) {
    setXHome('0%')
    setYHome('-100%')
    setXProjects('0%')
    setYProjects('0%')
  }
  function ProjectsToHomeHandler(event) {
    setXHome('0%')
    setYHome('0%')
    setXProjects('0%')
    setYProjects('100%')
  }
  

  function setHomePosition() {
    setX("-100%");
    setY("0%");
    setX1("0%");
    setY1("0%");
  }

  return (
    <>
      <motion.div
        animate={{ x: xHome, y: yHome }}
        initial={{ x: xHome, y: yHome }}
        className={`h-screen w-screen bg-white fixed`}
      >
        {/* Up arrow */}
        <AiOutlineArrowUp className="h-[15vh] w-[15vh] absolute left-[50vw] translate-x-[-50%]  drop-shadow-2xl" />
        {/* Down arrow */}
        <AiOutlineArrowDown
          onClick={homeToProjectsHandler}
          className="h-[15vh] w-[15vh] absolute left-[50vw] top-[100vh] translate-x-[-50%] translate-y-[-100%] drop-shadow-2xl"
        />
        {/* left arrow */}
        <AiOutlineArrowLeft className="h-[25vh] w-[25vh] absolute top-[50vh] translate-y-[-50%] drop-shadow-2xl" />
        {/* right arrow */}
        <AiOutlineArrowRight
          onClick={homeToContactMeHandler}
          className="h-[25vh] w-[25vh] absolute top-[50vh] translate-y-[-50%] left-[100%] translate-x-[-100%] drop-shadow-2xl"
        />

        {/* Image */}
        <img
          className="h-[35vh] w-[35vh] rounded-full absolute top-[50vh] left-[50vw] translate-y-[-50%] translate-x-[-50%] drop-shadow-2xl"
          src="https://5.imimg.com/data5/VW/LH/GH/SELLER-4746724/3d-wallpaper-500x500.jpg"
          alt="Ajay Sharma Profile Image"
        />
      </motion.div>

      <motion.div
        animate={{ x: xContactMe, y: yContactMe }}
        initial={{ x: xContactMe, y: yContactMe }}
        className={`h-screen w-screen fixed bg-white`}
      >
        ContactMe <button onClick={contactMeToHomeHandler}>Back to Home</button>
      </motion.div>

      <motion.div
        animate={{ x: xProjects, y: yProjects }}
        initial={{ x: xProjects, y: yProjects }}
        className={`h-screen w-screen fixed bg-white`}
      >
        Projects <button onClick={ProjectsToHomeHandler}>Back to Home</button>
      </motion.div>
    </>
  );
}
