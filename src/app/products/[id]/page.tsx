"use client";

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock product data (re-using same IDs for simplicity)
const PRODUCTS_DETAILS: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Single Espresso',
    price: 2.50,
    category: 'coffee',
    description: 'A nice blend of coffee beans',
    attributes: ['Oat Milk', 'Almond Milk', 'Soy Milk'],
    images: ['prod-earrings', 'cat-coffee']
  },
  '2': {
    id: '2',
    name: 'Double Espresso',
    price: 2.70,
    category: 'coffee',
    description: 'A singular, luminous freshwater pearl suspended from a delicate 14k gold chain. This necklace embodies minimal sophistication and makes a meaningful gift for someone special.',
    attributes: ['Freshwater Pearl', '14k Solid Gold Chain', 'Adjustable length: 16-18 inches'],
    images: ['prod-necklace', 'cat-coffee']
  },
  '3': {
    id: '3',
    name: 'Egg Burger',
    price: 6.95,
    category: 'brunch',
    description: 'Our signature structured tote, crafted from the finest Italian pebbled leather. Spacious enough for your essentials and a small tablet, it features a minimalist silhouette that transcends seasons.',
    attributes: ['Italian Calfskin Leather', 'Reinforced handles', 'Interior zip pocket'],
    images: ['prod-bag', 'cat-brunch']
  },
  '4': {
    id: '4',
    name: 'Sweet Pancakes V',
    price: 11.95,
    category: 'dessert',
    description: 'Evoke a sense of grounding and calm with our hand-poured sandalwood and amber candle. Housed in a matte ceramic vessel, it burns cleanly for up to 50 hours.',
    attributes: ['Soy wax blend', 'Wood wick', 'Burn time: 50+ hours'],
    images: ['prod-candle', 'cat-dessert']
  },
  '5': {
    id: '5',
    name: 'French Toast V',
    price: 11.95,
    category: 'dessert',
    description: 'Evoke a sense of grounding and calm with our hand-poured sandalwood and amber candle. Housed in a matte ceramic vessel, it burns cleanly for up to 50 hours.',
    attributes: ['Soy wax blend', 'Wood wick', 'Burn time: 50+ hours'],
    images: ['prod-candle', 'cat-dessert']
  },
  '6': {
    id: '6',
    name: 'Beef Burger',
    price: 10.95,
    category: 'brunch',
    description: 'Evoke a sense of grounding and calm with our hand-poured sandalwood and amber candle. Housed in a matte ceramic vessel, it burns cleanly for up to 50 hours.',
    attributes: ['Soy wax blend', 'Wood wick', 'Burn time: 50+ hours'],
    images: ['prod-candle', 'cat-brunch']
  },
  '7': {
    id: '7',
    name: 'Long Black',
    price: 3.10,
    category: 'coffee',
    description: 'Evoke a sense of grounding and calm with our hand-poured sandalwood and amber candle. Housed in a matte ceramic vessel, it burns cleanly for up to 50 hours.',
    attributes: ['Soy wax blend', 'Wood wick', 'Burn time: 50+ hours'],
    images: ['prod-candle', 'cat-coffee']
  },
  '8': {
    id: '8',
    name: 'Health with Gronola',
    price: 8.95,
    category: 'dessert',
    description: 'Evoke a sense of grounding and calm with our hand-poured sandalwood and amber candle. Housed in a matte ceramic vessel, it burns cleanly for up to 50 hours.',
    attributes: ['Soy wax blend', 'Wood wick', 'Burn time: 50+ hours'],
    images: ['prod-candle', 'cat-dessert']
  }
};

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS_DETAILS[id] || PRODUCTS_DETAILS['1']; // Fallback
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const images = product.images.map((imgId: string) =>
    PlaceHolderImages.find(i => i.id === imgId)?.imageUrl || 'https://static.wixstatic.com/media/53937d_b7b8e02941a44af9935f3dedaab7a013~mv2.jpg/v1/fill/w_888,h_885,fp_0.68_0.56,q_90,enc_avif,quality_auto/53937d_b7b8e02941a44af9935f3dedaab7a013~mv2.jpg'
  );

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: images[0]
    });
    toast({
      title: "Added to Bag",
      description: `${product.name} has been added to your shopping bag.`,
    });
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                <Image
                  src={images[activeImageIdx]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={cn(
                      "relative aspect-[3/4] bg-muted overflow-hidden border-2 transition-all",
                      activeImageIdx === idx ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image src={img} alt={`${product.name} thumbnail ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                  <Link href="/products" className="hover:text-primary">Shop</Link>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-primary">{product.category}</span>
                </nav>
                <h1 className="text-3xl md:text-4xl font-headline font-light uppercase tracking-widest mb-4">
                  {product.name}
                </h1>
                <p className="text-xl font-body italic text-muted-foreground mb-6">
                  £{product.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                  ))}
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">(12 reviews)</span>
                </div>
              </div>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="font-headline text-xs uppercase tracking-[0.2em] mb-3">Description</h3>
                  <p className="font-body text-foreground/80 leading-relaxed italic">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-headline text-xs uppercase tracking-[0.2em] mb-3">Details</h3>
                  <ul className="list-disc list-inside font-body text-sm text-foreground/70 space-y-1">
                    {product.attributes.map((attr: string, i: number) => (
                      <li key={i}>{attr}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t space-y-4">
                <Button
                  onClick={handleAddToCart}
                  className="w-full font-headline uppercase tracking-[0.3em] py-7 text-xs"
                >
                  Add to cart
                </Button>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
