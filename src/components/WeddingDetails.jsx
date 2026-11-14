import { motion } from 'framer-motion'
import { wedding } from '../config.js'

const rise = (d = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.8, delay: d } })

export default function WeddingDetails() {
  return (
    <section id="details">
      <div className="section">
        <div className="wrap">
          <motion.div {...rise()}>
            <h2 className="heading">THE CELEBRATION</h2>
            <div className="rule" aria-hidden="true">✦</div>
            <p className="invite">We warmly invite you to join us and bless this beautiful beginning of our new journey.</p>
          </motion.div>
          <div className="two">
            <motion.div {...rise(0.1)}>
              <h3>DRESS CODE</h3>
              <p className="dress">{wedding.dressCode}</p>
            </motion.div>
            <motion.div {...rise(0.2)}>
              <h3>SPECIAL MOMENTS</h3>
              <ul>{wedding.moments.map((m) => <li key={m}>{m}</li>)}</ul>
            </motion.div>
          </div>
          <motion.div {...rise()}>
            <h3 className="heading" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>A NOTE TO OUR GUESTS</h3>
            <p className="note">Your presence and blessings will make our special day even more memorable.</p>
          </motion.div>
        </div>
      </div>
      <div className="closing">
        <motion.p {...rise()}>With Love,<br /><em>{wedding.couple}</em></motion.p>
      </div>
    </section>
  )
}
