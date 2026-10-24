import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  href?: string;
  linkLabel?: string;
  className?: string;
};

export function SectionHeading({ title, href, linkLabel, className }: Props) {
  return (
    <div className={cn('flex items-center justify-between gap-4 mb-6', className)}>
      <h2 className="flex items-center gap-4 font-headline text-sm md:text-[15px] font-medium uppercase tracking-[0.16em]">
        {title}
        <span className="h-px w-10 bg-accent" />
      </h2>
      {href && (
        <Link href={href} className="flex shrink-0 items-center gap-2 text-[10px] md:text-[11px] font-headline uppercase tracking-[0.16em] hover:text-accent transition-colors">
          {linkLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
