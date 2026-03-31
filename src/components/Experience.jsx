// const projects = [
//     {
//       id: 1,
//       title: "Sendfast",
//       techused: [react, tailwind, figma, graphql],
//       description: [
//         // eslint-disable-next-line react/jsx-key
//         <p>
//           Enhanced{" "}
//           <a
//             href="https://www.sendfast.in/rider.html"
//             target="_blank"
//             className="text-teal-500"
//           >
//             SendFast&apos;s rider page
//           </a>{" "}
//           using React and Tailwind CSS to ensure responsiveness and improved
//           user experience.
//         </p>,
//         // eslint-disable-next-line react/jsx-key
//         <p>
//           Developed{" "}
//           <a
//             href="http://test-app.sendfast.in/de-list"
//             target="_blank"
//             className="text-teal-500 "
//           >
//             Delivery Data Executive page
//           </a>{" "}
//           based on Figma designs, implementing filter functionality by state,
//           city, and hubs using GraphQL to fetch backend data.
//         </p>,
//         // eslint-disable-next-line react/jsx-key
//         <p>
//           Implemented the{" "}
//           <a
//             href="http://test-app.sendfast.in/change-password"
//             target="_blank"
//             className="text-teal-500 "
//           >
//             Change Password page
//           </a>{" "}
//           using React and GraphQL for backend communication.
//         </p>,
//       ],
//       imageUrl: img1,
//       link: "http://test-app.sendfast.in/",
//     },
//     {
//       id: 2,
//       title: "Grid Plus",
//       techused: [react, tailwind, figma, framermotion],
//       description: [
//         "Designed and developed 4 pages with different sections based on Figma designs.",
//         "Utilized Tailwind CSS and Framer Motion for animations to enhance user experience.",
//         // eslint-disable-next-line react/jsx-key
//         <p>
//           Implemented a{" "}
//           <a
//             href="https://www.gridplus.in/"
//             target="_blank"
//             className="text-teal-500"
//           >
//             calculator feature
//           </a>{" "}
//           to automatically calculate savings based on system size or monthly
//           bills with solar energy.
//         </p>,
//          "Used EmailJS to get email from form submission.",
//       ],
//       imageUrl: img3,
//       link: "https://www.gridplus.in/",
//     },
//     {
//       id: 3,
//       title: "Media Project",
//       techused: [react, tailwind, figma, postman],
//       description: [
//         "Developed YouTube-like video pages with functionalities such as watching shorts, login, logout, change password, and uploading videos.",
//         "Implemented login authentication and user-specific features, including viewing uploaded videos.",
//         "Utilized Postman for fetching data from the backend and ensured responsiveness using React and Tailwind CSS.",
//       ],
//       imageUrl: img2,
//       link: "",
//     },
//     {
//       id: 4,
//       title: "Teksi App",
//       techused: [react, tailwind],
//       description: [
//         "Developed a ride-hailing web application (Teksi) using React and Tailwind CSS.",
//       ],
//       imageUrl: img4,
//       link: "https://teksi.onrender.com/",
//     },
//   ];

import React from "react";
import img1 from "./../assets/sendfast.png";
import img2 from "./../assets/media.png";
import img3 from "./../assets/onesolar.png";
import img4 from "./../assets/teksi.png";
import img5 from "./../assets/mindmine-academy.png";
import img6 from "./../assets/mindmine-institute.png";
import img7 from "./../assets/forest-lake.png";
import img8 from "./../assets/property-wala.png";

const Experience = React.forwardRef((props, ref) => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Passport Pulse",
      location: "Kolkata, India",
      duration: "Jan 2025 – Present",
      projects: [
        {
          title: "Mindmine Academy",
          image: img5,
          link: "https://mindmineacademy-ankita-new.vercel.app/",
          techused: ["React", "Node.js", "Express", "MongoDB"],
          description: [
            "Built and deployed full-stack MERN application with responsive UI and scalable architecture.",
            "Developed complete admin panel to manage enquiries, admissions, and application workflows.",
            "Implemented dynamic enquiry actions (Connected, Junk, Follow-up, Admission).",
          ],
        },
        {
          title: "Mindmine Skill Institute",
          image: img6,
          link: "https://www.mindmineinstitute.co.in/",
          techused: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
          description: [
            "Developed full-stack MERN platform with optimized backend architecture.",
            "Built RESTful APIs using Node.js and Express with MongoDB integration.",
            "Improved EMI UI layout and usability for better user experience.",
          ],
        },
        {
          title: "Forest Lakes",
          image: img7,
          link: "https://forest-lake-ankita.vercel.app/",
          techused: ["React", "Tailwind"],
          description: [
            "Built fully responsive informational website with modern UI/UX design.",
            "Focused on clean layout, performance, and mobile responsiveness.",
          ],
        },
        {
          title: "Property Wala Bhaiya",
          image: img8,
          link: "https://forest-lake-ankita.vercel.app/",
          techused: ["React", "Tailwind"],
          description: [
            "Currently developing scalable frontend architecture.",
            "Focused on mobile-first design and performance optimization.",
          ],
        },
      ],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Sendfast (DCart Logistics Pvt. Ltd.)",
      location: "Hyderabad, India",
      duration: "July 2023 – July 2024",
      projects: [
        {
          title: "Sendfast",
          image: img1,
          link: "http://test-app.sendfast.in/",
          techused: ["React", "Tailwind", "GraphQL"],
          description: [
            "Enhanced rider page with responsive UI using React and Tailwind CSS.",
            "Developed Delivery Executive dashboard with filters (state, city, hub) using GraphQL.",
            "Implemented secure Change Password functionality with backend integration.",
          ],
        },
        {
          title: "Grid Plus",
          image: img3,
          link: "https://www.gridplus.in/",
          techused: ["React", "Tailwind", "Framer Motion", "Figma"],
          description: [
            "Developed multiple pages based on Figma designs.",
            "Added smooth animations using Framer Motion.",
            "Built solar savings calculator feature for dynamic user input.",
          ],
        },
        {
          title: "Media Project",
          image: img2,
          link: "",
          techused: ["React", "Tailwind", "Postman"],
          description: [
            "Developed YouTube-like platform with video playback and user authentication.",
            "Implemented login, upload, and user-specific video management features.",
          ],
        },
        {
          title: "Teksi App",
          image: img4,
          link: "https://teksi.onrender.com/",
          techused: ["React", "Tailwind"],
          description: [
            "Built ride-hailing web application with responsive UI.",
          ],
        },
      ],
    },
  ];

  const handleVisitWebsite = (link) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <div
      ref={ref}
      className="my-20 flex flex-col items-center justify-center scroll-mt-24"
    >
      <h1 className="text-3xl font-semibold mb-4">Professional Experience</h1>

      <div className="w-full mt-10 px-6 md:px-20 lg:px-40 space-y-14">
        {experiences.map((exp) => (
          <div key={exp.id}>
            {/* Header */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold">
                {exp.role} | {exp.company}
              </h2>
              <p className="text-gray-600">
                {exp.location} • {exp.duration}
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {exp.projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-500 p-5"
                >
                  {/* Image */}
                  {project.image && (
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg w-full"
                      />

                      {project.link && (
                        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 rounded-lg">
                          <button
                            onClick={() => handleVisitWebsite(project.link)}
                            className="bg-teal-500 text-white px-4 py-2 rounded-full"
                          >
                            Visit
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techused?.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {Array.isArray(project.description) ? (
                      <ul className="list-disc ml-5 text-gray-700 mt-2">
                        {project.description.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 mt-2">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

Experience.displayName = "Experience";
export default Experience;
