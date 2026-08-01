import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const emails = ["officialsahil548k@gmail.com", "sahil548k@gmail.com"];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Let&apos;s work together on something striking.
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-5">
          {emails.map((email, index) => (
            <motion.a
              key={index}
              href={`mailto:${email}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card flex items-center justify-center gap-4 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-xl text-cyan-300">
                <FaEnvelope />
              </div>
              <span className="text-lg text-zinc-300 md:text-xl">{email}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
