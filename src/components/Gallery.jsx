import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { wedding } from '../config.js'
import Lightbox from './Lightbox.jsx'

const cats = ['All', 'Groom', 'Bride', 'Together']

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const items = cat === 'All' ? wedding.gallery : wedding.gallery.filter((g) => g.category === cat)
  const step = useCallback((d) => setOpen((i) => (i + d + items.length) % items.length), [items.length])
  return (
    <section id="gallery" className="section alt">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="heading">OUR BEAUTIFUL MOMENTS</h2>
          <p className="sub">Every picture tells a story of love.</p>
          <div className="rule" aria-hidden="true">✦</div>
        </motion.div>
        <div className="tabs" role="group" aria-label="Gallery categories">
          {cats.map((c) => <button key={c} className="tab" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <motion.div layout className="grid">
          {items.map((g, i) => (
            <motion.button layout key={g.id} className={`tile ${g.size}`} aria-label={`Open photo: ${g.alt}`}
              initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }} whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.9, delay: (i % 4) * 0.08 }} onClick={() => setOpen(i)}>
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async" onError={(e) => (e.currentTarget.style.opacity = 0)} />
              <span>{g.category}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onStep={step} />
    </section>
  )
}
