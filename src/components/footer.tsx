import Link from 'next/link';
import { Instagram, Mail, MapPin, MessageCircle, Leaf } from 'lucide-react';
import { Logo } from '@/components/logo';
import { SITE } from '@/lib/site';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#videos', label: 'Videos' },
  { href: '/#services', label: 'Services' },
  { href: '/rates', label: 'Rates' },
  { href: '/contact', label: 'Contact' },
];

const EXPLORE_LINKS = [
  { href: '/gallery?category=jewellery', label: 'Jewellery' },
  { href: '/gallery?category=accessories', label: 'Accessories' },
  { href: '/gallery?category=home', label: 'Home Decor' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact#book', label: 'Book an Appointment' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr] gap-12 lg:gap-8">
          <div className="flex flex-col items-start gap-5 lg:border-r lg:border-primary-foreground/10 lg:pr-8">
            <Logo light />
            <p className="text-xs leading-relaxed text-primary-foreground/70 max-w-[220px]">
              {SITE.tagline}
            </p>
            <div className="flex gap-3">
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-8 w-8 rounded-full border border-accent/50 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <MessageCircle className="h-3.5 w-3.5" />
              </a>
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-8 w-8 rounded-full border border-accent/50 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Email" className="h-8 w-8 rounded-full border border-accent/50 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline uppercase tracking-[0.2em] text-[11px] mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-primary-foreground/70">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-accent transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline uppercase tracking-[0.2em] text-[11px] mb-5">Explore</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-primary-foreground/70">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-accent transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline uppercase tracking-[0.2em] text-[11px] mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 text-xs text-primary-foreground/70">
              <li>
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Instagram className="h-4 w-4 text-accent" /> Instagram
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4 text-accent" /> Email
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent shrink-0" /> {SITE.address[1]}
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="border border-accent/50 p-5">
              <h4 className="flex items-center gap-2 font-headline uppercase tracking-[0.2em] text-[10px] text-accent mb-3">
                <Leaf className="h-3.5 w-3.5" /> Our Promise
              </h4>
              <p className="text-xs leading-relaxed text-primary-foreground/70">
                Every piece is hand-selected from independent makers, with natural materials and sustainable sourcing at our core.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-primary-foreground/10 text-center text-[11px] text-primary-foreground/50">
          © {new Date().getFullYear()} Madame Esmeralda London. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
