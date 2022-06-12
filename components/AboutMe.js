import React from "react";
import { AiOutlineHome } from "react-icons/ai";
const AboutMe = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mih-h-screen bg-dark gap-8 px-8 py-12">
        <div className="flex justify-center items-center gap-x-3 w-full">
          <p className="text-white text-md font-bold">GO BACK TO </p>
          <AiOutlineHome
            onClick={props.aboutMeToHomeHandler}
            className="text-yellow font-bold text-5xl cursor-pointer"
          />
        </div>
        <div className="rounded-lg shadow-xl bg-gray-900 text-white h-[80vh] w-1/2">
          <div className="border-b border-gray-800 px-8 py-3">
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow"></div>
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
          </div>
          <div className="px-8 py-6">
            <p>
              <em className="text-blue">const</em>{" "}
              <span className="text-green-400">aboutMe</span>{" "}
              <span className="text-pink-500">=</span>{" "}
              <em className="text-blue">function</em>() {"{"}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink">return</span> {"{"}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
              <span className="text-yellow">'Ajay Sharma'</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
              <span className="text-yellow">'fullstack-developer'</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
              <span className="text-yellow-300">
                '
                <a
                  href="https://ajaysharma.dev"
                  target="_blank"
                  class="text-yellow hover:underline focus:border-none"
                >
                  https://ajaysharma.dev
                </a>
                '
              </span>
              ,
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
            <p>{'}'}</p>
          </div>
        </div>
        </div>
    </>
  );
};

export default AboutMe;
