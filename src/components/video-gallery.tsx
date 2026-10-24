"use client";

import { useState } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type Video = { title: string; src: string; poster: string };

const formatDuration = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

function VideoTile({ video }: { video: Video }) {
  const [duration, setDuration] = useState<string | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group relative aspect-video w-full overflow-hidden bg-primary text-left" aria-label={`Play ${video.title}`}>
          <video
            src={video.src}
            poster={video.poster}
            preload="metadata"
            muted
            playsInline
            onLoadedMetadata={(e) => setDuration(formatDuration(e.currentTarget.duration))}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
            <Play className="h-5 w-5 translate-x-0.5 fill-white" />
          </span>
          <span className="absolute bottom-3 left-4 font-display text-lg text-white">{video.title}</span>
          {duration && (
            <span className="absolute bottom-3 right-3 bg-black/60 px-2 py-0.5 text-[10px] tracking-wider text-white">
              {duration}
            </span>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl overflow-hidden border-none bg-black p-0">
        <DialogTitle className="sr-only">{video.title}</DialogTitle>
        <video src={video.src} controls autoPlay playsInline className="aspect-video w-full" />
      </DialogContent>
    </Dialog>
  );
}

export function VideoGallery({ videos }: { videos: Video[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {videos.map((v) => (
        <VideoTile key={v.title} video={v} />
      ))}
    </div>
  );
}
