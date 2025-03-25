'use client'
import { motion } from 'framer-motion'

const jobs = [
  {
    title: 'Associate Software Engineer',
    company: 'Synoptek LLC',
    location: 'Ahmedabad, Gujarat',
    date: 'Jul 2022 – Dec 2023',
    bullets: [
      'Built scalable cloud data solutions on Azure & Snowflake.',
      'Led cost-optimized data migrations and architecture redesigns.',
      'Worked with Azure Synapse, ADF, DevOps, Python, SQL, Power BI.',
      'Used big data frameworks for processing and analytics at scale.',
    ],
  },
  {
    title: 'BI Developer Intern',
    company: 'Synoptek LLC',
    location: 'Ahmedabad, Gujarat',
    date: 'Jan 2022 – Jun 2022',
    bullets: [
      'Built ETL pipelines using SSIS and SQL Server.',
      'Used PySpark and Snowflake for large-scale data processing.',
      'Developed Power BI models, visuals, and calculated measures.',
    ],
  },
  {
    title: 'Data Science Intern',
    company: 'One Nine AI',
    location: 'New Jersey (Remote)',
    date: 'Jun 2021 – Sep 2021',
    bullets: [
      'Preprocessed data for ML models and EDA.',
      'Built MLP models for regression and classification tasks.',
      'Enhanced feature engineering and model performance.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="relative border-l-2 border-indigo-300 pl-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-[13px] top-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>

              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.company} — {job.location}</p>
              <p className="text-sm text-gray-400 mb-3">{job.date}</p>

              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                {job.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
