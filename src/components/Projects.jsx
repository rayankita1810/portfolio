import React from "react";
import crud from "../assets/crud.png";
import memorygame from "../assets/memory-game.png";
import surveyform from "../assets/surveyform.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import ts from "../assets/typescript.png";
import next from "../assets/next.png";
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
import shopease from "../assets/shopease.png";

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      title: "Survey Form",
      techused: [react, tailwind, appscript],
      description: [
        "This survey form seamlessly combines React, Tailwind CSS, and Google Sheets API, ensuring smooth data collection. Responses are automatically stored in a Google Spreadsheet for easy management and analysis.",
      ],
      imageUrl: surveyform,
      link: "https://survey-form-3gia.onrender.com/",
      github: "https://github.com/rayankita1810/survey-form",
    },

    {
      id: 4,
      title: "CRUD App",
      techused: [react, tailwind],
      description: [
        "A powerful CRUD application built with React and Tailwind CSS that allows users to efficiently create, read, update, and delete employee records with a clean and responsive UI.",
      ],
      imageUrl: crud,
      link: "https://crud-app-tinj.onrender.com/",
      github: "https://github.com/rayankita1810/crud-app",
    },

    {
      id: 5,
      title: "Text Utils",
      techused: [react, tailwind],
      description: [
        "A versatile text utility app built with React and Tailwind CSS featuring text transformation tools like case conversion, base64 encoding, search & replace, copy tools, and text-to-speech.",
      ],
      imageUrl: textutils,
      link: "https://textutils-kolg.onrender.com/",
      github: "https://github.com/rayankita1810/textutils",
    },

    {
      id: 6,
      title: "Memory Game",
      techused: [html, css, js],
      description: [
        "A classic memory game built using HTML, CSS, and JavaScript where players must remember and replicate blinking sequences, improving focus and memory skills.",
      ],
      imageUrl: memorygame,
      link: "https://memory-game-4h17.onrender.com/",
      github: "https://github.com/rayankita1810/memory-game",
    },

    {
      id: 7,
      title: "Stayhub",
      techused: [nodejs, expressjs, mongodb, mapbox],
      description: [
        "A full-stack Airbnb-style application with authentication, Cloudinary image uploads, Mapbox location services, reviews, and advanced CRUD features built using Node.js, Express, and MongoDB.",
      ],
      imageUrl: stayhub,
      link: "https://stayhub-gg84.onrender.com",
      github: "https://github.com/rayankita1810/stayhub",
    },

    {
      id: 8,
      title: "ShopEase",
      techused: [next, ts, nodejs, expressjs, mongodb],
      description: [
        "A full-stack multi-vendor e-commerce platform where multiple sellers can list products, manage inventory, and track orders. Includes authentication, cart system, admin dashboard, and secure payments integration.",
      ],
      imageUrl: shopease, 
      link: "https://shopease-77xt.vercel.app",
      github: "https://github.com/rayankita1810/shopease",
    },
  ];
  function handleDemo(link) {
    window.open(link, "_blank");
  }

  const sortedProjects = [...projects].reverse(); // 🔥 NEWEST FIRST

  return (
    <>
      {/* HEADER */}
      <div
        ref={ref}
        className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white flex flex-col items-center justify-center text-center w-full pb-36 scroll-mt-16"
      >
        <h1 className="text-4xl font-bold mt-20">My Projects</h1>
        <p className="text-lg md:text-xl px-6 md:px-24 xl:px-72 mt-4 opacity-90">
          A collection of full-stack and frontend projects built while learning
          and exploring modern web development.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6 md:px-16 lg:px-32 -mt-24 mb-24">
        {sortedProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-grow">
              {/* TITLE + TECH */}
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h2>

                <div className="flex gap-2">
                  {project.techused?.map((tech, i) => (
                    <img
                      key={i}
                      src={tech}
                      alt="tech"
                      className="w-6 h-6 object-contain"
                    />
                  ))}
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm mt-4 leading-relaxed flex-grow">
                {Array.isArray(project.description)
                  ? project.description.join(" ")
                  : project.description}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => handleDemo(project.link)}
                  className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2.5 rounded-lg font-medium transition"
                >
                  Live Demo
                </button>

                <button
                  onClick={() => handleDemo(project.github)}
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2.5 rounded-lg font-medium transition"
                >
                  Code
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
