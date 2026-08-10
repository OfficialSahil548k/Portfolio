import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight,FaFileDownload } from "react-icons/fa";
import image1 from "../assets/profilePictures/image1.png";
import image2 from "../assets/profilePictures/image2.png";
import image3 from "../assets/profilePictures/image3.png";
import image4 from "../assets/profilePictures/image4.png";
import image5 from "../assets/profilePictures/image5.png";
import image6 from "../assets/profilePictures/image6.png";

const profileImages = [image1, image2, image3, image4, image5, image6];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % profileImages.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16"
    >
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[140px]" />
      <div className="absolute bottom-10 right-0 h-[280px] w-[280px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="container mx-auto grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Full-Stack Developer
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
            I build scalable products with strong backend logic and data-driven
            thinking.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            I enjoy creating end-to-end digital solutions, from robust APIs and
            systems architecture to analytics-focused experiences that turn data
            into decisions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#socials" className="btn-primary">
              Let&apos;s talk <FaArrowRight />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-panel gradient-border p-5"
        >
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
            <motion.img
              key={profileImages[activeImage]}
              src={profileImages[activeImage]}
              alt="Sahil Sharma"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="h-[420px] w-full object-cover"
            />
          </div>
        </motion.div>
          <div>
            <a
              href="https://drive.google.com/file/d/1YQn1lpmtZW1HPM1_e3TdNwoL3KPU0DGs/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaFileDownload /> Download Resume
            </a>
          </div>
      </div>
    </section>
  );
};

export default Hero;
