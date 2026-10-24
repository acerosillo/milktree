import Link from 'next/link';
import { MessageCircle, Truck } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { DELIVERY_RATES, SITE } from '@/lib/site';

export default function RatesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-[11px] font-headline uppercase tracking-[0.3em] text-accent mb-3">Rates</p>
            <h1 className="font-display text-4xl md:text-5xl mb-4">Delivery Rates</h1>
            <div className="w-14 h-px bg-accent mx-auto mb-5" />
            <p className="text-muted-foreground">Every piece is carefully packed and sent with care, or ready to collect from the boutique.</p>
          </div>

          <div className="border bg-card shadow-sm">
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 border-b px-6 py-3 text-[10px] font-headline uppercase tracking-[0.2em] text-muted-foreground">
              <span>Service</span>
              <span className="hidden sm:block">Delivery Time</span>
              <span className="text-right">Rate</span>
            </div>
            <ul className="divide-y divide-border">
              {DELIVERY_RATES.map((r) => (
                <li key={r.name} className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto] items-center gap-x-6 px-6 py-5">
                  <span className="flex items-center gap-3">
                    <Truck className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                    <span>
                      <span className="block text-sm font-medium">{r.name}</span>
                      <span className="block text-xs text-muted-foreground sm:hidden">{r.time}</span>
                    </span>
                  </span>
                  <span className="hidden sm:block text-sm text-muted-foreground">{r.time}</span>
                  <span className="text-right font-display text-2xl text-accent">{r.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-6">Questions about delivery or a piece in the gallery? We're happy to help.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-headline uppercase tracking-[0.18em] text-[11px] h-12 px-7">
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> Chat on WhatsApp</a>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-accent font-headline uppercase tracking-[0.18em] text-[11px] h-12 px-7">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
