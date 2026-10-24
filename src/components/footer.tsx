
import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-headline font-semibold tracking-widest uppercase">
                The Milk Tree
              </span>
              <span className="text-xs uppercase tracking-[0.3em] opacity-70">
                London
              </span>
            </Link>
            <p className="text-sm font-body opacity-80 leading-relaxed max-w-xs">
              𝙲afe & Salad Bar Cℴffℯℯ~ℬrunch~Dℯssℯrt 𝙷𝙼𝙲 𝙷𝚊𝚕𝚊𝚕 𝙲𝚎𝚛𝚝𝚒𝚏𝚒𝚎𝚍 𝙰 𝚗𝚎𝚠 𝚜𝚘𝚌𝚒𝚊𝚕 𝚎𝚊𝚝𝚎𝚛𝚢 𝚒𝚗 𝙲𝚊𝚗𝚗𝚒𝚗𝚐 Town
            </p>
          </div>

          <div>
            <h4 className="font-headline uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm font-body opacity-80">
              <li><Link href="/products" className="hover:opacity-100 transition-opacity">Shop All</Link></li>
              <li><Link href="/about" className="hover:opacity-100 transition-opacity">Our Story</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm font-body opacity-80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>London, United Kingdom</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@themilktreelondon.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline uppercase tracking-widest text-sm mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/themilktree.london/?hl=en" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs opacity-60 font-body uppercase tracking-widest">
          © {new Date().getFullYear()} The Milk Tree London. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
