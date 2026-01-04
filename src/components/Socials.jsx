import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Socials = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://instagram.com/sahil_548k",
      color: "hover:text-[#E1306C]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sahil-sharma-0990b6288/",
      color: "hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/OfficialSahil548k",
      color: "hover:text-black",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-text-primary">
          Connect With Me
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-5xl text-gray-400 transition-all duration-300 ${social.color}`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://drive.google.com/file/d/16v04CZOTWXBFarGZap-MBgZQ8VpdEg5j/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaFileDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Socials;
