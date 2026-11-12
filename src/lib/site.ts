// Shared contact details and opening hours used across the site.
export const SITE = {
  name: 'Madame Esmeralda',
  tagline: 'Dominatrix, companion and authentic BDSM power dynamics.',
  email: 'hello@madamesmeralda.com',
  phone: '+44 (0) 20 7946 0123',
  whatsappUrl: 'https://wa.me/442079460123',
  instagramUrl: 'https://www.instagram.com/madam_esmeralda2',
  instagramHandle: 'madam_esmeralda2',
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

export type VideoItem = {
  id?: string;
  title: string;
  src?: string;
  poster?: string;
  instagramUrl?: string;
  embedUrl?: string;
};

export const FEATURED_VIDEOS: VideoItem[] = [
  {
    id: 'reel-1',
    title: 'Boudoir & Power Dynamics',
    src: SITE.heroVideo,
    poster: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900&q=80',
    instagramUrl: 'https://www.instagram.com/reel/DVI_g2CCEvs/',
  },
  {
    id: 'reel-2',
    title: 'Dominance & Psychological Play',
    src: SITE.heroVideo,
    poster: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80',
    instagramUrl: 'https://www.instagram.com/madam_esmeralda2',
  },
  {
    id: 'reel-3',
    title: 'Curated Encounters & London Sessions',
    src: SITE.heroVideo,
    poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80',
    instagramUrl: 'https://www.instagram.com/madam_esmeralda2',
  },
];
