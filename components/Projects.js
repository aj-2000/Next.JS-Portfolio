import React from "react";
import {  AiOutlineHome } from "react-icons/ai";
import Project from "./Project";
const Projects = (props) => {
  return (
    <>
      <div className="bg-dark min-h-screen px-8 py-12">
        <div className="flex justify-center items-center gap-x-3 w-full">
          <p className="text-white text-md font-bold">GO BACK TO </p>
          <AiOutlineHome
            onClick={props.projectsToHomeHandler}
            className="text-yellow font-bold text-5xl cursor-pointer"
          />
        </div>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            <Project
              imgurl="https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              project={{
                category: "Website",
                title: "My Website",
                image:
                  "https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                link: "https://unsplash.com/photos/lwuqPiWPbqI",
                popupLink: "https://unsplash.com/photos/lwuqPiWPbqI",
              }}
            />
            <Project
              imgurl="https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              project={{
                category: "Website",
                title: "My Website",
                image:
                  "https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                link: "https://unsplash.com/photos/lwuqPiWPbqI",
                popupLink: "https://unsplash.com/photos/lwuqPiWPbqI",
              }}
            />
            <Project
              imgurl="https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              project={{
                category: "Website",
                title: "My Website",
                image:
                  "https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                link: "https://unsplash.com/photos/lwuqPiWPbqI",
                popupLink: "https://unsplash.com/photos/lwuqPiWPbqI",
              }}
            />
            <Project
              imgurl="https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              project={{
                category: "Website",
                title: "My Website",
                image:
                  "https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                link: "https://unsplash.com/photos/lwuqPiWPbqI",
                popupLink: "https://unsplash.com/photos/lwuqPiWPbqI",
              }}
            />
            <Project
              imgurl="https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              project={{
                category: "Website",
                title: "My Website",
                image:
                  "https://images.unsplash.com/photo-1654080522969-d40e4837ab3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                link: "https://unsplash.com/photos/lwuqPiWPbqI",
                popupLink: "https://unsplash.com/photos/lwuqPiWPbqI",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
