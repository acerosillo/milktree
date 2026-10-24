
import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/cart-context';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'The Milk Tree Boutique | Natural Elegance',
  description: 'The Milk Tree Boutique offers a curated collection of jewelry, accessories, and home decor with natural elegance and warmth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/30">
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
