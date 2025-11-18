import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="bg-slate-950 text-blue-100 py-20" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">About Macargo</h2>
          <p className="mt-4 text-blue-200/90">
            With decades of experience and a presence across key trade lanes, Macargo provides dependable freight forwarding and logistics solutions. Our control towers, vetted partners, and digital visibility combine to give you predictable lead times, compliant operations, and a responsive team that cares.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
