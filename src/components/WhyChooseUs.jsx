import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Globe2, FileCheck2, Headphones, ChartLine } from 'lucide-react'

const points = [
  { icon: ShieldCheck, title: 'Compliance First', desc: 'Robust QA and regulatory adherence across all operations.' },
  { icon: Clock, title: 'On‑Time Performance', desc: 'Predictable lead times with exception management and alerts.' },
  { icon: Globe2, title: 'Global Control', desc: 'Unified SOPs and visibility from origin to final mile.' },
  { icon: FileCheck2, title: 'Audit‑Ready Docs', desc: 'Accurate classification, permits, and bonded handling.' },
  { icon: Headphones, title: 'Responsive Support', desc: 'Dedicated teams that know your lanes and priorities.' },
  { icon: ChartLine, title: 'Actionable Insights', desc: 'Milestone analytics and improvement programs.' },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-950 text-blue-100 py-20" id="why">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Why Choose Macargo</h2>
          <p className="mt-3 text-blue-200/90">Clear differentiators that keep your cargo moving.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-blue-400/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <p.icon className="w-6 h-6 text-blue-400" />
                <h3 className="text-white font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-200/90">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
