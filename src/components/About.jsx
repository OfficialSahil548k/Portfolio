import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCompass, FaLayerGroup } from "react-icons/fa";

const highlights = [
  {
    title: "Fast & modern",
    text: "Performance-minded builds that remain elegant across devices and screens.",
    icon: <FaBolt />,
  },
  {
    title: "Clear direction",
    text: "Thoughtful structure, purposeful motion, and a refined user experience.",
    icon: <FaCompass />,
  },
  {
    title: "Flexible systems",
    text: "Reusable interfaces designed to grow with products, brands, and ideas.",
    icon: <FaLayerGroup />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
              About
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              I build full-stack solutions with backend strength, product sense, and analytics depth.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              My work blends strong backend engineering with thoughtful frontend execution, creating products that are not only polished but also reliable, scalable, and data-informed.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-400">
              I am especially drawn to building systems that power insights, automation, and smarter decision-making through analytics and development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel p-6"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                >
                  <div className="mb-3 text-xl text-cyan-300">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
