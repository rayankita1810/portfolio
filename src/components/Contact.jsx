import { useState } from "react";
import logo from "../assets/logo.png";
import myimg from "../assets/myimg.jpg";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xqekoeak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between px-8 py-4">
        <img src={logo} alt="Logo" className="w-14" />
        <RiCloseLine
          className="text-teal-500 cursor-pointer"
          size={40}
          onClick={handleClick}
        />
      </div>
      <div className="relative">
        <img
          src={myimg}
          alt="profile img"
          className="rounded-full w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <hr className="w-full border-t border-gray-200 my-2" />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mt-20 text-4xl font-serif">Thanks for reaching out!</h1>
        <h2 className="text-xl font-serif mt-4">How can I assist you today?</h2>
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg w-full px-4">
          <div className="flex flex-col mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div className="flex flex-col mb-4">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div className="flex flex-col mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="border border-gray-300 rounded-md py-2 px-4 resize-none h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-500 font-serif text-white text-xl shadow-lg font-bold py-2 px-4 rounded-full hover:bg-teal-600 transition duration-300"
          >
            Sumbit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
