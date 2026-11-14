// Edit everything about the wedding here. Replace image URLs with local files
// (e.g. import hero from './assets/hero.jpg') or your own hosted photos.
import blueImg from './bluimages.jpg'

// const u = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`
const u = (id, w) => blueImg


export const wedding = {
  couple: 'Manjunathan Keerthana',
  date: '2027-02-18T11:15:00+05:30', // ISO date + time, used by the countdown
  displayDate: 'Thursday, 18 February 2027',
  heroImage: u('photo-1519741497674-611481863552', 2000),
  ceremony: { time: '11:15 AM', text: 'Exchange of vows, followed by blessings from family and friends.' },
  venue: {
    name: 'MSV Mahal',
    address: 'Nambialaganpalayam',
    city: 'Coimbatore, Tamil Nadu 641007',
    mapsUrl: 'https://www.google.com/maps/place/MSV+Mahal/@11.006514,76.9055387,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85fcdc04b204f:0x3561b620f58fa26b!8m2!3d11.006514!4d76.9055387!16s%2Fg%2F11fsxc_l93?entry=ttu&g_ep=EgoyMDI2MTEwOC4wIKXMDSoASAFQAw%3D%3D',
  },
  reception: { date: 'Thursday, 18 February 2027', time: '12:00 PM', text: 'An afternoon of lunch and celebration under the lights.' },
  dressCode: 'Traditional & Elegant',
  moments: ['Wedding Ceremony', 'Family Gathering', 'Reception', 'Dinner & Celebration'],
  gallery: [
    // size: 'tall' | 'wide' | 'base' controls the masonry layout
    { id: 1, category: 'Groom', size: 'tall', alt: 'The groom in a tailored suit', src: u('photo-1507679799987-c73779587ccf', 1000) },
    { id: 2, category: 'Groom', size: 'wide', alt: 'The groom adjusting his cuffs', src: u('photo-1519741497674-611481863552', 1200) },
    { id: 3, category: 'Bride', size: 'tall', alt: 'The bride with her bouquet', src: u('photo-1594552072238-b8a33785b261', 1000) },
    { id: 4, category: 'Bride', size: 'base', alt: 'The bride in her veil', src: u('photo-1583939003579-730e3918a45a', 900) },
    { id: 5, category: 'Together', size: 'wide', alt: 'The couple walking together', src: u('photo-1511795409834-ef04bbd61622', 1400) },
    { id: 6, category: 'Together', size: 'tall', alt: 'The couple at sunset', src: u('photo-1537633552985-df8429e8048b', 1000) },
    { id: 7, category: 'Together', size: 'base', alt: 'Hands joined with rings', src: u('photo-1606800052052-a08af7148866', 900) },
  ],
}
export const nav = [
  { id: 'home', label: 'Home' }, { id: 'events', label: 'Events' },
  { id: 'gallery', label: 'Gallery' }, { id: 'details', label: 'Details' },
]
