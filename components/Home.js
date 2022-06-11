import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
} from "react-icons/ai";
const Home = (props) => {
  return (
    <>
      {/* Up arrow */}
      <AiOutlineArrowUp className="h-[15vh] w-[15vh] absolute left-[50vw] translate-x-[-50%]  drop-shadow-2xl" />
      {/* Down arrow */}
      <AiOutlineArrowDown
        onClick={props.homeToProjectsHandler}
        className="h-[15vh] w-[15vh] absolute left-[50vw] top-[100vh] translate-x-[-50%] translate-y-[-100%] drop-shadow-2xl"
      />
      {/* left arrow */}
      <AiOutlineArrowLeft className="h-[25vh] w-[25vh] absolute top-[50vh] translate-y-[-50%] drop-shadow-2xl" />
      {/* right arrow */}
      <AiOutlineArrowRight
        onClick={props.homeToContactMeHandler}
        className="h-[25vh] w-[25vh] absolute top-[50vh] translate-y-[-50%] left-[100%] translate-x-[-100%] drop-shadow-2xl"
      />

      {/* Image */}
      <img
        className="h-[35vh] w-[35vh] rounded-full absolute top-[50vh] left-[50vw] translate-y-[-50%] translate-x-[-50%] drop-shadow-2xl"
        src="https://avatars.githubusercontent.com/u/97158497"
        alt="Ajay Sharma Profile Image"
      />
    </>
  );
};

export default Home;
