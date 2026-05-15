import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = ({
  aboutScroll,
  skillsScroll,
  experienceScroll,
  projectsScroll,
}) => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleClick = () => {
    navigate("/contact");
    setOpen(false);
  };

  const navLinks = [
    { name: "About", action: aboutScroll },
    { name: "Skills", action: skillsScroll },
    { name: "Experience", action: experienceScroll },
    { name: "Projects", action: projectsScroll },
  ];

  return (
    <>
      {/* ================= MOBILE NAVBAR ================= */}
      <div
        className={`fixed top-0 left-0 w-full z-50 md:hidden transition-all duration-300
        ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-md"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <a href="/">
            <img src={logo} alt="Logo" className="w-14" />
          </a>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-teal-100 dark:bg-gray-800 text-teal-600 dark:text-yellow-400 transition duration-300 hover:scale-110"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger */}
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color={darkMode ? "#ffffff" : "#0f766e"}
              size={24}
            />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 w-full z-50 items-center justify-between px-10 lg:px-16 py-4 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="w-16" />
        </a>

        {/* Nav Links */}
        <ul className="flex items-center gap-10 text-lg font-semibold">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={link.action}
              className="relative cursor-pointer text-gray-700 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-teal-100 dark:bg-gray-800 text-teal-600 dark:text-yellow-400 hover:scale-110 transition duration-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Contact Button */}
          <button
            onClick={handleClick}
            className="px-6 py-2 rounded-full border-2 border-teal-500 text-teal-500 dark:text-teal-400 font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            Say Hello
          </button>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-[72px] left-0 w-full z-40 md:hidden transition-all duration-300
        ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <div className="mx-4 rounded-3xl bg-white dark:bg-gray-900 shadow-2xl dark:shadow-black/40 p-6">
          <ul className="flex flex-col gap-5 text-lg font-medium">
            {navLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => {
                  link.action();
                  setOpen(false);
                }}
                className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300"
              >
                {link.name}
              </li>
            ))}

            {/* Contact */}
            <button
              onClick={handleClick}
              className="mt-3 w-full rounded-full bg-teal-500 text-white py-3 font-semibold hover:bg-teal-600 transition duration-300"
            >
              Contact Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;