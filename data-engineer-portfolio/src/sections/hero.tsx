'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-white">
      {/* Background Blob */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse -top-40 -left-40"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse -bottom-20 right-10"></div>
      </div>

      {/* Hero Content */}
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight"
        >
          Data Engineer & Full Stack BI Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
        >
          Building scalable pipelines, insightful dashboards, and modern cloud data solutions.
        </motion.p>
      </div>
    </section>
  )
}
