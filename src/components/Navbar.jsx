import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, wedding } from '../config.js'

export default function Navbar({ active }) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const dark = solid || open
  return (
    <header className={`nav ${dark ? 'solid' : ''}`}>
      <nav className="nav-in" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>{wedding.couple}</a>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {(open || true) && (
          <ul className="links" style={{ display: undefined }} data-open={open}>
            {nav.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a></li>
            ))}
          </ul>
        )}
      </nav>
      <style>{`@media(max-width:760px){.links{display:${open ? 'flex' : 'none'}}}`}</style>
    </header>
  )
}
