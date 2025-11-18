import { motion } from 'framer-motion'

const industries = [
  'Automotive',
  'Aerospace',
  'Food & Perishables',
  'Pharma',
  'Industrial Machinery',
  'Consumer Electronics',
  'Retail & E-commerce',
]

const Industries = () => {
  return (
    <section className="bg-slate-950 text-blue-100 py-20" id="industries">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Industries We Serve</h2>
          <p className="mt-3 text-blue-200/90">Sector-specific expertise with certified handling and stringent QA.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((name, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.04 * idx }}
              className="rounded-lg bg-slate-900/60 ring-1 ring-white/10 p-4 hover:ring-blue-400/30 transition-all"
            >
              <p className="text-white font-medium">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
