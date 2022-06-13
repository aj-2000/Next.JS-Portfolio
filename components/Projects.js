import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import Project from "./Project";
const Projects = (props) => {
  const projectsData = [
    {
      id: 1,
      title: "DEEM Mobile",
      description: "Halo Mobile for Halo Lab",
      category: "Android App",
      month: "DEC",
      year: "2021",
      imageUrl:
        "https://cdn.dribbble.com/userupload/2867419/file/original-1a92c58b42a687485a2b9bdc467749ab.png?compress=1&resize=2400x1800",
      link: "/post/3-months-of-programmer-dvorak",
    },
    {
      id: 2,
      title: "Crypto dashboard - light mode",
      description: "Elliott Wilkie for QClay",
      category: "Design",
      month: "JAN",
      year: "2022",
      imageUrl:
        "https://cdn.dribbble.com/users/518973/screenshots/18470414/media/1a513756018669cfb3d7d44e06ebb1f0.png?compress=1&resize=1600x1200&vertical=top",
      link: "https://dribbble.com/shots/18470414-Crypto-dashboard-light-mode",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Rakib Kowshar for Orizon: UI/UX Design Agency",
      category: "iOS App",
      month: "MAR",
      year: "2022",
      imageUrl:
        "https://cdn.dribbble.com/userupload/2865454/file/original-513a0907bdaa6189fcfa803ea0cf32ab.jpg?compress=1&resize=2400x1800",
      link: "https://dribbble.com/shots/18468605-Task-Management-App",
    },
    {
      id: 4,
      title: "Crypto dashboard - light mode",
      description: "Elliott Wilkie for QClay",
      category: "Design",
      month: "JAN",
      year: "2022",
      imageUrl:
        "https://cdn.dribbble.com/users/518973/screenshots/18470414/media/1a513756018669cfb3d7d44e06ebb1f0.png?compress=1&resize=1600x1200&vertical=top",
      link: "https://dribbble.com/shots/18470414-Crypto-dashboard-light-mode",
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Rakib Kowshar for Orizon: UI/UX Design Agency",
      category: "iOS App",
      month: "MAR",
      year: "2022",
      imageUrl:
        "https://cdn.dribbble.com/userupload/2865454/file/original-513a0907bdaa6189fcfa803ea0cf32ab.jpg?compress=1&resize=2400x1800",
      link: "https://dribbble.com/shots/18468605-Task-Management-App",
    },
    {
      id: 6,
      title: "DEEM Mobile",
      description: "Halo Mobile for Halo Lab",
      category: "Android App",
      month: "DEC",
      year: "2021",
      imageUrl:
        "https://cdn.dribbble.com/userupload/2867419/file/original-1a92c58b42a687485a2b9bdc467749ab.png?compress=1&resize=2400x1800",
      link: "https://dribbble.com/shots/18469906-DEEM-Mobile",
    },
  ];
  return (
    <>
      <div className="px-8 py-12">
        
        <div className="flex justify-center items-center gap-x-3 w-full">
          <p className="text-white text-md font-bold">GO BACK TO </p>
          <AiOutlineHome
            onClick={props.projectsToHomeHandler}
            className="text-yellow font-bold text-5xl cursor-pointer"
          />
        </div>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {projectsData.map((project)=>(<Project key={project.id} project={project} />))}
            {/* <Project
              imgurl="https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              project={{
                category: "Website",
                title: "My Website",
                image:
                  "https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                link: "https://unsplash.com/photos/lwuqPiWPbqI",
                popupLink: "https://unsplash.com/photos/lwuqPiWPbqI",
              }}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
