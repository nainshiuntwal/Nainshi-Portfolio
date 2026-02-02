import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope,  FaGithub,FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let&apos;s talk!
        </p>
        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none text-white"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none text-white"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none text-white resize-none"
                  placeholder="Write your message..."
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-medium py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

         
          {/* Contact Information */}
<div className="space-y-8">
  {/* Location */}
  <div className="flex items-start">
    <div className="text-purple text-2xl mr-4">
      <FaMapMarkerAlt />
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2 text-white">Location</h3>
      <p className="text-gray-400">Gurugram, Haryana</p>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-start">
    <div className="text-purple text-2xl mr-4">
      <FaEnvelope/>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
      <p className="text-gray-400">untwalnainshi@gmail.com</p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start">
    <div className="text-purple text-2xl mr-4">
      <FaPhoneAlt />
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2 text-white">Phone</h3>
      <p className="text-gray-400">+91 7974204270</p>
    </div>

    {/* GitHub */}
<div className="flex items-start">
  <div className="text-purple-500 text-2xl mr-4">
    <FaGithub />
  </div>

  <div>
    <h3 className="text-lg font-semibold mb-2 text-white">GitHub</h3>
    <a
      href="https://github.com/nainshiuntwal"
      target="_blank"
      rel="noreferrer"
      className="text-gray-400 hover:text-purple-400 transition"
    >
         https://github.com/nainshiuntwal    </a>
  </div>
</div>

  </div>
</div>

      </div>
      </div>
    </motion.div>
  );
};

export default Contact;
