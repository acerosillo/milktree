import { NextResponse } from 'next/server';
import { FEATURED_VIDEOS, VideoItem } from '@/lib/site';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const feedUrl = process.env.NEXT_PUBLIC_INSTAGRAM_FEED_URL;

  // 1. If a dedicated JSON feed URL (e.g. Behold.so or Curator) is configured
  if (feedUrl) {
    try {
      const res = await fetch(feedUrl, { next: { revalidate: 3600 } });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          const videos: VideoItem[] = data
            .filter((item: any) => item.mediaType === 'VIDEO')
            .slice(0, 6)
            .map((item: any) => ({
              id: String(item.id),
              title: item.caption ? item.caption.split('\n')[0].slice(0, 60) : 'Instagram Reel',
              src: item.mediaUrl,
              poster: item.thumbnailUrl || item.mediaUrl,
              instagramUrl: item.permalink,
              embedUrl: item.permalink ? `${item.permalink.replace(/\/$/, '')}/embed` : undefined,
            }));
          if (videos.length > 0) {
            return NextResponse.json({ videos, source: 'behold' });
          }
        }
      }
    } catch (err) {
      console.warn('Failed to fetch from custom Instagram feed URL:', err);
    }
  }

  // 2. If Meta Instagram Graph API Access Token is configured
  if (token) {
    try {
      const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`;
      const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.data)) {
          const videos: VideoItem[] = data.data
            .filter((item: any) => item.media_type === 'VIDEO')
            .slice(0, 6)
            .map((item: any) => ({
              id: String(item.id),
              title: item.caption ? item.caption.split('\n')[0].slice(0, 60) : 'Instagram Reel',
              src: item.media_url,
              poster: item.thumbnail_url || item.media_url,
              instagramUrl: item.permalink,
              embedUrl: item.permalink ? `${item.permalink.replace(/\/$/, '')}/embed` : undefined,
            }));
          if (videos.length > 0) {
            return NextResponse.json({ videos, source: 'graph-api' });
          }
        }
      }
    } catch (err) {
      console.warn('Failed to fetch from Instagram Graph API:', err);
    }
  }

  // Fallback to curated videos from site configuration
  return NextResponse.json({ videos: FEATURED_VIDEOS, source: 'curated' });
}

