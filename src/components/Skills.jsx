import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import ts from "../assets/typescript.png";
import next from "../assets/next.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
import vscode from "../assets/vscode.png";
import framermotion from "../assets/framermotion.svg";
import mapbox from "../assets/mapbox.svg";

const Skills = React.forwardRef((props, ref) => {
  const SkillCard = ({ title, items }) => (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold text-teal-500 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4 items-center">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:scale-110 transition"
          >
            <img src={item.img} alt={item.name} className="w-10 h-10" />
            <span className="text-xs text-gray-600 dark:text-gray-300">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      className="scroll-mt-20 px-6 py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          My Skills⚡
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Technologies I work with
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Frontend */}
        <SkillCard
          title="Frontend"
          items={[
            { name: "HTML", img: html, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { name: "CSS", img: css, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "JavaScript", img: js, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "React", img: react, link: "https://reactjs.org/" },
            { name: "Next.js", img: next, link: "https://nextjs.org/" },
            { name: "TypeScript", img: ts, link: "https://www.typescriptlang.org/" },
            { name: "Tailwind", img: tailwind, link: "https://tailwindcss.com/" },
            { name: "Bootstrap", img: bootstrap, link: "https://getbootstrap.com/" },
          ]}
        />

        {/* Backend */}
        <SkillCard
          title="Backend"
          items={[
            { name: "Node.js", img: nodejs, link: "https://nodejs.org/" },
            { name: "Express", img: expressjs, link: "https://expressjs.com/" },
            { name: "MongoDB", img: mongodb, link: "https://www.mongodb.com/" },
          ]}
        />

        {/* Authentication & APIs */}
        <SkillCard
          title="Auth & APIs"
          items={[
            {
              name: "Google Auth",
              img: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
              link: "https://developers.google.com/identity",
            },
            {
              name: "Resend Email",
              img: "https://cdn.resend.com/brand/resend-icon-black.svg",
              link: "https://resend.com/",
            },
            {
              name: "Mapbox",
              img: mapbox,
              link: "https://www.mapbox.com/",
            },
          ]}
        />

        {/* Tools */}
        <SkillCard
          title="Tools & DevOps"
          items={[
            { name: "Git", img: git, link: "https://git-scm.com/" },
            { name: "GitHub", img: github, link: "https://github.com/" },
            { name: "GitLab", img: gitlab, link: "https://about.gitlab.com/" },
            { name: "VS Code", img: vscode, link: "https://code.visualstudio.com/" },
            { name: "Framer Motion", img: framermotion, link: "https://www.framer.com/motion/" },
          ]}
        />
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;