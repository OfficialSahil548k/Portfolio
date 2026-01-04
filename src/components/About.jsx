import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg"
          >
            <p>
              I am a passionate developer with a keen eye for detail and a love
              for creating immersive digital experiences. My journey in tech has
              been driven by curiosity and a desire to build things that matter.
            </p>
            <p>
              With expertise in React, modern web technologies, and a strong
              foundation in design principles, I bridge the gap between
              aesthetics and functionality.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "Python",
                  "Tailwind CSS",
                  "Node.js",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-bg-primary rounded-full text-sm text-gray-400 border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 p-8 flex items-center justify-center relative overflow-hidden group h-full">
              <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop")',
                }}
              ></div>
              <div className="absolute inset-0 bg-bg-primary/90 z-10"></div>

              <div className="text-center relative z-20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Experience
                </h3>
                <p className="text-gray-400">1+ Years Building Web Apps</p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-bg-secondary/80 backdrop-blur-sm rounded-xl border border-white/5">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      10+
                    </div>
                    <div className="text-sm text-gray-500">
                      Projects Completed
                    </div>
                  </div>
                  <div className="p-4 bg-bg-secondary/80 backdrop-blur-sm rounded-xl border border-white/5">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      5+
                    </div>
                    <div className="text-sm text-gray-500">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
