import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onStep }) {
  const closeRef = useRef(null)
  const isOpen = index !== null
  useEffect(() => {
    if (!isOpen) return
    const prev = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const key = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') onStep(1); if (e.key === 'ArrowLeft') onStep(-1) }
    window.addEventListener('keydown', key)
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = ''; prev?.focus?.() }
  }, [isOpen, onClose, onStep])
  const item = isOpen ? items[index] : null
  return (
    <AnimatePresence>
      {item && (
        <motion.div className="lb" role="dialog" aria-modal="true" aria-label="Photo viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={onClose}>
          <button ref={closeRef} className="lb-b lb-x" aria-label="Close" onClick={onClose}><X size={24} /></button>
          <button className="lb-b lb-p" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); onStep(-1) }}><ChevronLeft size={28} /></button>
          <button className="lb-b lb-n" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); onStep(1) }}><ChevronRight size={28} /></button>
          <AnimatePresence mode="wait">
            <motion.img key={item.id} src={item.src.replace(/w=\d+/, 'w=1800')} alt={item.alt} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} />
          </AnimatePresence>
          <p className="lb-c">{item.alt} — {index + 1} / {items.length}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
