'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center px-4 bg-white">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900"
        >
          Data Engineer & BI Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
        >
          I build scalable data pipelines and business intelligence systems to turn raw data into actionable insights.
        </motion.p>
      </div>
    </section>
  )
}
