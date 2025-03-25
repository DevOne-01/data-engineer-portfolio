'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'Data Lake Implementation',
    tech: ['Azure', 'SQL', 'Data Lake', 'DevOps', 'Synapse', 'SSAS', 'Dynamics ERP'],
    summary: `Led migration from deprecated Dynamics CE export to a modern Azure Data Lake pipeline integrated with Azure SQL.`,
    details: [
      'Used Azure Synapse Link to extract, transform, and load data from Dynamics CE into Azure SQL.',
      'Created virtual tables and views in Azure Analysis Services for analytical access.',
      'Implemented CI/CD using Azure DevOps for automated deployments.',
      'Focused on cost optimization while improving performance and scalability.',
    ],
  },
  {
    title: 'Sales Forecasting in Power BI',
    tech: ['Power BI', 'SQL', 'CRM', 'Data Factory', 'DevOps'],
    summary: `Developed interactive dashboards with advanced forecasting models using Power BI and live CRM data.`,
    details: [
      'Built forecast reports analyzing CRM sales data to support strategic decisions.',
      'Integrated real-time ETL using Power BI + Data Factory.',
      'Added scenario modeling for sales strategy simulations.',
      'Delivered rich visuals with KPI tracking for executives.',
    ],
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.summary}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="text-indigo-500 text-sm hover:underline"
              >
                {expanded === i ? 'Hide Details' : 'View Details'}
              </button>

              {expanded === i && (
                <ul className="mt-4 list-disc list-inside text-sm space-y-2 text-gray-700">
                  {project.details.map((point, p) => (
                    <li key={p}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
