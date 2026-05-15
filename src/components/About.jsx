import React, { useMemo } from "react";
import hero from "../assets/hero.webp";
import { TypeAnimation } from "react-type-animation";

const About = React.forwardRef((props, ref) => {
  // Dynamic experience from July 2023
  const experience = useMemo(() => {
    const start = new Date("2023-07-01");
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    const monthDiff = now.getMonth() - start.getMonth();

    if (monthDiff < 0) years--;

    return years <= 0 ? "1+" : `${years}+`;
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* ================= HERO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <p className="text-teal-500 font-semibold tracking-[0.3em] uppercase mb-4">
              Welcome To My Portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I&apos;m <span className="text-teal-500">Ankita</span>
            </h1>

            {/* Typing Animation */}
            <div className="mt-5 text-2xl md:text-3xl font-semibold h-14">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-teal-500"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 leading-relaxed max-w-2xl">
              I design and develop modern, scalable, and responsive web
              applications with clean UI/UX using React, Tailwind CSS, Node.js,
              Express, and MongoDB.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/drive/folders/1HAKKf2LsHE4LZEiF84gIDrFn_fZoSDEU?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 rounded-full bg-teal-500 text-white font-semibold shadow-lg hover:bg-teal-600 hover:scale-105 transition duration-300">
                  Download Resume
                </button>
              </a>

              <a href="tel:9874066057">
                <button className="px-8 py-3 rounded-full border-2 border-teal-500 text-teal-500 dark:text-teal-400 font-semibold hover:bg-teal-50 dark:hover:bg-gray-900 transition duration-300">
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-400 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={hero}
                alt="Developer"
                className="relative w-[280px] sm:w-[350px] md:w-[430px] drop-shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div
        ref={ref}
        className="relative mt-24 bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-gray-900 dark:to-black text-white py-28 px-6 transition-all duration-500"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me 👋</h2>

          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            I have hands-on industry experience as a Frontend Developer (July
            2023 – August 2024), where I built responsive and user-friendly web
            applications and worked closely with UI/UX improvements.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-white/80 mt-6">
            After that, I focused on upskilling myself in full-stack
            development, intensively preparing and learning the MERN stack to
            expand my backend knowledge and system design skills.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-white/80 mt-6">
            Later, I worked as a MERN Stack Developer (January 2026 – April
            2026), where I contributed to building full-stack applications using
            React, Node.js, Express, and MongoDB, improving both frontend and
            backend performance and architecture.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-white/90 mt-6">
            I enjoy building modern digital products, solving real-world
            problems, and continuously improving my development skills through
            hands-on experience and learning.
          </p>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">
            {/* EXPERIENCE */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition duration-300">
              <h3 className="text-5xl font-bold">1.5+</h3>
              <p className="mt-3 text-white/80">
                Years Experience
              </p>
              <span className="text-sm text-white/60">Since July 2023</span>
            </div>

            {/* PROJECTS */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition duration-300">
              <h3 className="text-5xl font-bold">15+</h3>
              <p className="mt-3 text-white/80">Projects Built</p>
              <span className="text-sm text-white/60">Real world apps</span>
            </div>

            {/* STACK */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition duration-300">
              <h3 className="text-5xl font-bold">MERN</h3>
              <p className="mt-3 text-white/80">Stack Developer</p>
              <span className="text-sm text-white/60">React + Node</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
