# Samuel Ruiz — Portfolio

Mobile-first, accessible, SEO-optimized portfolio built to showcase work and win clients.

**Stack:** Next.js 16 (App Router, static) · React 19 · TypeScript 6 · plain CSS (no UI-lib runtime) · Vitest + Testing Library

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm test` | Unit tests (`test:watch`, `test:coverage` also available) |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |

## Editing content

All copy, projects, services, awards and links live in [`data/site.ts`](data/site.ts).
Set `NEXT_PUBLIC_SITE_URL` to your production domain (defaults to `https://samueldeveloper.com`) so canonical URLs, sitemap, Open Graph and JSON-LD are correct.

## What's built in

- **SEO:** Metadata API (title, description, canonical, Open Graph, Twitter), JSON-LD graph (Person, WebSite, ProfilePage, project ItemList), `sitemap.xml`, `robots.txt`, web manifest, generated OG image.
- **Performance:** statically prerendered, self-hosted fonts via `next/font`, AVIF/WebP images (~9.5 MB → ~220 KB of source images), zero client JS except the mobile menu, CSS-only scroll animations.
- **Accessibility:** skip link, landmarks, one h1, visible focus, 44px+ touch targets, new-tab link announcements, reduced-motion and forced-colors support.
- **Security headers:** HSTS, nosniff, frame deny, referrer and permissions policies.

## Deploy note

HSTS preload header is set; remove it in `next.config.ts` if the domain isn't HTTPS-only.
