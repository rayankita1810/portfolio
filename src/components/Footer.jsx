import logo from "../assets/logo.png";
import githubfooter from "../assets/githubfooter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import email from "../assets/email.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const iconClass =
    "w-9 hover:scale-110 transition-all duration-200 opacity-70 hover:opacity-100";

  return (
    <footer className="bg-[#0f172a] text-gray-300 px-6 py-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Logo */}
        <a href="/" className="mb-4">
          <img
            src={logo}
            alt="Logo"
            className="w-20 hover:scale-105 transition-transform duration-200"
          />
        </a>

        {/* Tagline */}
        <p className="text-sm md:text-base max-w-xl leading-relaxed text-gray-400">
          Growing, evolving, and embracing each day's lessons, one step at a time.
        </p>

        {/* Divider */}
        <div className="w-20 h-[1px] bg-white/10 my-6 rounded-full"></div>

        {/* Social Icons */}
        <div className="flex gap-5 flex-wrap justify-center mb-6">
          <a href="https://github.com/rayankita1810" target="_blank" rel="noreferrer">
            <img src={githubfooter} alt="GitHub" className={iconClass} />
          </a>

          <a href="https://www.linkedin.com/in/ankita-ray-6248301b2/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" className={iconClass} />
          </a>

          <a href="https://www.facebook.com/ankita.ray.7927408/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" className={iconClass} />
          </a>

          <a href="https://www.instagram.com/_.ankita_ray._/" target="_blank" rel="noreferrer">
            <img src={insta} alt="Instagram" className={iconClass} />
          </a>

          <a href="mailto:rayankita181000@gmail.com">
            <img src={email} alt="Email" className={iconClass} />
          </a>
        </div>

        {/* Bottom text */}
        <p className="text-xs text-gray-500">
          © {currentYear} • Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}

export default Footer;