
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Settings } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CartSheetContent } from '@/components/cart-sheet';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Menu' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full flex flex-col">
      <div className="w-full bg-primary text-primary-foreground py-2 flex items-center justify-center gap-3 md:gap-4 text-[9px] sm:text-[10px] md:text-xs font-headline uppercase tracking-widest">
        <span>Order Delivery:</span>
        <a href="https://www.ubereats.com/gb/store/the-milk-tree/ko2iLAlJXjeJBUV7LZTKbQ?srsltid=AfmBOoqC8BEqUySFz9ca-ZkNDu5oCu_zpdXE_i4tYXUWlcF2EkbZO2qr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-2">
          Uber Eats
        </a>
        <span>•</span>
        <a href="https://deliveroo.co.uk/menu/london/canning-town/the-milk-tree-34-barking-road?srsltid=AfmBOorfkZYtI7sDALmWg9Tg6TGiCrV4wlJRkt73BQ253Mp9pDZ1Yjb9" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-2">
          Deliveroo
        </a>
      </div>
      <nav className="w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container relative mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-background">
                <div className="flex flex-col gap-6 pt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-xl font-headline tracking-wide hover:text-accent transition-colors",
                        pathname === link.href ? "text-accent" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-headline tracking-widest uppercase hover:text-accent transition-colors",
                  pathname === link.href ? "text-accent" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-max z-10">
            <span className="text-xl sm:text-2xl md:text-3xl font-headline font-semibold tracking-[0.2em] uppercase text-primary text-center pl-[0.2em]">
              The Milk Tree
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-muted-foreground -mt-1 text-center pl-[0.4em]">
              London
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-headline tracking-widest uppercase hover:text-accent transition-colors",
                    pathname === link.href ? "text-accent" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-1">
              {/* <Link href="/admin/description-generator" title="Admin AI Tool">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                <Settings className="h-5 w-5" />
              </Button>
            </Link> */}

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative hover:bg-accent/10">
                    <ShoppingBag className="h-6 w-6" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md bg-background">
                  <SheetHeader>
                    <SheetTitle className="font-headline uppercase tracking-widest text-lg">Your Shopping Bag</SheetTitle>
                  </SheetHeader>
                  <CartSheetContent />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
