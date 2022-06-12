import React from "react";
import { AiOutlineHome } from "react-icons/ai";
const Experience = (props) => {
  return (
    <>
    <div className="flex flex-col items-center justify-center mih-h-screen bg-dark gap-8 px-8 py-12">
        <div className="flex justify-center items-center gap-x-3 w-full">
          <p className="text-white text-md font-bold">GO BACK TO </p>
          <AiOutlineHome
            onClick={props.experienceToHomeHandler}
            className="text-yellow font-bold text-5xl cursor-pointer"
          />
        </div>
        
        <div className="flex gap-x-4">
          <div class="flex items-center justify-center bg-white py-10">
            <div class="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-20 mx-auto">
              <ol class="relative border-l-4 border-indigo-600 leading-loose">
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">2015</p>
                  <p class="font-bold text-lg mb-1">Web Developer</p>
                  <p class="font-bold text-sm mb-2">(Freelancer)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">2016</p>
                  <p class="font-bold text-lg mb-1">
                    App development, BusTracker
                  </p>
                  <p class="font-bold text-sm mb-2">(Personal Project)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">
                    2017 <br />
                    2018
                  </p>
                  <p class="font-bold text-lg mb-1">App design, Cryb</p>
                  <p class="font-bold text-sm mb-2">(Personal Project)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">2018</p>
                  <p class="font-bold text-lg mb-1">Illustrator, Wannabe Inc</p>
                  <p class="font-bold text-sm mb-2">(Freelance)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">2019</p>
                  <p class="font-bold text-lg mb-1">Intern, Unknown Company</p>
                  <p class="font-bold text-sm mb-2">(Contract)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">
                    2019 <br />
                    2020
                  </p>
                  <p class="font-bold text-lg mb-1">
                    Software Engineer, Unknown Company
                  </p>
                  <p class="font-bold text-sm mb-2">(Contract)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.75rem] p-0 m-0 font-bold">
                    2021 -
                  </p>
                  <p class="font-bold text-lg mb-1">
                    Full Stack Developer, Unknown Company
                  </p>
                  <p class="font-bold text-sm mb-2">(Contract)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div class="flex items-center justify-center bg-white py-10">
            <div class="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-20 mx-auto">
              <ol class="relative border-l-4 border-indigo-600 leading-loose">
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">2015</p>
                  <p class="font-bold text-lg mb-1">Web Developer</p>
                  <p class="font-bold text-sm mb-2">(Freelancer)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">2016</p>
                  <p class="font-bold text-lg mb-1">
                    App development, BusTracker
                  </p>
                  <p class="font-bold text-sm mb-2">(Personal Project)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">
                    2017 <br />
                    2018
                  </p>
                  <p class="font-bold text-lg mb-1">App design, Cryb</p>
                  <p class="font-bold text-sm mb-2">(Personal Project)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">2018</p>
                  <p class="font-bold text-lg mb-1">Illustrator, Wannabe Inc</p>
                  <p class="font-bold text-sm mb-2">(Freelance)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">2019</p>
                  <p class="font-bold text-lg mb-1">Intern, Unknown Company</p>
                  <p class="font-bold text-sm mb-2">(Contract)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">
                    2019 <br />
                    2020
                  </p>
                  <p class="font-bold text-lg mb-1">
                    Software Engineer, Unknown Company
                  </p>
                  <p class="font-bold text-sm mb-2">(Contract)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
                <li class="mb-10 ml-6 w-[400px]">
                  <div class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"></div>
                  <p class="absolute -left-[3.75rem] p-0 m-0 font-bold">
                    2021 -
                  </p>
                  <p class="font-bold text-lg mb-1">
                    Full Stack Developer, Unknown Company
                  </p>
                  <p class="font-bold text-sm mb-2">(Contract)</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis non pretium erat. Praesent convallis libero ornare,
                    hendrerit diam a, gravida felis.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
