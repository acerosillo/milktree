
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { SheetClose } from '@/components/ui/sheet';

export function CartSheetContent() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
        <p className="text-muted-foreground font-body italic">Your bag is currently empty.</p>
        <SheetClose asChild>
          <Button variant="outline" className="font-headline uppercase tracking-widest text-xs">
            Start Shopping
          </Button>
        </SheetClose>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 mt-8 -mx-4 px-4">
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative aspect-[3/4] w-24 overflow-hidden rounded bg-muted">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-headline text-sm font-medium leading-none">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mt-2">£{item.price.toFixed(2)}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center border rounded">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 rounded-none"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-xs font-headline">{item.quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 rounded-none"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="pt-6 border-t mt-auto space-y-4">
        <div className="flex justify-between items-center font-headline uppercase tracking-widest text-sm">
          <span>Total</span>
          <span className="text-lg">£{cartTotal.toFixed(2)}</span>
        </div>
        <p className="text-[10px] text-muted-foreground italic font-body text-center">
          Shipping and taxes calculated at checkout
        </p>
        <div className="flex flex-col gap-3">
          <SheetClose asChild>
            <Button asChild className="w-full font-headline uppercase tracking-[0.2em] py-6">
              <Link href="/checkout">Checkout</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline" className="w-full font-headline uppercase tracking-[0.2em] py-6">
              Continue Shopping
            </Button>
          </SheetClose>
        </div>
      </div>
    </div>
  );
}
