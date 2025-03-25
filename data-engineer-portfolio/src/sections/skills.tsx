'use client'
import { motion } from 'framer-motion'
import { FaPython, FaAws, FaGitAlt, FaNodeJs } from 'react-icons/fa'
import {
  SiSnowflake, SiApacheairflow, SiApachehadoop, /*SiAzuredevops,*/
  SiDocker, SiKubernetes
} from 'react-icons/si'

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'SQL' },
      { name: 'DAX' },
      { name: 'PowerShell' },
      { name: 'Node.js', icon: <FaNodeJs /> },
    ],
  },
  {
    category: 'Cloud & Big Data',
    items: [
      //{ name: 'Azure', icon: <SiAzuredevops /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Snowflake', icon: <SiSnowflake /> },
      { name: 'Hadoop', icon: <SiApachehadoop /> },
      { name: 'Airflow', icon: <SiApacheairflow /> },
    ],
  },
  {
    category: 'Data & BI',
    items: [
      { name: 'Power BI' },
      { name: 'Azure Synapse' },
      { name: 'Data Factory' },
      { name: 'SSIS / SSAS' },
      { name: 'Databricks' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'GitHub', icon: <FaGitAlt /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'CI/CD Pipelines' },
      { name: 'Jira / Confluence' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6, type: 'spring' }}
              className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-4">
                {group.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm hover:shadow-md hover:ring-2 ring-indigo-300 transition-all"
                  >
                    {item.icon && <span className="text-indigo-500 text-lg">{item.icon}</span>}
                    <span className="text-sm font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
