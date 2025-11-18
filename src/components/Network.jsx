import { motion } from 'framer-motion'

const Network = () => {
  return (
    <section className="bg-slate-950 text-blue-100 py-20" id="network">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Global Network</h2>
          <p className="mt-3 text-blue-200/90 max-w-3xl">Strategic hubs and partner stations across the Americas, EMEA, and APAC provide resilient capacity and unified SOPs. Our control centers coordinate exceptions and keep your supply chain visible and on time.</p>
        </motion.div>

        <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-slate-900/60">
          {/* Simple world map image */}
          <img
            src="https://images.unsplash.com/photo-1557223562-6c77ef16210d?q=80&w=1800&auto=format&fit=crop"
            alt="Abstract world map representing Macargo global network"
            className="w-full h-80 object-cover opacity-80"
          />
          {/* Light pulsing nodes */}
          <div className="absolute inset-0">
            {[
              { left: '22%', top: '42%' },
              { left: '48%', top: '35%' },
              { left: '72%', top: '44%' },
              { left: '35%', top: '68%' },
              { left: '60%', top: '70%' },
            ].map((p, i) => (
              <span
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-fuchsia-400/90 shadow-[0_0_12px_rgba(217,70,239,0.6)]"
                style={{ left: p.left, top: p.top }}
              >
                <span className="absolute inset-0 rounded-full bg-fuchsia-400/60 animate-ping" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Network
