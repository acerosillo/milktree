
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(i => i.id === 'about-image')?.imageUrl || '';

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="py-24 container max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-[11px] font-headline uppercase tracking-[0.3em] text-accent mb-3">About</p>
            <h1 className="font-display text-4xl md:text-5xl mb-4">Madame Esmeralda</h1>
            <div className="w-14 h-px bg-accent mx-auto" />
          </div>

          <div className="relative aspect-video mb-16 overflow-hidden bg-muted">
            <Image
              src={aboutImg}
              alt="Madame Esmeralda"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 font-display text-lg md:text-xl leading-relaxed text-foreground/85">
            <p>
              I thrive on authentic BDSM power dynamics. My world is built on respect, devotion and genuine submission. Initial contact should be formal, respectful and submissive. I don’t need you; you must demonstrate why I should want you in my world.
            </p>
            <p>
              Having begun my journey in September 2016, I bring almost a decade of experience. Over the years, I’ve evolved from an adventurous kinkster into a confident, composed and knowledgeable Dominatrix with a clear understanding of my desires and expectations.
            </p>
            <p>
              I’m not interested in receiving lengthy lists of demands or fantasies. You are the submissive, not the one setting the agenda. Your first priority should be understanding what pleases me and demonstrating how you can serve my interests.
            </p>
            <p>
              My favourite kinks include foot worship, psychological domination and roleplay. I particularly enjoy developing long-term dynamics built on trust, mutual respect and gradually deepening submission. I love training my submissives, exploring their desires and guiding them under my control.
            </p>
            <p>
              Creative roleplay is another passion, from sensual and erotic scenarios to darker, more sadistic encounters. I enjoy building tension, creating immersive experiences and losing ourselves in the intensity of a well-crafted scene.
            </p>
            <p>
              Ultimately, I enjoy everything listed on my{' '}
              <a
                href="https://madamesmeralda.com/sessions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
              >
                sessions page
              </a>
              , but access to my time, attention and wider interests is something to be earned through genuine devotion and submission.
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-border text-center flex flex-wrap justify-center gap-4">
            <Button asChild className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-headline uppercase tracking-[0.18em] text-[11px] h-12 px-7">
              <Link href="/contact#book">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none border-accent font-headline uppercase tracking-[0.18em] text-[11px] h-12 px-7">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
