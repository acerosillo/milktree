import Link from 'next/link';
import { Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={cn('flex flex-col items-center leading-none', className)}>
      <Crown className="h-5 w-5 text-accent mb-1" strokeWidth={1.25} />
      <span className={cn('font-display text-[11px] uppercase tracking-[0.35em] pl-[0.35em]', light ? 'text-primary-foreground/80' : 'text-foreground/70')}>
        Madame
      </span>
      <span className={cn('font-display text-2xl md:text-[28px] uppercase tracking-[0.12em] pl-[0.12em]', light ? 'text-primary-foreground' : 'text-foreground')}>
        Esmeralda
      </span>
      <span className="mt-1 flex items-center gap-2 text-[8px] uppercase tracking-[0.4em] text-accent">
        <span className="h-px w-6 bg-accent/60" />
        London
        <span className="h-px w-6 bg-accent/60" />
      </span>
    </Link>
  );
}
