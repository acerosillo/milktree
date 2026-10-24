
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container max-w-5xl">
          <div id="book" className="scroll-mt-40 text-center mb-16">
            <p className="text-[11px] font-headline uppercase tracking-[0.3em] text-accent mb-3">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl mb-4">Get in Touch</h1>
            <div className="w-14 h-px bg-accent mx-auto mb-5" />
            <p className="text-muted-foreground">Questions, bespoke orders or a private styling appointment. We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="font-headline text-sm uppercase tracking-widest border-b pb-2">Our Shop</h3>
                <div className="space-y-4 font-body italic text-foreground/80">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-accent shrink-0" />
                    <div>
                      <p>34 Barking Rd, London E16 1EQ</p>
                      <p>Canning Town, London</p>
                      <p>Opening Hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-accent shrink-0" />
                    <p>{SITE.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-accent shrink-0" />
                    <p>+44 (0) 20 7946 0123</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-headline text-sm uppercase tracking-widest border-b pb-2">Opening Hours</h3>
                <div className="font-body italic text-sm space-y-2 opacity-80">
                  <div className="flex justify-between">
                    <span>Tuesday - Saturday</span>
                    <span>7:30AM - 8:00PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>8:00AM - 7:00PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-sm">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] uppercase tracking-widest">Your Name</Label>
                  <Input id="name" className="rounded-none bg-transparent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-widest">Email Address</Label>
                  <Input id="email" type="email" className="rounded-none bg-transparent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[10px] uppercase tracking-widest">Subject</Label>
                  <Input id="subject" placeholder="e.g. Book a styling appointment" className="rounded-none bg-transparent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-widest">Message</Label>
                  <Textarea id="message" className="min-h-[150px] rounded-none bg-transparent" />
                </div>
                <Button className="w-full rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-headline uppercase tracking-[0.2em] py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
