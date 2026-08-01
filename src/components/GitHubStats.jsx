import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch, FaFire } from "react-icons/fa";

const stats = [
  { label: "Repositories", value: "20+", icon: <FaCodeBranch /> },
  { label: "Open Source", value: "5+", icon: <FaGithub /> },
  { label: "Total Contribution", value: "550+", icon: <FaFire /> },
];

const GitHubStats = () => {
  return (
    <section id="github" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
                GitHub Stats
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Consistent curiosity, featured through code and iteration.
              </h2>
              <p className="mt-4 text-lg text-zinc-400">
                I enjoy building, learning, and refining ideas in public through projects that evolve over time.
              </p>
            </div>
            <a
              href="https://github.com/OfficialSahil548k"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/30 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:text-white"
            >
              <FaGithub /> Visit GitHub
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <div className="mb-3 text-cyan-300">{stat.icon}</div>
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
