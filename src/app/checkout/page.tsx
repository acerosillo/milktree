
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Order Submitted",
        description: "Thank you for your order! We will contact you soon.",
      });
      clearCart();
      router.push('/');
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-24">
          <div className="text-center">
            <h1 className="text-2xl font-headline uppercase tracking-widest mb-4">Your bag is empty</h1>
            <Button asChild variant="outline">
              <a href="/products">Browse products</a>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl font-headline font-light uppercase tracking-[0.2em] mb-12 text-center">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-headline text-sm uppercase tracking-widest border-b pb-2">Contact Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] uppercase tracking-widest">Email Address</Label>
                    <Input id="email" type="email" required className="rounded-none bg-transparent" />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-headline text-sm uppercase tracking-widest border-b pb-2">Shipping Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[10px] uppercase tracking-widest">First Name</Label>
                      <Input id="firstName" required className="rounded-none bg-transparent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[10px] uppercase tracking-widest">Last Name</Label>
                      <Input id="lastName" required className="rounded-none bg-transparent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-[10px] uppercase tracking-widest">Address</Label>
                    <Input id="address" required className="rounded-none bg-transparent" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-[10px] uppercase tracking-widest">City</Label>
                      <Input id="city" required className="rounded-none bg-transparent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postcode" className="text-[10px] uppercase tracking-widest">Postcode</Label>
                      <Input id="postcode" required className="rounded-none bg-transparent" />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full font-headline uppercase tracking-[0.3em] py-7 mt-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : `Submit Order Request • £${cartTotal.toFixed(2)}`}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-background p-8 border rounded-sm h-fit">
              <h3 className="font-headline text-sm uppercase tracking-widest border-b pb-4 mb-6">Order Summary</h3>
              <div className="space-y-4 mb-8">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="font-body italic">{item.name} <span className="text-muted-foreground ml-1">x {item.quantity}</span></span>
                    <span className="font-headline">£{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-widest text-[10px]">Subtotal</span>
                  <span className="font-headline">£{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-widest text-[10px]">Shipping</span>
                  <span className="font-headline italic text-accent">Complimentary</span>
                </div>
                <div className="flex justify-between pt-4 font-bold">
                  <span className="uppercase tracking-widest text-xs">Total</span>
                  <span className="text-lg">£{cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
