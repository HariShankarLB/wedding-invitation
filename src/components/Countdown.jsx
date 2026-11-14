import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const diff = (target) => {
  const ms = Math.max(0, new Date(target).getTime() - Date.now())
  return { Days: Math.floor(ms / 864e5), Hours: Math.floor(ms / 36e5) % 24, Minutes: Math.floor(ms / 6e4) % 60, Seconds: Math.floor(ms / 1e3) % 60 }
}

export default function Countdown({ target }) {
  const [t, setT] = useState(() => diff(target))
  useEffect(() => { const i = setInterval(() => setT(diff(target)), 1000); return () => clearInterval(i) }, [target])
  return (
    <div className="cd" role="timer" aria-label="Countdown to the wedding">
      {Object.entries(t).map(([label, v]) => (
        <div className="cd-box" key={label}>
          <span className="cd-n" aria-hidden="true">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span key={v} initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-100%', opacity: 0 }} transition={{ duration: 0.4 }}>
                {String(v).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="sr-only" style={{ position: 'absolute', left: -9999 }}>{v} {label}</span>
          <span className="cd-l">{label}</span>
        </div>
      ))}
    </div>
  )
}
