module.exports = [
"[project]/.next-internal/server/app/api/instagram/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/site.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared contact details and opening hours used across the site.
__turbopack_context__.s([
    "DELIVERY_RATES",
    ()=>DELIVERY_RATES,
    "FEATURED_VIDEOS",
    ()=>FEATURED_VIDEOS,
    "OPENING_HOURS",
    ()=>OPENING_HOURS,
    "SITE",
    ()=>SITE
]);
const SITE = {
    name: 'Madame Esmeralda',
    tagline: 'Dominatrix, companion and authentic BDSM power dynamics.',
    email: 'hello@madamesmeralda.com',
    phone: '+44 (0) 20 7946 0123',
    whatsappUrl: 'https://wa.me/442079460123',
    instagramUrl: 'https://www.instagram.com/madam_esmeralda2',
    instagramHandle: 'madam_esmeralda2',
    address: [
        '34 Barking Rd, London E16 1EQ',
        'Canning Town, London'
    ],
    heroVideo: 'https://video.wixstatic.com/video/53937d_200fea536e0a463b9e795bf592722371/1080p/mp4/file.mp4'
};
const OPENING_HOURS = [
    {
        open: '8:00am',
        close: '7:00pm'
    },
    null,
    {
        open: '7:30am',
        close: '8:00pm'
    },
    {
        open: '7:30am',
        close: '8:00pm'
    },
    {
        open: '7:30am',
        close: '8:00pm'
    },
    {
        open: '7:30am',
        close: '8:00pm'
    },
    {
        open: '7:30am',
        close: '8:00pm'
    }
];
const DELIVERY_RATES = [
    {
        name: 'Collect from the Boutique',
        time: 'Ready same day',
        price: 'Free'
    },
    {
        name: 'London Courier',
        time: 'Same or next day',
        price: '£12'
    },
    {
        name: 'UK Standard',
        time: '3–5 working days',
        price: '£4.95'
    },
    {
        name: 'UK Express',
        time: 'Next working day',
        price: '£9.95'
    },
    {
        name: 'International',
        time: '5–10 working days',
        price: 'From £18'
    }
];
const FEATURED_VIDEOS = [
    {
        id: 'reel-1',
        title: 'Boudoir & Power Dynamics',
        src: SITE.heroVideo,
        poster: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900&q=80',
        instagramUrl: 'https://www.instagram.com/reel/DVI_g2CCEvs/'
    },
    {
        id: 'reel-2',
        title: 'Dominance & Psychological Play',
        src: SITE.heroVideo,
        poster: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80',
        instagramUrl: 'https://www.instagram.com/madam_esmeralda2'
    },
    {
        id: 'reel-3',
        title: 'Curated Encounters & London Sessions',
        src: SITE.heroVideo,
        poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80',
        instagramUrl: 'https://www.instagram.com/madam_esmeralda2'
    }
];
}),
"[project]/src/app/api/instagram/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-route] (ecmascript)");
;
;
const revalidate = 3600; // Cache for 1 hour
async function GET() {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    const feedUrl = process.env.NEXT_PUBLIC_INSTAGRAM_FEED_URL;
    // 1. If a dedicated JSON feed URL (e.g. Behold.so or Curator) is configured
    if (feedUrl) {
        try {
            const res = await fetch(feedUrl, {
                next: {
                    revalidate: 3600
                }
            });
            if (res.ok) {
                const data = await res.json();
                if (Array.isArray(data)) {
                    const videos = data.filter((item)=>item.mediaType === 'VIDEO').slice(0, 6).map((item)=>({
                            id: String(item.id),
                            title: item.caption ? item.caption.split('\n')[0].slice(0, 60) : 'Instagram Reel',
                            src: item.mediaUrl,
                            poster: item.thumbnailUrl || item.mediaUrl,
                            instagramUrl: item.permalink,
                            embedUrl: item.permalink ? `${item.permalink.replace(/\/$/, '')}/embed` : undefined
                        }));
                    if (videos.length > 0) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            videos,
                            source: 'behold'
                        });
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
            const res = await fetch(apiUrl, {
                next: {
                    revalidate: 3600
                }
            });
            if (res.ok) {
                const data = await res.json();
                if (data && Array.isArray(data.data)) {
                    const videos = data.data.filter((item)=>item.media_type === 'VIDEO').slice(0, 6).map((item)=>({
                            id: String(item.id),
                            title: item.caption ? item.caption.split('\n')[0].slice(0, 60) : 'Instagram Reel',
                            src: item.media_url,
                            poster: item.thumbnail_url || item.media_url,
                            instagramUrl: item.permalink,
                            embedUrl: item.permalink ? `${item.permalink.replace(/\/$/, '')}/embed` : undefined
                        }));
                    if (videos.length > 0) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            videos,
                            source: 'graph-api'
                        });
                    }
                }
            }
        } catch (err) {
            console.warn('Failed to fetch from Instagram Graph API:', err);
        }
    }
    // Fallback to curated videos from site configuration
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        videos: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FEATURED_VIDEOS"],
        source: 'curated'
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__49a8e3ab._.js.map