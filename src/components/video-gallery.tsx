"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Instagram, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { SITE, type VideoItem } from '@/lib/site';

const formatDuration = (seconds: number) => {
  if (!seconds || isNaN(seconds)) return null;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

function getEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/instagram\.com\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
  if (match && match[1]) {
    return `https://www.instagram.com/reel/${match[1]}/embed`;
  }
  return null;
}

function VideoTile({ video }: { video: VideoItem }) {
  const [duration, setDuration] = useState<string | null>(null);
  const embedUrl = video.embedUrl || getEmbedUrl(video.instagramUrl);
  const postUrl = video.instagramUrl || SITE.instagramUrl;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="group relative aspect-[9/14] sm:aspect-video w-full overflow-hidden bg-black text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          aria-label={`Play ${video.title}`}
        >
          {video.src ? (
            <video
              src={video.src}
              poster={video.poster}
              preload="metadata"
              muted
              playsInline
              onLoadedMetadata={(e) => setDuration(formatDuration(e.currentTarget.duration))}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : video.poster ? (
            <Image
              src={video.poster}
              alt={video.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-primary" />
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 transition-colors group-hover:from-black/90 group-hover:via-black/40" />

          {/* Instagram Handle Badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-headline uppercase tracking-[0.15em] text-white/90 border border-white/10">
            <Instagram className="h-3 w-3 text-accent" />
            <span>@{SITE.instagramHandle}</span>
          </div>

          {/* Play Icon */}
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/40 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
            <Play className="h-5 w-5 translate-x-0.5 fill-white" />
          </span>

          {/* Bottom Caption & Duration */}
          <div className="absolute bottom-3 inset-x-4 flex items-end justify-between gap-2">
            <span className="font-display text-lg sm:text-xl text-white leading-snug line-clamp-2">
              {video.title}
            </span>
            {duration && (
              <span className="shrink-0 bg-black/70 px-2 py-0.5 text-[10px] tracking-wider text-white border border-white/10">
                {duration}
              </span>
            )}
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl overflow-hidden border-border bg-black p-0 text-white">
        <DialogTitle className="sr-only">{video.title}</DialogTitle>
        <div className="flex flex-col">
          {embedUrl ? (
            <div className="relative aspect-[9/16] max-h-[70vh] w-full bg-black mx-auto">
              <iframe
                src={embedUrl}
                title={video.title}
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : video.src ? (
            <video
              src={video.src}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full max-h-[70vh] bg-black"
            />
          ) : (
            <div className="relative aspect-video w-full bg-muted">
              {video.poster && (
                <Image src={video.poster} alt={video.title} fill className="object-cover" />
              )}
            </div>
          )}

          <div className="p-5 bg-card text-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border">
            <div>
              <p className="font-display text-xl text-foreground leading-tight">{video.title}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1 font-headline uppercase tracking-wider">
                <Instagram className="h-3.5 w-3.5 text-accent" /> @{SITE.instagramHandle}
              </p>
            </div>
            <Button
              asChild
              className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-headline uppercase tracking-[0.18em] text-[11px] h-10 px-5 shrink-0"
            >
              <a href={postUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Instagram className="h-3.5 w-3.5" />
                Watch on Instagram
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function VideoGallery({ videos: initialVideos }: { videos?: VideoItem[] }) {
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos || []);

  useEffect(() => {
    let isMounted = true;
    fetch('/api/instagram')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data?.videos && Array.isArray(data.videos) && data.videos.length > 0) {
          setVideos(data.videos);
        }
      })
      .catch((err) => console.warn('Could not fetch live Instagram feed:', err));

    return () => {
      isMounted = false;
    };
  }, []);

  const displayVideos = videos.length > 0 ? videos : (initialVideos || []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayVideos.map((v, i) => (
          <VideoTile key={v.id || v.title || i} video={v} />
        ))}
      </div>

      {/* Instagram banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-accent/40 bg-card p-5">
        <div className="flex items-center gap-3.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 bg-accent/10 text-accent shrink-0">
            <Instagram className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-headline uppercase tracking-[0.2em] text-foreground font-medium">
              Follow @{SITE.instagramHandle}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Exclusive videos, reels, teasers and updates direct from Madame Esmeralda
            </p>
          </div>
        </div>
        <Button
          asChild
          variant="outline"
          className="rounded-none border-accent font-headline uppercase tracking-[0.18em] text-[10px] h-10 px-6 shrink-0 hover:bg-accent hover:text-accent-foreground"
        >
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Instagram className="h-3.5 w-3.5" />
            View Instagram
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </div>
    </div>
  );
}
