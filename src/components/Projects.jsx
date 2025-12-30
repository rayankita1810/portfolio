import React from "react";
import crud from "../assets/crud.png";
import memorygame from "../assets/memory-game.png";
import surveyform from "../assets/surveyform.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import appscript from "../assets/appsScript.png";
import textutils from "../assets/textutils.png";
import cafe from "../assets/cafe.png";
import calculator from "../assets/calculator.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import mapbox from "../assets/mapbox.svg";
import stayhub from "../assets/stayhub.png";

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Memory Game",
      techused: [html, css, js],
      description: [
        "The Memory Game is a classic game designed to test and improve your memory skills. Developed using pure HTML, CSS, and JavaScript, this interactive web application challenges players to remember the sequence of blinking cells and replicate it.",
      ],
      imageUrl: memorygame,
      link: "https://memory-game-4h17.onrender.com/",
      github: "https://github.com/rayankita1810/memory-game",
    },
  
    {
      id: 2,
      title: "Crud App",
      techused: [react, tailwind],
      description: [
        "The CRUD (Create, Read, Update, Delete) App is a versatile web application built with React, Vite, and Tailwind CSS, empowering users to efficiently manage employee data.This app simplifies the process of organizing and maintaining employee records.",
      ],
      imageUrl: crud,
      link: "https://crud-app-tinj.onrender.com/",
      github: "https://github.com/rayankita1810/crud-app",
    },
    {
      id: 3,
      title: "Survey Form",
      techused: [react, tailwind, appscript],
      description: [
        "This survey form seamlessly combines React, Tailwind CSS, and Google Sheets API, ensuring smooth data collection. This integration allows all submitted survey responses to be automatically stored in a",
        // eslint-disable-next-line react/jsx-key
        <a
          href="https://docs.google.com/spreadsheets/d/1TM8Xqwh8HI73tXR9R_ZZ5qCAcHmWx1icavxL7dx_VGA/edit#gid=0"
          target="_blank"
          className="text-teal-500"
        >
          {" "}
          Google Spreadsheet
        </a>,
        ", streamlining data management and analysis.",
      ],

      imageUrl: surveyform,
      link: "https://survey-form-3gia.onrender.com/",
      github: "https://github.com/rayankita1810/survey-form",
    },
    {
      id: 4,
      title: "Text Utils",
      techused: [react, tailwind],
      description: [
        "Explore a versatile text utility app, crafted with Tailwind CSS and React. Effortlessly transform text cases, encode/decode in Base64, execute search and replace, and enjoy convenient copy-paste functionalities. Experience instant text-to-speech functionality!",
      ],

      imageUrl: textutils,
      link: "https://textutils-kolg.onrender.com/",
      github: "https://github.com/rayankita1810/textutils",
    },
    {
      id: 5,
      title: "Gourmet au Catering",
      techused: [html, css],
      description: [
        "Explore Gourmet au Catering's frontend portfolio, a testament to exquisite design and culinary artistry crafted purely with HTML and CSS. From delectable menus to flawless contact forms, immerse yourself in the epitome of web development excellence.",
      ],

      imageUrl: cafe,
      link: "https://cafe-yvch.onrender.com/",
      github: "https://github.com/rayankita1810/cafe",
    },
    {
      id: 6,
      title: "Calculator",
      techused: [html, css, js],
      description: [
        "Discover a sleek HTML, CSS, and JavaScript calculator, combining simplicity with functionality. Effortlessly perform calculations with intuitive design. Experience the elegance of web development in this minimalist yet powerful tool.",
      ],
      imageUrl: calculator,
      link: "https://calculator-72ld.onrender.com/",
      github: "https://github.com/rayankita1810/calculator",
    },
    {
      id: 7,
      title: "Stayhub",
      techused: [nodejs, expressjs, mongodb, mapbox],
      description: [
        "A full-stack Airbnb-style application built with Node.js, Express, MongoDB, and EJS, featuring secure authentication with Passport, image uploads via Cloudinary, location services using Mapbox, and full CRUD functionality with reviews and filters.",
      ],
      imageUrl: stayhub,
      link: "https://stayhub-gg84.onrender.com",
      github: "https://github.com/rayankita1810/stayhub",
    },
  ];
  function handleDemo(link) {
    window.open(link, "_blank");
  }

  return (
    <>
      <div
        className="bg-teal-500 text-white flex flex-col items-center justify-center text-center w-full pb-40 scroll-mt-16"
        ref={ref}
      >
        <h1 className="text-3xl font-semibold mb-4 mt-20">
          My Recent Projects
        </h1>
        <p className="text-xl px-10 md:px-20 xl:px-72 text-center">
          I&apos;m quite the enthusiast when it comes to digital products.
          Having immersed myself in a myriad of web applications across various
          industries and verticals, I eventually felt compelled to take on the
          challenge of crafting my own. Thus, I ventured into designing and
          building my own projects using React.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-6 px-10 md:px-20 lg:px-40 -mt-20 mb-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-span-1 project-slide bg-white rounded-xl shadow-md hover:shadow-lg transition duration-500 p-6 md:p-10"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="pt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <div className="flex items-center justify-center gap-2 my-4">
                  {Array.isArray(project.techused) ? (
                    project.techused.map((item, index) => (
                      <img
                        key={index}
                        src={item}
                        alt="technology used"
                        className="w-10"
                      />
                    ))
                  ) : (
                    <li>{project.techused}</li>
                  )}
                </div>
              </div>

              <p className="text-gray-800 text-lg my-4">
                {project.description}
              </p>
              <div className="flex gap-4 text-sm xl:text-lg">
                <button
                  onClick={() => handleDemo(project.link)}
                  className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-full w-32 sm:w-40 whitespace-nowrap xl:whitespace-normal"
                >
                  See Demo
                </button>
                <button
                  onClick={() => handleDemo(project.github)}
                  className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-full w-32 sm:w-40 whitespace-nowrap xl:whitespace-normal"
                >
                  GitHub Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});
Projects.displayName = "Projects";
export default Projects;
