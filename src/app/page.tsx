import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import { VideoGallery } from '@/components/video-gallery';
import { StoreHours } from '@/components/store-hours';
import {
  ArrowRight,
  CalendarDays,
  Gem,
  Gift,
  Heart,
  LayoutGrid,
  Leaf,
  MessageCircle,
  PenLine,
  Quote,
  Sparkles,
  Star,
  Wrench,
  Home as HomeIcon,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getProduct } from '@/lib/products';
import { DELIVERY_RATES, FEATURED_VIDEOS, SITE } from '@/lib/site';

const HERO_BADGES = [
  { icon: Gem, label: 'Hand-Selected' },
  { icon: Heart, label: 'Independent Makers' },
  { icon: Leaf, label: 'Sustainably Sourced' },
];

const FEATURED_IDS = ['1', '2', '9', '5', '13', '14'];

const SERVICES = [
  { icon: Sparkles, label: 'Personal Styling' },
  { icon: Gift, label: 'Gift Wrapping' },
  { icon: Gem, label: 'Bespoke Orders' },
  { icon: PenLine, label: 'Engraving' },
  { icon: Wrench, label: 'Jewellery Care' },
  { icon: HomeIcon, label: 'Home Styling' },
];

// Placeholder reviews: replace with genuine customer reviews before going live.
const TESTIMONIALS = [
  { quote: 'Beautiful pieces and such a calm, welcoming shop. I left with a necklace I now wear every day.', name: 'Sophie R.' },
  { quote: 'Found the perfect anniversary gift. Wrapped beautifully and the quality is outstanding.', name: 'James L.' },
  { quote: 'The styling appointment was a joy. Thoughtful advice and nothing felt rushed.', name: 'Amara K.' },
  { quote: 'My home feels warmer with their ceramics and candles. Every piece feels special.', name: 'Daniel M.' },
];

