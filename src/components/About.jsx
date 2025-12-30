import React from "react";
import heroimg from "../assets/heroimg.png";
const About = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-40 text-center">
        <div className="p-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-teal-500 mb-4">
            Discover Your Full Stack Developer
          </h1>
          <p className="text-lg px-10 md:px-0">
            I design and code beautifully simple things, and I love what I do.
          </p>
          <img src={heroimg} alt="Icon" />
          <a
            href="https://drive.google.com/file/d/1-UUwj1F-O_kJUPCCccDLpO-DfD3YAaU7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 rounded-full px-3 py-2 text-white font-roboto-slab bg-gradient-to-br from-teal-600 to-teal-500 text-lg md:text-xl shadow-lg border-teal-600 hover:from-white hover:to-teal-100 hover:text-teal-600 transition duration-300 my-4">
              Download Resume
            </button>
          </a>
        </div>

        <div
          className="bg-teal-500 text-white flex flex-col items-center justify-center text-center w-full pt-20 pb-32 px-10 scroll-mt-16"
          ref={ref}
        >
          <h1 className="text-3xl font-semibold mb-4">
            Hi, I&apos;m Ankita. Nice to meet you.
          </h1>
          <p className="text-xl w-full lg:w-1/2 ">
            I have 1 year of industry experience as a Frontend Developer, where
            I worked on building responsive and user-friendly web interfaces. I
            have also completed a MERN Stack course from Apna College,
            strengthening my skills in full-stack development. I am passionate
            about continuous learning, improving user experience, and writing
            clean, scalable code. I am currently seeking opportunities in
            Frontend or MERN Stack roles.
          </p>
        </div>
      </div>
    </>
  );
});

About.displayName = "About";
export default About;
