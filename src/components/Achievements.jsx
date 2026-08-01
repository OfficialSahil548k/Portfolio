import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaProjectDiagram, FaQuestionCircle } from "react-icons/fa";

const achievements = [
  {
    title: "10+ projects",
    detail: "From launch pages to full product experiences.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Collaborative mindset",
    detail: "Trusted by founders and teams to turn ideas into momentum.",
    icon: <FaUsers />,
  },
  {
    title: "100+",
    detail: "Focused on Consistency, Logical thinking and Problem Solving.",
    icon: <FaQuestionCircle />,
  },
  {
    title: "Academic Excellence",
    detail: "Consistently Maintained 8.5+ CGPA throughOut the course.",
    icon: <FaAward />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Achievements
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            The kind of work that keeps people coming back.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07 }}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl text-cyan-300">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
