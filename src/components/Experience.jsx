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
      duration: "January 2026 – April 2026",
      projects: [
        {
          title: "Mindmine Academy",
          image: img5,
          link: "https://mindmineacademy-ankita-new.vercel.app/",
          techused: ["React", "Node.js", "Express", "MongoDB"],
          description: [
            "Built a full-stack MERN application with a role-based admin panel for managing enquiries and admissions",
            "Developed a structured enquiry workflow system with multiple status stages like follow-up, connected, and admission",
            "Implemented dynamic status tracking to monitor application progress efficiently",
            "Integrated REST APIs with Node.js and MongoDB for seamless data management",
          ],
        },
        {
          title: "Mindmine Institute",
          image: img6,
          link: "https://www.mindmineinstitute.co.in/",
          techused: ["React", "Tailwind", "Node.js", "MongoDB"],
          description: [
            "Contributed to full-stack development by integrating backend with existing frontend system",
            "Built and optimized REST APIs using Node.js and Express",
            "Implemented MongoDB database structure and data flow logic",
            "Worked on UI improvements and developed additional pages for better user experience",
          ],
        },
        {
          title: "Forest Lakes",
          image: img7,
          link: "https://forest-lake-ankita.vercel.app/",
          techused: ["React", "Tailwind"],
          description: [
            "Built a modern responsive UI with smooth wavy animations for enhanced visual experience",
            "Optimized performance using multiple WebP images for faster loading and better efficiency",
            "Implemented mobile-first design ensuring full responsiveness across all devices",
            "Focused on clean layout structure and smooth user interactions using React and Tailwind CSS",
          ],
        },
        {
          title: "Property Wala Bhaiya",
          image: img8,
          link: "https://property-wala-ankita.vercel.app/",
          techused: ["React", "Tailwind"],
          description: [
            "Contributed to frontend development of a responsive UI module",
            "Worked on mobile-first layout and styling improvements",
            "Collaborated on initial implementation of core pages",
          ],
        },
      ],
    },

    {
      id: 2,
      role: "Frontend Developer",
      company: "Sendfast (DCart Logistics Pvt. Ltd.)",
      location: "Hyderabad, India",
      duration: "July 2023 – August 2024",
      projects: [
        {
          title: "Sendfast Platform",
          image: img1,
          link: "http://test-app.sendfast.in/",
          techused: ["React", "Tailwind", "GraphQL"],
          description: [
            "Enhanced rider dashboard UI",
            "Built filters using GraphQL",
            "Integrated secure backend APIs",
          ],
        },
        {
          title: "Grid Plus",
          image: img3,
          link: "https://www.gridplus.in/",
          techused: ["React", "Tailwind", "Framer Motion"],
          description: [
            "Built UI from Figma design",
            "Added animations for UX",
            "Solar savings calculator feature",
          ],
        },
        {
          title: "Media Project",
          image: img2,
          link: "",
          techused: ["React", "Tailwind"],
          description: ["YouTube-like video platform", "Auth + upload system"],
        },
        {
          title: "Teksi App",
          image: img4,
          link: "https://teksi.onrender.com/",
          techused: ["React", "Tailwind"],
          description: ["Ride-hailing UI application"],
        },
      ],
    },
  ];

  const openLink = (link) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Professional Experience
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          My journey as a developer
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        {experiences.map((exp) => (
          <div key={exp.id}>
            {/* EXPERIENCE HEADER */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-500">
                {exp.role}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {exp.company} • {exp.location} • {exp.duration}
              </p>
            </div>

            {/* PROJECT GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {exp.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                    />

                    {project.link && (
                      <button
                        onClick={() => openLink(project.link)}
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold transition"
                      >
                        Visit Project
                      </button>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>

                    {/* TECH */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techused.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-teal-50 dark:bg-gray-800 text-teal-600 dark:text-teal-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* DESCRIPTION */}
                    <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc ml-5">
                      {project.description.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
export default Experience;
