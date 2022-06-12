import React from "react";
import { AiOutlineHome } from "react-icons/ai";
const Experience = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-centr gap-8 px-8 py-12 ">
        <div className="flex justify-center items-center gap-x-3 w-full">
          <p className="text-white text-md font-bold">GO BACK TO </p>
          <AiOutlineHome
            onClick={props.experienceToHomeHandler}
            className="text-yellow font-bold text-5xl cursor-pointer"
          />
        </div>
        
          <div className="flex items-center justify-center bg-white py-10">
            <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-20 mx-auto">
              <ol className="relative border-l-4 border-yellow leading-loose">
                <li className="mb-10 ml-6 w-[400px]">
                  <div className="absolute w-4 h-4 bg-white border-4 border-yellow rounded-full -left-[0.6rem]"></div>
                  <p className="absolute -left-[3.5rem] p-0 m-0 font-bold">
                    2019<br/> -<br/> 2020
                  </p>
                  <p className="font-bold text-lg mb-1">Midfields Sr. Sec. School</p>
                  <p className="font-bold text-sm mb-2">(CBSE Board 12th with Science Stream)</p>
                  <p className="font-bold text-xs">
                    92%
                  </p>
                </li>
                <li className="mb-10 ml-6 w-[400px]">
                  <div className="absolute w-4 h-4 bg-white border-4 border-yellow rounded-full -left-[0.6rem]"></div>
                  <p className="absolute -left-[3.5rem] p-0 m-0 font-bold">
                    2020<br/>
                  </p>
                  <p className="font-bold text-lg mb-1">Netaji Subhas Institute of Technology</p>
                  <p className="font-bold text-sm mb-2">(B.TECH. in Computer Science)</p>
                  <p className="font-bold text-xs">
                    8.0/10 CGPA
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white py-10">
            <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-20 mx-auto">
              <ol className="relative border-l-4 border-pink leading-loose">
                <li className="mb-10 ml-6 w-[400px]">
                  <div className="absolute w-4 h-4 bg-white border-4 border-pink rounded-full -left-[0.6rem]"></div>
                  <p className="absolute -left-[3.5rem] p-0 m-0 font-bold">
                    APR
                    <br /> 2022
                    <br /> -<br /> MAY
                    <br /> 2022
                    <br />
                  </p>
                  <p className="font-bold text-lg mb-1">
                    Microsoft Engage'22 Mentee
                  </p>
                  <p className="font-bold text-sm mb-2">(Apprenticeship)</p>
                  <p>
                    Intern Engage is a program for engineering students across
                    India graduating in 2024. It is designed to provide a
                    platform for engineering students to accelerate their growth
                    and foster industry-relevant skills through mentorship,
                    coding challenges, workshops and networking opportunities.
                  </p>
                  <div className="absolute w-4 h-4 bg-white border-4 border-pink rounded-full -left-[0.6rem]"></div>
                </li>
              </ol>
            </div>
          </div>
        </div>
    </>
  );
};

export default Experience;
