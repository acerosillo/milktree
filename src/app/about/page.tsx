
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(i => i.id === 'about-image')?.imageUrl || '';

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="py-24 container max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-[11px] font-headline uppercase tracking-[0.3em] text-accent mb-3">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl mb-4">Our Story</h1>
            <div className="w-14 h-px bg-accent mx-auto" />
          </div>

          <div className="relative aspect-video mb-16 overflow-hidden bg-muted">
            <Image
              src={aboutImg}
              alt="Gold rings and a chain bracelet"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8 font-display text-xl md:text-2xl leading-relaxed text-foreground/80">
            <p>
              Founded in the heart of London, Madame Esmeralda was born from a desire to curate a collection that celebrates natural materials, artisanal craftsmanship, and the beauty of simplicity.
            </p>
            <p>
              We believe that the objects we surround ourselves with should tell a story. Whether it's a hand-poured candle that fills your home with the scent of an ancient forest, or a piece of jewelry crafted with intention, our curations are chosen for their ability to bring a sense of calm and sophistication to everyday life.
            </p>
            <p>
              Our name, Madame Esmeralda, is inspired by the emerald: rare, natural and quietly brilliant. We strive to support independent makers and sustainable practices, ensuring that elegance doesn't come at the cost of our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-center">
            <div>
              <h4 className="font-headline text-xs uppercase tracking-[0.2em] text-accent mb-4">The Curation</h4>
              <p className="text-sm text-muted-foreground">Every piece is hand-selected by our team for its timeless design and quality.</p>
            </div>
            <div>
              <h4 className="font-headline text-xs uppercase tracking-[0.2em] text-accent mb-4">The Craft</h4>
              <p className="text-sm text-muted-foreground">We prioritize artisanal methods and small-batch productions over mass manufacturing.</p>
            </div>
            <div>
              <h4 className="font-headline text-xs uppercase tracking-[0.2em] text-accent mb-4">The Ethos</h4>
              <p className="text-sm text-muted-foreground">Natural materials and sustainable sourcing are at the core of everything we do.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
