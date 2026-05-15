import { useState } from "react";
import logo from "../assets/logo.png";
import myimg from "../assets/myimg.jpg";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xqekoeak", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-[#0f172a] text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`flex items-center justify-between px-6 md:px-12 py-5 border-b transition ${
          darkMode ? "border-white/10" : "border-gray-200"
        }`}
      >
        <img src={logo} alt="Logo" className="w-14 hover:scale-105 transition" />

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-sm px-3 py-1 rounded-full border transition hover:scale-105 ${
              darkMode
                ? "border-white/20 text-white"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Close Button */}
          <RiCloseLine
            className={`cursor-pointer hover:scale-110 transition ${
              darkMode ? "text-teal-400" : "text-teal-600"
            }`}
            size={38}
            onClick={() => navigate("/")}
          />
        </div>
      </div>

      {/* Profile Divider */}
      <div className="relative flex justify-center mt-6">
        <div
          className={`w-full border-t ${
            darkMode ? "border-white/10" : "border-gray-200"
          }`}
        ></div>

        <img
          src={myimg}
          alt="profile"
          className={`absolute -top-10 w-24 h-24 rounded-full border-4 shadow-xl object-cover ${
            darkMode ? "border-[#0f172a]" : "border-white"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center mt-20 px-4">
        <h1
          className={`text-3xl md:text-4xl font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Let’s Connect 🚀
        </h1>

        <p
          className={`mt-3 max-w-md ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Got an idea, project, or just want to say hi? I’d love to hear from you.
        </p>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className={`mt-10 w-full max-w-xl rounded-2xl p-6 md:p-8 space-y-4 shadow-xl border transition ${
            darkMode
              ? "bg-[#111827] border-white/10"
              : "bg-white border-gray-200"
          }`}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className={`w-full rounded-lg px-4 py-3 outline-none transition border ${
              darkMode
                ? "bg-[#0f172a] border-white/10 text-white placeholder-gray-500 focus:border-teal-400"
                : "bg-gray-50 border-gray-300 text-black placeholder-gray-400 focus:border-teal-500"
            }`}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className={`w-full rounded-lg px-4 py-3 outline-none transition border ${
              darkMode
                ? "bg-[#0f172a] border-white/10 text-white placeholder-gray-500 focus:border-teal-400"
                : "bg-gray-50 border-gray-300 text-black placeholder-gray-400 focus:border-teal-500"
            }`}
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            rows="5"
            className={`w-full rounded-lg px-4 py-3 outline-none resize-none transition border ${
              darkMode
                ? "bg-[#0f172a] border-white/10 text-white placeholder-gray-500 focus:border-teal-400"
                : "bg-gray-50 border-gray-300 text-black placeholder-gray-400 focus:border-teal-500"
            }`}
          />

          <button
            type="submit"
            className={`w-full font-semibold py-3 rounded-lg shadow-md transition hover:scale-[1.01] ${
              darkMode
                ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-teal-500/20"
                : "bg-teal-500 text-white hover:bg-teal-600"
            }`}
          >
            Send Message ✉️
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;