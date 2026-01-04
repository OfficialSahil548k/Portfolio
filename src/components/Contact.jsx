import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const emails = ["officialsahil548k@gmail.com", "sahil548k@gmail.com"];

  return (
    <section id="contact" className="py-20 relative bg-bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-black mb-2 font-medium"
        >
          Get in Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-black"
        >
          Let's Work Together
        </motion.h2>

        <div className="max-w-xl mx-auto flex flex-col gap-6">
          {emails.map((email, index) => (
            <motion.a
              key={index}
              href={`mailto:${email}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card flex items-center justify-center gap-4 p-6 group bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-accent/30"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl text-black group-hover:text-accent transition-colors">
                <FaEnvelope />
              </div>
              <span className="text-lg md:text-xl text-text-secondary group-hover:text-black transition-colors">
                {email}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
