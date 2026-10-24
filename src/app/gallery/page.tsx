"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { CATEGORIES, PRODUCTS, type Product } from '@/lib/products';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/utils';

function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [selected, setSelected] = useState<Product | null>(null);

  // Follow ?category= changes from links elsewhere on the site (e.g. the footer).
  useEffect(() => setActiveCategory(categoryParam), [categoryParam]);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container py-16">
      <header className="mb-14 text-center">
        <p className="text-[11px] font-headline uppercase tracking-[0.3em] text-accent mb-3">The Collection</p>
        <h1 className="font-display text-4xl md:text-5xl mb-4">Gallery</h1>
        <div className="h-px w-14 bg-accent mx-auto" />
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "text-[11px] font-headline uppercase tracking-[0.25em] pb-1 border-b transition-all",
                activeCategory === cat.id
                  ? "text-foreground border-accent"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((piece) => (
          <button
            key={piece.id}
            onClick={() => setSelected(piece)}
            className="group relative aspect-[4/5] overflow-hidden bg-muted text-left"
          >
            <Image
              src={piece.images[0]}
              alt={piece.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <p className="font-display text-lg leading-tight">{piece.name}</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden rounded-none p-0">
          {selected && (
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
              <div className="relative aspect-[4/5] bg-muted">
                <Image src={selected.images[0]} alt={selected.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col p-8">
                <p className="text-[11px] font-headline uppercase tracking-[0.25em] text-accent mb-3">
                  {CATEGORIES.find(c => c.id === selected.category)?.label}
                </p>
                <DialogTitle className="font-display text-3xl font-normal mb-4">{selected.name}</DialogTitle>
                <div className="h-px w-14 bg-accent mb-6" />
                <DialogDescription className="text-sm leading-relaxed text-foreground/80 mb-6">
                  {selected.description}
                </DialogDescription>
                <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 mb-8">
                  {selected.attributes.map((a) => <li key={a}>{a}</li>)}
                </ul>
                <Button asChild className="mt-auto rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-headline uppercase tracking-[0.18em] text-[11px] h-12">
                  <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> Enquire on WhatsApp</a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-[60vh]">
        <Suspense fallback={<div className="container py-20 text-center">Loading gallery...</div>}>
          <GalleryContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
