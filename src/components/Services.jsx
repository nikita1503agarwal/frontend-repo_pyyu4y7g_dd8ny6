import { motion } from 'framer-motion'
import { Plane, Ship, Truck, Stamp, Boxes } from 'lucide-react'

const services = [
  { title: 'Air Freight', icon: Plane, desc: 'Time-definite air solutions with IATA-certified handling and active temperature monitoring where required.' },
  { title: 'Ocean Freight', icon: Ship, desc: 'FCL, LCL, and special equipment with carrier allocation, space protection, and reliable schedules.' },
  { title: 'Overland', icon: Truck, desc: 'Cross-border and domestic trucking, intermodal, and last-mile with robust milestone tracking.' },
  { title: 'Customs Brokerage', icon: Stamp, desc: 'End-to-end customs compliance: classification, permits, bonds, and audit-ready documentation.' },
  { title: 'Project Cargo', icon: Boxes, desc: 'Out-of-gauge, heavy-lift, and turnkey projects with route surveys, rigging plans, and on-site supervision.' },
]

const Services = () => {
  return (
    <section className="bg-slate-950 text-blue-100 py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Key Services</h2>
          <p className="mt-3 text-blue-200/90">Integrated solutions built for reliability and control across modes.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-blue-400/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <s.icon className="w-6 h-6 text-blue-400" />
                <h3 className="text-white font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-200/90">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
