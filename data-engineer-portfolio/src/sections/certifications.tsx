'use client'
import { motion } from 'framer-motion'

const certs = [
  {
    title: 'Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)',
    id: '9F0290111BA8231B',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/KhushJoshi-7710/9F0290111BA8231B?sharingId=F1FF42702056AE93',
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate (DP-100)',
    id: 'CD2D4D21CA0E7D14',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/KhushJoshi-7710/CD2D4D21CA0E7D14?sharingId=F1FF42702056AE93',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-500 mb-4">Credential ID: {cert.id}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition"
              >
                View Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
