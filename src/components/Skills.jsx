import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaReact,
  FaServer,
  FaRocket,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiPython, SiVite } from "react-icons/si";

const skills = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end product development with strong frontend delivery and reliable backend architecture.",
    icon: <FaReact />,
    tags: ["React", "Vite", "Animation"],
  },
  {
    title: "UI Systems",
    description:
      "Thoughtful design systems, responsive layouts, and motion-driven storytelling.",
    icon: <FaPalette />,
    tags: ["Tailwind", "Design", "Accessibility"],
  },
  {
    title: "Backend Systems",
    description:
      "Reliable APIs, databases, and deployment workflows that keep products moving smoothly and securely.",
    icon: <FaServer />,
    tags: ["Node", "APIs", "Deployment"],
  },
  {
    title: "Analytics & Insights",
    description:
      "Turning data into meaningful insights, dashboards, and product decisions with clarity and impact.",
    icon: <FaRocket />,
    tags: ["Python", "PowerBI", "Analysis & Understanding"],
  },
  {
    title: "Core Web Logic",
    description:
      "Clean JavaScript, reusable components, and robust debugging habits for maintainable code.",
    icon: <FaCode />,
    tags: ["JavaScript", "Java", "Testing"],
  },
  {
    title: "Developer Workflow",
    description:
      "Version control, collaboration, and modern tooling that keep delivery fast and focused.",
    icon: <FaGitAlt />,
    tags: ["Git", "CI", "Productivity"],
  },
];

const extraStack = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Vite", icon: <SiVite /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Skills
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Building reliable products with strong architecture and thoughtful execution.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            I combine full-stack development, backend depth, and analytics-driven thinking to create solutions that are useful, scalable, and impactful.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-cyan-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{skill.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {extraStack.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-zinc-200"
            >
              <span className="text-cyan-300">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
