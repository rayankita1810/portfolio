import React, { useState } from "react";
import img1 from "./../assets/sendfast.png";
import img2 from "./../assets/media.png";
import img3 from "./../assets/onesolar.png";
import img4 from "./../assets/teksi.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import graphql from "../assets/graphql.png";
import postman from "../assets/postman.png";
import framermotion from "../assets/framermotion.svg";

const Experience = React.forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Sendfast",
      techused: [react, tailwind, figma, graphql],
      description: [
        // eslint-disable-next-line react/jsx-key
        <p>
          Enhanced{" "}
          <a
            href="https://www.sendfast.in/rider.html"
            target="_blank"
            className="text-teal-500"
          >
            SendFast&apos;s rider page
          </a>{" "}
          using React and Tailwind CSS to ensure responsiveness and improved
          user experience.
        </p>,
        // eslint-disable-next-line react/jsx-key
        <p>
          Developed{" "}
          <a
            href="http://test-app.sendfast.in/de-list"
            target="_blank"
            className="text-teal-500 "
          >
            Delivery Data Executive page
          </a>{" "}
          based on Figma designs, implementing filter functionality by state,
          city, and hubs using GraphQL to fetch backend data.
        </p>,
        // eslint-disable-next-line react/jsx-key
        <p>
          Implemented the{" "}
          <a
            href="http://test-app.sendfast.in/change-password"
            target="_blank"
            className="text-teal-500 "
          >
            Change Password page
          </a>{" "}
          using React and GraphQL for backend communication.
        </p>,
      ],
      imageUrl: img1,
      link: "http://test-app.sendfast.in/",
    },
    {
      id: 2,
      title: "Grid Plus",
      techused: [react, tailwind, figma, framermotion],
      description: [
        "Designed and developed 4 pages with different sections based on Figma designs.",
        "Utilized Tailwind CSS and Framer Motion for animations to enhance user experience.",
        // eslint-disable-next-line react/jsx-key
        <p>
          Implemented a{" "}
          <a
            href="https://www.gridplus.in/"
            target="_blank"
            className="text-teal-500"
          >
            calculator feature
          </a>{" "}
          to automatically calculate savings based on system size or monthly
          bills with solar energy.
        </p>,
         "Used EmailJS to get email from form submission.",
      ],
      imageUrl: img3,
      link: "https://www.gridplus.in/",
    },
    {
      id: 3,
      title: "Media Project",
      techused: [react, tailwind, figma, postman],
      description: [
        "Developed YouTube-like video pages with functionalities such as watching shorts, login, logout, change password, and uploading videos.",
        "Implemented login authentication and user-specific features, including viewing uploaded videos.",
        "Utilized Postman for fetching data from the backend and ensured responsiveness using React and Tailwind CSS.",
      ],
      imageUrl: img2,
      link: "",
    },
    {
      id: 4,
      title: "Teksi App",
      techused: [react, tailwind],
      description: [
        "Developed a ride-hailing web application (Teksi) using React and Tailwind CSS.",
      ],
      imageUrl: img4,
      link: "https://teksi.onrender.com/",
    },
  ];
  function handleVisitWebsite(link) {
    window.open(link, "_blank");
  }

  return (
    <>
      <div
        className="my-20 flex flex-col items-center justify-center scroll-mt-24"
        ref={ref}
      >
        <h1 className="text-3xl font-semibold mb-4">Professional Experience</h1>
        <p className="text-xl text-center mx-10">
          Here are some of the frontend development roles and projects I&apos;ve
          been involved in:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-6 mt-20 px-10 md:px-20 lg:px-40">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="col-span-1 project-slide bg-white rounded-xl shadow-md hover:shadow-lg transition duration-500 p-6 md:p-10"
            >
              <div className="relative">
                <div key={index}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full rounded-lg cursor-pointer"
                  />
                  {project.link ? (
                    <>
                      <div className="absolute rounded-lg inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center opacity-0 hover:opacity-95 transition-opacity duration-300">
                        <button
                          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full text-2xl"
                          onClick={() => handleVisitWebsite(project.link)}
                        >
                          Visit Website
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="text-center mt-10">
                <h3 className="text-2xl font-semibold mb-">{project.title}</h3>
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

                <ul className="text-lg text-start list-disc ml-5">
                  {Array.isArray(project.description) ? (
                    project.description.map((desc, index) => (
                      <li key={index} className="text-gray-800">
                        {desc}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-800">{project.description}</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
          <div className="col-start-2 col-span-1 flex justify-center">
            {projects.slice(3).map((project, index) => (
              <div
                key={index}
                className="project-slide bg-white rounded-xl shadow-md hover:shadow-lg transition duration-500 p-10"
              >
                <div className="relative">
                  <div key={index}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full rounded-lg mb-4 cursor-pointer"
                    />
                    {project.link ? (
                    <>
                      <div className="absolute inset-0 rounded-lg cursor-pointer flex items-center justify-center bg-black opacity-0 transition-opacity duration-300 hover:opacity-50">
                        <button
                          className="text-white text-2xl font-semibold"
                          onClick={() => handleVisitWebsite(project.link)}
                        >
                          Visit Website
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-center mt-2 mb-6 gap-2">
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
                  <ul className="text-md text-start list-disc">
                    {Array.isArray(project.description) ? (
                      project.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))
                    ) : (
                      <li>{project.description}</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

Experience.displayName = "Experience";
export default Experience;
