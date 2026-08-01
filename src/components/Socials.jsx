import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Socials = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://instagram.com/sahil_548k",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sahil-sharma-0990b6288/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/OfficialSahil548k",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      href: "https://leetcode.com/u/sahil548k/",
    },
  ];

  return (
    <section id="socials" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Connect
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Let&apos;s make something memorable.
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/10 p-4 text-2xl text-zinc-300 transition hover:-translate-y-1 hover:text-cyan-300"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="https://drive.google.com/file/d/1YQn1lpmtZW1HPM1_e3TdNwoL3KPU0DGs/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaFileDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Socials;
