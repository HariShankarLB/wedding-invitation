import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import EventDetails from './components/EventDetails.jsx'
import Gallery from './components/Gallery.jsx'
import WeddingDetails from './components/WeddingDetails.jsx'
import Footer from './components/Footer.jsx'
import { nav } from './config.js'

export default function App() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    nav.forEach(({ id }) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <EventDetails />
        <Gallery />
        <WeddingDetails />
      </main>
      <Footer />
    </>
  )
}
