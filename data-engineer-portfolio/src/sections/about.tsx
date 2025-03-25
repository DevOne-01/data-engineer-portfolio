'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed space-y-6"
        >
          <p>
            I'm a results-driven <strong>Data Engineer and Full Stack BI Developer</strong> with over 2 years of experience designing and optimizing data-centric solutions across cloud platforms like Azure, AWS, and GCP.
          </p>
          <p>
            I specialize in <strong>ETL pipelines, cloud data architecture, Power BI reporting, and big data technologies</strong> like Spark, Snowflake, and Azure Synapse. I enjoy turning messy data into clean insights that drive real business value.
          </p>
          <p>
            Certified in <strong>Microsoft Fabric Analytics (DP-600)</strong> and <strong>Azure Data Science (DP-100)</strong>, I’m passionate about continuous learning and building scalable data systems.
          </p>
          <p>
            I’ve led data lake migrations, built real-time dashboards, and collaborated with global teams across time zones to deliver data projects that scale.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
