import whiteLogo from "../assets/white-logo.png";
import githubfooter from "../assets/githubfooter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import email from "../assets/email.png";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-teal-500 flex flex-col items-center justify-center text-white p-10 text-center">
      <a href="/">
        <img src={whiteLogo} alt="Logo" className="w-20"></img>
      </a>
      <p className="text-lg font-roboto-slab my-6">
        Growing, evolving, and embracing each day&apos;s lessons, one step at a
        time
      </p>
      <div className="flex gap-4 mb-6">
      <a
          href="https://github.com/rayankita1810"
          target="_blank"
        >
          <img src={githubfooter} alt="github" className="w-10"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/ankita-ray-6248301b2/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" className="w-10"></img>
        </a>
        <a href="https://www.facebook.com/ankita.ray.7927408/" target="_blank">
          <img src={facebook} alt="facebook" className="w-10"></img>
        </a>
        <a href="https://www.instagram.com/_.ankita_ray._/" target="_blank">
          <img src={insta} alt="insta" className="w-10"></img>
        </a>
        <a href="mailto:rayankita181000@gmail.com">
          <img src={email} alt="email" className="w-10"></img>
        </a>
      </div>
      <p>Handcrafted by me in {currentYear}</p>
    </footer>
  );
}

export default Footer;