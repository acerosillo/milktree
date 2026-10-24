// Shared contact details and opening hours used across the site.
// TODO: replace the WhatsApp number and video sources with the real ones.
export const SITE = {
  name: 'Madame Esmeralda',
  tagline: 'Jewellery, accessories & home decor, curated with natural elegance.',
  email: 'hello@themilktreelondon.com',
  phone: '+44 (0) 20 7946 0123',
  whatsappUrl: 'https://wa.me/442079460123',
  instagramUrl: 'https://www.instagram.com/themilktree.london/?hl=en',
  address: ['34 Barking Rd, London E16 1EQ', 'Canning Town, London'],
  heroVideo: 'https://video.wixstatic.com/video/53937d_200fea536e0a463b9e795bf592722371/1080p/mp4/file.mp4',
};

// Indexed by Date.getDay(): 0 = Sunday. `null` means closed.
export const OPENING_HOURS: ({ open: string; close: string } | null)[] = [
  { open: '8:00am', close: '7:00pm' },
  null,
  { open: '7:30am', close: '8:00pm' },
  { open: '7:30am', close: '8:00pm' },
  { open: '7:30am', close: '8:00pm' },
  { open: '7:30am', close: '8:00pm' },
  { open: '7:30am', close: '8:00pm' },
];

// TODO: placeholder prices and timings, replace with the real delivery rates.
export const DELIVERY_RATES = [
  { name: 'Collect from the Boutique', time: 'Ready same day', price: 'Free' },
  { name: 'London Courier', time: 'Same or next day', price: '£12' },
  { name: 'UK Standard', time: '3–5 working days', price: '£4.95' },
  { name: 'UK Express', time: 'Next working day', price: '£9.95' },
  { name: 'International', time: '5–10 working days', price: 'From £18' },
];

export const FEATURED_VIDEOS = [
  { title: 'The Gold Edit', src: SITE.heroVideo, poster: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=80' },
  { title: 'Pearls, Reimagined', src: SITE.heroVideo, poster: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80' },
  { title: 'Styling the Home', src: SITE.heroVideo, poster: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=900&q=80' },
];
