'use client'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Let’s Connect
        </motion.h2>

        <p className="text-lg text-gray-600 mb-8">
          Interested in working together or just want to say hi? Feel free to reach out!
        </p>

        <div className="flex justify-center gap-6 mb-6 text-2xl text-indigo-600">
          <a
            href="mailto:khushjoshi021@outlook.com"
            aria-label="Email"
            className="hover:text-indigo-800"
          >
            📧
          </a>
          <a
            href="https://linkedin.com/in/dev01kj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-800"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/DevOne-01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-800"
          >
            <FaGithub />
          </a>
        </div>

        <a
          href="/Khush_Joshi_Resume.pdf"
          download
          className="inline-block text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-lg transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
