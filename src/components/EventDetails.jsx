import { motion } from 'framer-motion'
import { CalendarHeart, MapPin, Clock } from 'lucide-react'
import { wedding as w } from '../config.js'

const reveal = (i) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.8, delay: i * 0.15 } })

export default function EventDetails() {
  const cards = [
    { Icon: CalendarHeart, title: 'WEDDING CEREMONY', big: w.displayDate, line: w.ceremony.time, text: w.ceremony.text },
    { Icon: MapPin, title: 'VENUE', big: w.venue.name, line: w.venue.address, text: w.venue.city },
    { Icon: Clock, title: 'RECEPTION', big: w.reception.date, line: w.reception.time, text: w.reception.text },
  ]
  return (
    <section id="events" className="section">
      <div className="wrap">
        <motion.div {...reveal(0)}>
          <h2 className="heading">JOIN US IN CELEBRATION</h2>
          <p className="sub">A day filled with love, happiness, and beautiful memories.</p>
          <div className="rule" aria-hidden="true">✦</div>
        </motion.div>
        <div className="cards">
          {cards.map(({ Icon, title, big, line, text }, i) => (
            <motion.article key={title} className="card" {...reveal(i + 1)} whileHover={{ y: -6 }}>
              <Icon size={30} strokeWidth={1.2} aria-hidden="true" />
              <h3>{title}</h3>
              <p className="big">{big}</p>
              <p>{line}</p>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
        <div className="cta">
          <motion.a className="btn" href={w.venue.mapsUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>VIEW LOCATION</motion.a>
        </div>
      </div>
    </section>
  )
}
