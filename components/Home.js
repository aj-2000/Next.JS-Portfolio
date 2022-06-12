import React from "react";
import dynamic from "next/dynamic";
const Typed = dynamic(() => import("react-typed"));
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import {
  SiCodeforces,
  SiGithub,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiMaildotru,
} from "react-icons/si";
const Home = (props) => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <div className="absolute w-screen h-screen">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#353353",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      </div>
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
      {/* INTRO */}
      <div className="grid justify-items-center	gap-6 absolute top-[50vh] left-[50vw] translate-y-[-50%] translate-x-[-50%]">
        <img
          className="h-[20vh] w-[20vh] rounded-full  drop-shadow-2xl"
          src="/images/avatar-1.svg"
          alt="Ajay Sharma Profile Image"
        />
        <h1 className="text-white text-center text-4xl font-bold">
          Ajay Sharma
        </h1>
        <div className="text-white text-center text-xl font-light">
          I&apos;m a{" "}
          <Typed
            strings={[
              "Front-End developer",
              "Back-End developer",
              "React.JS / Next.JS Developer",
              "Valorant Lover",
            ]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </div>
        <div className="gap-6 text-white text-center text-2xl flex">
          <SiLeetcode />
          <SiLinkedin />
          <SiCodeforces />
          <SiInstagram />
          <SiMaildotru />
          <SiGithub />
        </div>
        <buttton className="w-36 h-11  py-2 text-center text-white font-bold bg-pink rounded-full">
          Hire me
        </buttton>
      </div>
    </>
  );
};

export default Home;
