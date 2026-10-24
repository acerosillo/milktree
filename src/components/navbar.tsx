"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Leaf, Gem, Heart, MessageCircle, Instagram } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/utils';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#videos', label: 'Videos' },
  { href: '/#services', label: 'Services' },
  { href: '/rates', label: 'Rates' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full flex flex-col">
      <div className="w-full bg-primary text-primary-foreground/90 text-[10px] font-headline uppercase tracking-[0.18em]">
        <div className="container h-9 flex items-center justify-center md:justify-between">
          <div className="hidden md:block w-40" />
          <div className="flex items-center gap-6 md:gap-10">
            <span className="flex items-center gap-2"><Gem className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} /> Hand-Selected Pieces</span>
            <span className="hidden sm:flex items-center gap-2"><Heart className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} /> Independent Makers</span>
            <span className="flex items-center gap-2"><Leaf className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} /> Sustainably Sourced</span>
          </div>
          <div className="hidden md:flex items-center justify-end gap-6 w-40 normal-case tracking-normal text-[11px]">
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Instagram className="h-3.5 w-3.5" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <nav className="w-full border-b bg-background/95 backdrop-blur-md">
        <div className="container relative h-24 flex items-center justify-between gap-6">
          <div className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-accent/10" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-background">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 pt-10">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-sm font-headline uppercase tracking-[0.2em] hover:text-accent transition-colors",
                        pathname === link.href ? "text-accent" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-headline uppercase tracking-[0.2em] text-xs py-6">
                    <Link href="/contact#book" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Logo className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0" />

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-[11px] font-headline font-medium uppercase tracking-[0.18em] hover:text-accent transition-colors",
                    active ? "text-foreground" : "text-foreground/75"
                  )}
                >
                  {link.label}
                  {active && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-6 bg-accent" />}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden md:inline-flex rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-headline uppercase tracking-[0.18em] text-[11px] h-11 px-6">
              <Link href="/contact#book">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
