import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode } from "react-icons/fa";
import invoiceAiImage from "../assets/projectImages/invoice-ai.png";
import mindManiaImage from "../assets/projectImages/mindMania.png";
import interviewIQImage from "../assets/projectImages/interviewIQ.png";

const projects = [
  {
    title: "Invoice Ai",
    description:
      "An AI-powered Invoice generation Automation platform with mordern Ui and a modular content system.",
    stack: ["React", "Ai Integration", "Tailwind", "Node"],
    link: "https://invoice-ai-1-6ih9.onrender.com/",
    image: invoiceAiImage,
  },
  {
    title: "MindMania",
    description:
      "An Online Quiz Conducting Platform for the students and lowerlevel Educational Institutes with Responsive design.",
    stack: ["React", "Express", "Node"],
    link: "https://mindmania.onrender.com/",
    image: mindManiaImage,
  },
  {
    title: "InterviewIQ",
    description:
      "An Ai-driven Live Interview Conducting platform with Resume Analysis feature that scores your Interview session.(....currently under progress).",
    stack: ["React", "Vite", "API", "OpenRouter", "Node"],
    link: "https://interview-i-q.netlify.app/",
    image: interviewIQImage,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Featured Projects
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Selected work that balances impact and polish.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 opacity-70 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 overflow-hidden rounded-[20px] border border-white/10 bg-black/20">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black/30 text-cyan-300">
                  <FaCode />
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
                >
                  View project <FaArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
