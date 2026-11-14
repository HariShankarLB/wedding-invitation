import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { wedding } from '../config.js'
import Countdown from './Countdown.jsx'

const petals = Array.from({ length: 12 }, (_, i) => ({ left: `${(i * 8.3 + 4) % 100}%`, delay: i * 1.3, dur: 12 + (i % 5) * 2.5 }))

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 120])
  const fade = (delay) => ({ initial: { opacity: 0, y: reduce ? 0 : 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.1, delay, ease: 'easeOut' } })
  return (
    <section id="home" className="hero" aria-label="Wedding invitation">
      <motion.div className="hero-bg" role="img" aria-label="Wedding landscape" style={{ y, backgroundImage: `url(${wedding.heroImage})` }}
        initial={{ scale: 1 }} animate={{ scale: reduce ? 1 : 1.12 }} transition={{ duration: 22, ease: 'linear' }} />
      <div className="hero-ov" />
      {!reduce && (
        <div className="petals" aria-hidden="true">
          {petals.map((p, i) => (
            <motion.span key={i} className="petal" style={{ left: p.left }}
              animate={{ y: ['0vh', '108vh'], x: [0, 40, -30, 20], rotate: [0, 200, 360], opacity: [0, 0.8, 0.8, 0] }}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }} />
          ))}
        </div>
      )}
      <div className="hero-c">
        <motion.p className="kicker" {...fade(0.2)}>TOGETHER WITH THEIR FAMILIES</motion.p>
        <motion.h1 className="names" {...fade(0.5)}>{wedding.couple}</motion.h1>
        <motion.p className="tag" {...fade(0.8)}>Begins a Beautiful New Chapter</motion.p>
        <motion.p className="date" {...fade(1.2)}>{wedding.displayDate.toUpperCase()}</motion.p>
        <motion.div {...fade(1.5)}><Countdown target={wedding.date} /></motion.div>
      </div>
      <a href="#events" className="scroll" aria-label="Scroll to explore">
        <span>SCROLL TO EXPLORE</span>
        <motion.span animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}><ChevronDown size={20} /></motion.span>
      </a>
    </section>
  )
}
