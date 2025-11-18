import { motion } from 'framer-motion'

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1586527154495-c2913f5c3cfe?q=80&w=2100&auto=format&fit=crop"
          alt="Global logistics operations with containers and cranes"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/80 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(99,102,241,0.15),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl"
        >
          <motion.span custom={1} variants={fadeUp} className="inline-flex items-center gap-2 text-sm tracking-wide uppercase text-blue-200/80">
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400/80 animate-pulse" />
            Global Freight Forwarding
          </motion.span>
          <motion.h1
            custom={2}
            variants={fadeUp}
            className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-white"
          >
            Macargo — Reliable logistics across air, ocean, and land
          </motion.h1>
          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-5 text-lg md:text-xl text-blue-100/90"
          >
            We move cargo with precision and care through a trusted global network, delivering stability, compliance, and on-time performance.
          </motion.p>

          <motion.div custom={4} variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Request a Quote
            </a>
            <a
              href="#track"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
            >
              Track Your Shipment
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
