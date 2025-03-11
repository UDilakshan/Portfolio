import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import { motion } from "framer-motion";
import { buttonClick } from "./animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false); // State for success message

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "uthayakumardilakshan@gmail.com", // Receiver email
    };

    emailjs
      .send(
        "service_ev9b4ui", // Replace with your EmailJS Service ID
        "template_gb01p6k", // Replace with your EmailJS Template ID
        templateParams,
        "5heVvRPpO7yFWBgOA" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
		  setFormData({ name: "", email: "", message: "" }); // Clear form
          console.log("Email sent to Dilakshan successfully!", response);
          setShowPopup(true); // Show success message
          setTimeout(() => setShowPopup(false), 3000); // Hide after 3s
          
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className="flex space-x-4">
              <motion.a {...buttonClick} href="https://web.facebook.com/dilakshan.udhayakumar.9" className="text-foreground/60 hover:text-foreground/80">
                <img src={facebook} alt="Facebook" className="h-6 w-6" />
              </motion.a>
              <motion.a {...buttonClick} href="https://www.instagram.com/udilakshan/" className="text-foreground/60 hover:text-foreground/80">
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
              </motion.a>

              <motion.a {...buttonClick} href="https://www.linkedin.com/in/udilakshan/" className="text-foreground/60 hover:text-foreground/80">
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
              </motion.a>
            </div>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10">
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <motion.button {...buttonClick} type="submit" className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Send Message
            </motion.button>
          </form>
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed top-15 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
          Your message has been sent to Dilakshan
        </div>
      )}
    </section>
  );
};

export default Contact;
