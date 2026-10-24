
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HomePage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const categories = [
    {
      title: 'Coffee',
      href: '/products?category=coffee',
      img: PlaceHolderImages.find(i => i.id === 'cat-coffee')?.imageUrl
    },
    {
      title: 'Brunch',
      href: '/products?category=brunch',
      img: PlaceHolderImages.find(i => i.id === 'cat-brunch')?.imageUrl
    },
    {
      title: 'Dessert',
      href: '/products?category=dessert',
      img: PlaceHolderImages.find(i => i.id === 'cat-dessert')?.imageUrl
    },
  ];

  const testimonials = [
    {
      quote: "I recently had the pleasure of visiting Milk Tree in Canning Town, and it was truly a delightful experience.",
      name: "Anastasiia Dulkai"
    },
    {
      quote: "Really impressed with this spot in Canning Town, The food was very nice.",
      name: "Ahnaful A."
    },
    {
      quote: "A great place for brunch and tea! Lovely atmosphere and decor. I'm so glad that it's in our neighbourhood",
      name: "Chloe Lee"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">
          {heroImg?.imageUrl?.endsWith('.mp4') ? (
            <video
              src={heroImg.imageUrl}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover brightness-[0.9]"
            />
          ) : (
            <Image
              src={heroImg?.imageUrl || 'https://picsum.photos/1920/1080'}
              alt="Milk Tree Hero"
              fill
              priority
              className="object-cover brightness-[0.9]"
              data-ai-hint="boutique interior"
            />
          )}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-headline font-light tracking-[0.15em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Coffee Brunch Dessert
            </h1>
            <p className="text-lg md:text-xl font-body italic mb-10 opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">

              VISIT OUR BEAUTIFUL CAFE IN LONDON—PERFECT FOR WORKING,
              CATCHING UP WITH FRIENDS, OR SIMPLY UNWINDING
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-headline uppercase tracking-[0.2em] px-10 py-7 text-xs rounded-none animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
              <Link href="/products">Explore our menu</Link>
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-headline uppercase tracking-[0.4em] text-accent mb-4">Shop by</h2>
            <h3 className="text-3xl font-headline font-light uppercase tracking-[0.1em]"></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="group relative aspect-[3/4] overflow-hidden bg-muted transition-all"
              >
                <Image
                  src={cat.img || 'https://static.wixstatic.com/media/53937d_b7b8e02941a44af9935f3dedaab7a013~mv2.jpg/v1/fill/w_888,h_885,fp_0.68_0.56,q_90,enc_avif,quality_auto/53937d_b7b8e02941a44af9935f3dedaab7a013~mv2.jpg'}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-10 left-0 w-full text-center">
                  <h4 className="text-white text-2xl font-headline font-light uppercase tracking-[0.2em]">
                    {cat.title}
                  </h4>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs uppercase tracking-widest font-headline">
                    View Menu <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-primary/5 py-32">
          <div className="container mx-auto max-w-2xl text-center">
            <h3 className="text-xl font-headline uppercase tracking-widest mb-12 text-primary">What Our Guests Say</h3>

            <Carousel className="w-full relative px-6 md:px-0">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i}>
                    <div className="flex flex-col items-center gap-6 py-6">
                      <p className="text-2xl md:text-3xl font-body italic text-primary/80 leading-relaxed text-balance">
                        {t.quote}
                      </p>
                      <span className="text-xs font-headline uppercase tracking-[0.3em] text-accent/80">
                        — {t.name}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-12" />
              <CarouselNext className="right-0 md:-right-12" />
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