export default function HomePage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const ratesImg = PlaceHolderImages.find(img => img.id === 'about-image')?.imageUrl ?? '';
  const ctaImg = PlaceHolderImages.find(img => img.id === 'cta-image')?.imageUrl ?? '';
  const featured = FEATURED_IDS.map(id => getProduct(id)!);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[78vh] min-h-[540px] max-h-[680px] w-full overflow-hidden bg-black">
          {heroImg?.imageUrl?.endsWith('.mp4') ? (
            <video
              src={heroImg.imageUrl}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={heroImg?.imageUrl || 'https://picsum.photos/1920/1080'}
              alt="Madame Esmeralda boutique"
              fill
              priority
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />

          <div className="relative z-10 container h-full flex items-center">
            <div className="max-w-xl text-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <p className="text-[11px] font-headline uppercase tracking-[0.3em] text-accent mb-5">Exclusive companion</p>
              <h1 className="font-display text-5xl md:text-7xl font-normal leading-[1.05]">
                Luxury Companion
                <span className="block italic text-4xl md:text-6xl mt-2 text-white/90">for Unforgetable Moments</span>
              </h1>
              <div className="h-px w-14 bg-accent my-8" />
              <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-md mb-10">
                Sophisticated, charming and discreet companion providing unforgettable experiences tailored just for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-headline uppercase tracking-[0.18em] text-[11px] h-12 px-7">
                  <Link href="/gallery">View Gallery <LayoutGrid /></Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none border-accent bg-transparent text-white hover:bg-white hover:text-primary font-headline uppercase tracking-[0.18em] text-[11px] h-12 px-7">
                  <Link href="/contact#book"><CalendarDays /> Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>

          <ul className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-10 flex-col gap-8 border-l border-white/15 pl-8 text-white">
            {HERO_BADGES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50">
                  <Icon className="h-5 w-5" strokeWidth={1.25} />
                </span>
                <span className="text-[10px] font-headline uppercase tracking-[0.15em]">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Featured Gallery */}
        <section id="gallery" className="scroll-mt-36 container pt-14">
          <SectionHeading title="Featured Gallery" href="/gallery" linkLabel="View all photos" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {featured.map((p) => (
              <Link key={p.id} href="/gallery" className="group relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="font-display text-base leading-tight">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Videos */}
        <section id="videos" className="scroll-mt-36 container pt-12">
          <SectionHeading title="Featured Videos" href={SITE.instagramUrl} linkLabel="More on Instagram" />
          <VideoGallery videos={FEATURED_VIDEOS} />
        </section>

        {/* Services / About / Visit */}
        <section id="services" className="scroll-mt-36 container pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr_0.85fr] gap-6">
            <div className="border bg-card p-6 shadow-sm">
              <SectionHeading title="Our Services" />
              <div className="grid grid-cols-3 border-t border-l">
                {SERVICES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center justify-center gap-3 border-b border-r px-2 py-5 text-center">
                    <Icon className="h-7 w-7 text-accent" strokeWidth={1.1} />
                    <span className="text-[11px] leading-tight">{label}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact#book" className="mt-5 flex items-center justify-center gap-2 text-[10px] font-headline uppercase tracking-[0.18em] text-accent hover:underline underline-offset-4">
                Enquire about a service <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="border bg-card p-6 shadow-sm grid grid-cols-1 sm:grid-cols-[1fr_0.9fr] gap-6">
              <div className="flex flex-col">
                <SectionHeading title="Delivery Rates" />
                <ul className="divide-y divide-border mb-6">
                  {DELIVERY_RATES.map((r) => (
                    <li key={r.name} className="flex items-baseline justify-between gap-4 py-2.5">
                      <span>
                        <span className="block text-xs font-medium">{r.name}</span>
                        <span className="block text-[11px] text-muted-foreground">{r.time}</span>
                      </span>
                      <span className="shrink-0 font-display text-lg text-accent">{r.price}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-auto self-start rounded-none font-headline uppercase tracking-[0.18em] text-[10px] h-10 px-6">
                  <Link href="/rates">View All Rates</Link>
                </Button>
              </div>
              <div className="relative aspect-[4/5] sm:aspect-auto min-h-[240px] overflow-hidden bg-muted">
                <Image src={ratesImg} alt="Gold rings and a chain bracelet" fill sizes="(min-width: 1024px) 20vw, 100vw" className="object-cover" />
              </div>
            </div>

            <div className="border bg-card p-6 shadow-sm flex flex-col">
              <SectionHeading title="Visit the Boutique" />
              <StoreHours />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-14">
          <h2 className="flex items-center justify-center gap-4 font-headline text-sm md:text-[15px] font-medium uppercase tracking-[0.16em] mb-8">
            What Our Customers Say
            <span className="h-px w-10 bg-accent" />
          </h2>
          <Carousel opts={{ align: 'start', loop: true }} className="px-12">
            <CarouselContent>
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                  <figure className="h-full border bg-card p-6 shadow-sm flex flex-col">
                    <Quote className="h-6 w-6 text-accent mb-3" strokeWidth={1.25} />
                    <blockquote className="text-sm leading-relaxed text-foreground/80 mb-5">{t.quote}</blockquote>
                    <figcaption className="mt-auto flex items-center justify-between">
                      <span className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                        ))}
                      </span>
                      <span className="text-xs text-muted-foreground">– {t.name}</span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground" />
            <CarouselNext className="right-0 border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground" />
          </Carousel>
        </section>

        {/* Call to action */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-56 md:h-auto md:min-h-[260px]">
              <Image src={ctaImg} alt="Gold and silver pendants" fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-primary" />
            </div>
            <div className="flex flex-col items-center justify-center text-center px-6 py-12">
              <h2 className="font-display text-3xl md:text-4xl mb-2">Looking for something unforgettable?</h2>
              <p className="text-sm text-primary-foreground/70 mb-8">Let us help you find the perfect piece.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-headline uppercase tracking-[0.18em] text-[11px] h-12 px-7">
                  <Link href="/contact#book"><CalendarDays /> Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-headline uppercase tracking-[0.18em] text-[11px] h-12 px-7">
                  <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> Chat on WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
