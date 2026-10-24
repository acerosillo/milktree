"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CalendarDays, Clock, MapPin, Navigation } from 'lucide-react';
import { OPENING_HOURS, SITE } from '@/lib/site';
import { cn } from '@/lib/utils';

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address[0])}`;

function Status({ day }: { day: number | null }) {
  if (day === null) return <span className="text-muted-foreground">—</span>;
  const hours = OPENING_HOURS[day];
  return (
    <span className={cn('text-[11px]', hours ? 'text-emerald-600' : 'text-muted-foreground')}>
      {hours ? `${hours.open} – ${hours.close}` : 'Closed'}
    </span>
  );
}

export function StoreHours() {
  // Resolved after mount so the statically exported HTML doesn't bake in the build day.
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(new Date().getDay()), []);

  const openDays = OPENING_HOURS.filter(Boolean).length;
  const rows = [
    { icon: CalendarDays, label: 'Today', value: <Status day={today} /> },
    { icon: Clock, label: 'Tomorrow', value: <Status day={today === null ? null : (today + 1) % 7} /> },
    {
      icon: CalendarDays,
      label: 'This Week',
      value: (
        <span className="flex items-center gap-1.5 text-[11px] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Open {openDays} days
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <ul className="flex flex-col divide-y divide-border">
        {rows.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-center justify-between py-3 text-xs">
            <span className="flex items-center gap-3">
              <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} /> {label}
            </span>
            {value}
          </li>
        ))}
        <li className="flex items-center justify-between py-3 text-xs">
          <span className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-accent" strokeWidth={1.5} /> Location
          </span>
          <span className="text-[11px]">{SITE.address[1]}</span>
        </li>
      </ul>
      <div className="mt-auto grid gap-2 pt-4">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-accent py-3 text-[10px] font-headline uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Navigation className="h-3.5 w-3.5" /> Get Directions
        </a>
        <Link href="/contact" className="text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-accent">
          Full opening hours
        </Link>
      </div>
    </div>
  );
}
