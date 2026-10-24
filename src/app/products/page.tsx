
"use client";

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Mock product data
const PRODUCTS = [
  { id: '1', name: 'Single Espresso', price: 2.50, category: 'coffee', img: 'prod-earrings' },
  { id: '2', name: 'Double Espresso', price: 2.70, category: 'coffee', img: 'prod-necklace' },
  { id: '3', name: 'Egg Burger', price: 6.95, category: 'brunch', img: 'prod-bag' },
  { id: '4', name: 'Sweet Pancakes V', price: 11.95, category: 'dessert', img: 'prod-candle' },
  { id: '5', name: 'French Toast V', price: 11.95, category: 'dessert', img: 'cat-home' },
  { id: '6', name: 'Beef Burger', price: 10.95, category: 'brunch', img: 'cat-accessories' },
  { id: '7', name: 'Long Black', price: 3.10, category: 'coffee', img: 'cat-jewelry' },
  { id: '8', name: 'Health with Gronola', price: 8.95, category: 'dessert', img: 'hero-bg' },
];

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = [
    { id: 'all', label: 'All Food' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'brunch', label: 'Brunch' },
    { id: 'dessert', label: 'Desserts' },
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-headline font-light uppercase tracking-[0.2em] mb-4">Our Menu</h1>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "text-xs font-headline uppercase tracking-[0.3em] pb-1 border-b-2 transition-all",
                activeCategory === cat.id
                  ? "text-primary border-accent"
                  : "text-muted-foreground border-transparent hover:text-primary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map((product) => {
          const imgUrl = PlaceHolderImages.find(i => i.id === product.img)?.imageUrl || 'https://static.wixstatic.com/media/53937d_b7b8e02941a44af9935f3dedaab7a013~mv2.jpg/v1/fill/w_888,h_885,fp_0.68_0.56,q_90,enc_avif,quality_auto/53937d_b7b8e02941a44af9935f3dedaab7a013~mv2.jpg';
          return (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                {imgUrl?.endsWith('.mp4') ? (
                  <video
                    src={imgUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={imgUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <h3 className="font-headline text-sm tracking-widest uppercase mb-1">{product.name}</h3>
              <p className="font-body italic text-muted-foreground">£{product.price.toFixed(2)}</p>
            </Link>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground font-body italic">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-[60vh]">
        <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center">Loading collection...</div>}>
          <CatalogContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
