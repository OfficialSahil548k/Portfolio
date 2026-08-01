import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "StartUp(remote)",
    period: "October,2025 — February,2026",
    points: [
      "Designing and shipping polished products for startups and personal brands, with strong backend implementation.",
      "Bridging development, structured APIs, and product thinking through scalable and data-aware solutions.",
    ],
  },
  {
    role: "Developer & Creator",
    company: "Independent Projects",
    period: "2023 — Present",
    points: [
      "Built modern web apps and systems using React, APIs, data workflows, and thoughtful architecture.",
      "Focused on reducing friction, improving reliability, and delivering memorable product experiences backed by insight.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Experience
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Building with curiosity, clarity, and consistency.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-6">
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/20 text-cyan-300">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="text-sm text-cyan-300">{item.company}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-400">
                  {item.period}
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-7 text-zinc-400">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
