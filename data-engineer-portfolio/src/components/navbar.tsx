'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Khush Joshi
        </Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}