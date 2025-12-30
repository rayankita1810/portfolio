import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import next from "../assets/next.svg";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import vscode from "../assets/vscode.png";
import github from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
import framermotion from "../assets/framermotion.svg";
import appscript from "../assets/appsScript.png";
import formspree from "../assets/formspree.svg";
import vercel from "../assets/vercel.png";
import render from "../assets/render.png";
import mapbox from "../assets/mapbox.svg";
import React from "react";

const Skills = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center -mt-16 scroll-mt-20 mx-10 md:mx-20 lg:mx-40 xl:mx-0"
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center w-full xl:w-1/3 bg-white p-6 md:p-10 rounded-3xl shadow-lg text-xl">
          <img
            src="https://cdn-icons-png.freepik.com/512/8759/8759087.png"
            alt="icon"
            className="w-16"
          />
          <h1 className="text-2xl font-semibold font-roboto-slab my-6">
            Skills
          </h1>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <p className="text-teal-500 mt-8 mb-1">Frontend:</p>
          <div className="flex gap-2">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={html} alt="HTML" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={css} alt="CSS" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={js} alt="JavaScript" />
            </a>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={react} alt="React" />
            </a>
            {/* <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={next} className="w-16" alt="Next.js" />
            </a> */}
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bootstrap} alt="Bootstrap" />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tailwind} alt="Tailwind CSS" />
            </a>
          </div>
          <p className="text-teal-500 mt-8 mb-1">Backend:</p>
          <div className="flex gap-4">
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nodejs} alt="nodejs" className="w-28" />
            </a>
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={expressjs} alt="expressjs" className=" w-12" />
            </a>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mongodb} alt="mongodb" className="w-16" />
            </a>
          </div>

          <p className="text-teal-500 mt-8 mb-1">Version Control:</p>
          <div className="flex gap-2">
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git} alt="Git" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a
              href="https://about.gitlab.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitlab} alt="GitLab" />
            </a>
          </div>
          <p className="text-teal-500 mt-8 mb-1">Deployment:</p>
          <div className="flex items-center gap-2">
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={vercel} className="w-10" alt="Vercel" />
            </a>
            <a
              href="https://render.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={render} className="h-24"  alt="Render" />
            </a>
          </div>

          <p className="text-teal-500 mt-8 mb-1">Other Tools:</p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={vscode} alt="Visual Studio Code" />
            </a>

            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={framermotion} className="w-10" alt="Framer Motion" />
            </a>
            <a
              href="https://www.google.com/script/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appscript} className="w-10" alt="Apps Script" />
            </a>
            <a
              href="https://formspree.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={formspree} className="w-10" alt="Formspree" />
            </a>
            <a
              href="https://www.mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mapbox} className="w-12" alt="Mapbox" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
});
Skills.displayName = "Skills";
export default Skills;
