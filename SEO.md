# SEO Strategy & Implementation Guide for LinuxWale

_Last updated: 2025-08-18_

This document explains the current SEO setup, why each piece exists, and how to extend or maintain it. Use it as a playbook when adding pages, changing metadata, or enhancing visibility.

---
## 1. Core Identity & Target Queries
Primary brand: **LinuxWale**  
Common variants & misspellings captured intentionally: `Linux Wale`, `Linux Vale`, `Linux Waale`, `Linux Vaale`, `Linux Wala`, plus Devanagari usage (`लिनक्स वाले`).  
Focus themes: Linux education, FOSS, privacy, open source community, installation & dual boot support.

Why: Including variants across metadata, structured data, and a subtle on‑page block helps search engines associate typos with the correct canonical entity without keyword stuffing.

---
## 2. Current Technical SEO Elements
| Element | Location | Purpose | Notes |
|---------|----------|---------|-------|
| Global metadata config | `src/app/layout.tsx` | Brand-wide defaults, canonical, OG/Twitter, keywords | Uses Next.js Metadata API (recommended approach) |
| Page-specific metadata | `/about`, `/services`, `/contact` page files | More relevant snippets per intent | Include canonical URLs ending with trailing slash |
| Canonical URL | `layout.tsx` + `alternates.canonical` | Duplicate content prevention | Root canonical set to `https://linuxwale.in/` |
| Robots rules | `src/app/robots.ts` | Crawl permission + sitemap pointer | Simple allow-all |
| Sitemap | `src/app/sitemap.ts` | URL discovery & priority hints | Update when adding pages |
| Structured Data (Organization + WebSite) | Injected in `<head>` of `layout.tsx` | Entity recognition, brand + search action | Extend with more `sameAs` only for real, live profiles |
| Social profile list (`sameAs`) | Organization schema | Knowledge panel reinforcement | Remove dead URLs to avoid 404 signals |
| Open Graph image | `public/images/LW_W_on_B.webp` | Share card (1200x630) | Currently using static logo asset |
| Twitter image | `public/images/LW_W_on_B.webp` | X/Twitter large summary | Shares same static asset |
| Misspellings block | Tail of `src/app/page.tsx` | Variant association | Low-visibility styling to reduce UX impact |
| .com → .in client redirect | Inline script in `layout.tsx` | Fallback domain consolidation | Replace with server 301 (preferred) |

---
## 3. What Still Needs Attention (Backlog)
Priority order:
1. Add **server-side 301** redirects from `linuxwale.com` (and `www.` variants) to `https://linuxwale.in`.
2. Add **Search Console** & **Bing Webmaster** verification meta tags (place inside `verification.other`).
3. Provide **`og:image` static asset** once designed (optional – dynamic works now).
4. Implement **FAQPage schema** (ideal for reviving the commented FAQ on `/contact`).
5. Implement **Offer / Service schema** (for installation & dual boot in `/services`).
6. Create **blog or knowledge base** to target long-tail queries (e.g., "dual boot secure boot", "linux install help india").
7. Add **RSS/Atom feed** (improves discovery & developer goodwill).
8. Monitor coverage & indexing in Search Console weekly for first 2–3 months.

---
## 4. Adding a New Page (Checklist)
When you add `src/app/<slug>/page.tsx`:
1. Export a `metadata` object with:
   - `title` (short, intent-focused)
   - `description` (120–155 chars)
   - `alternates: { canonical: 'https://linuxwale.in/<slug>/' }`
   - OPTIONAL: `openGraph` / `twitter` overrides if distinct
2. Add entry to `sitemap.ts` (URL + changeFrequency + priority).
3. If evergreen, link internally from at least 1 existing page (avoid orphan pages).
4. Avoid duplicating root-level keywords unless needed—focus on page-specific intent.
5. If page contains lists / Q&A / services, consider a relevant schema snippet.

---
## 5. Structured Data Extensions (Templates)
### FAQPage (example snippet)
Add inside a `<script type="application/ld+json">` (only if FAQ is visible to users):
```
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contribute to LinuxWale?",
      "acceptedAnswer": {"@type": "Answer","text": "Join our Telegram, help users, create tutorials, or contribute code."}
    }
  ]
}
```

### Offer / Service (Dual Boot example)
```
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Linux Dual Boot Setup",
  "provider": {"@type": "Organization","name": "LinuxWale"},
  "areaServed": "IN",
  "description": "Safe dual boot configuration (Linux + Windows) with partition & bootloader setup.",
  "offers": {"@type": "Offer","priceCurrency": "INR","price": "700"}
}
```

Place only one schema block per type per page (avoid excessive duplication).

---
## 6. Keywords Strategy
Do NOT keep expanding raw keyword arrays. Focus on:
- Dedicated content pages for distinct intents.
- Natural usage in headings (`<h1>`, `<h2>`), intro paragraphs, alt text.
- Internal anchor text variation ("Linux help", "dual boot support", etc.).

Remove obsolete variants if they no longer matter (e.g., if typos disappear from search impressions data).

---
## 7. Social & Branding Consistency
Ensure every profile uses either `linuxwale` or `linuxwaleofficial` but not random mixes. If a profile is inactive, either:
- 301 redirect to active profile (if platform supports), or
- Remove from `sameAs` until launched.

Periodically test each `sameAs` URL for 200 OK status.

---
## 8. Domain & Redirect Policy
Preferred canonical: **https://linuxwale.in/**
Configure DNS / hosting / proxy to issue `301 Moved Permanently` for:
- `http://linuxwale.in/*` → `https://linuxwale.in/*`
- `http://www.linuxwale.in/*` → `https://linuxwale.in/*`
- `http://linuxwale.com/*` → `https://linuxwale.in/*`
- `https://linuxwale.com/*` → `https://linuxwale.in/*`

Reason: Consolidates link equity & avoids duplicate content signals.

---
## 9. Performance & Core Web Vitals
Actions (future):
- Add `loading="lazy"` to non-critical images (if any large static images are introduced).
- Consider preloading critical font(s) or using `next/font` to reduce layout shift.
- Run Lighthouse periodically (Chrome DevTools) and record metrics.

---
## 10. Monitoring & Tooling
Set up:
- Google Search Console (property: `https://linuxwale.in/` and domain property if possible).
- Bing Webmaster Tools.
- Simple rank tracking (manual Sheets + periodic query operator searches). 
- Log queries & impressions after 28 days → refine content.

Suggested cadence:
- Weekly: Coverage errors, crawl stats.
- Monthly: Query performance & new content planning.

---
## 11. Updating Open Graph / Twitter Images
Currently using a static image referenced in `layout.tsx` for both Open Graph and Twitter. If you later want custom designed images, add new static files under `public/images/` and update the `openGraph.images` and `twitter.images` arrays accordingly.

---
## 12. Content Roadmap (High-Value Topics)
Potential articles / guides (cluster strategy):
- "How to Dual Boot Windows & Linux Safely (2025 Guide)"
- "Why Choose Linux Over Windows for Privacy" (pillar)
- "Common Linux Installation Mistakes in India" (geo nuance)
- "Best Beginner-Friendly Linux Distros in 2025"
- "Secure Boot & Linux: What You Need to Know"
- "How to Contribute to Open Source (Start Here)"

Each post:  
- Use one primary keyword + 2–3 supporting synonyms.  
- Include internal links to Services, Contact, and About.  
- Add FAQ sub-section for rich results eligibility.

---
## 13. Quality Control Checklist (Before Deploy Changes)
[ ] New page has canonical + descriptive title/description.  
[ ] Added to sitemap.  
[ ] Internal links exist (at least 1 inbound).  
[ ] Structured data (if applicable) validates in Rich Results Test.  
[ ] Lighthouse score ≥ 90 for Performance & Best Practices (target).  
[ ] No console errors.  
[ ] No duplicate H1s.  
[ ] Mobile rendering verified.

---
## 14. Frequently Asked Maintenance Questions
**Q: Should we keep all the misspellings forever?**  
A: Monitor impressions in Search Console; if variants vanish, you can reduce them to just brand + 1–2 major alternates.

**Q: How to know if .com redirect works properly?**  
Use: `curl -I https://linuxwale.com` → Expect `301` with `Location: https://linuxwale.in/`.

**Q: When to add hreflang?**  
Only if you add multi-language content (e.g., Hindi pages). Not needed now.

**Q: Should we submit sitemap manually?**  
One-time yes in Search Console; afterward Google re-fetches automatically.

---
## 15. Future Enhancements (Optional)
- Add `Service` schema JSON-LD to `/services` for each offering.
- Add `BreadcrumbList` schema once site hierarchy grows.
- Implement `next-sitemap` package if site scales to many pages.
- Add tracking (privacy-respecting) for conversion (join Telegram / email clicks).
- Adopt Content Security Policy & security headers (indirect trust factor).

---
## 16. Quick Reference – Files to Touch for SEO
- Global metadata: `src/app/layout.tsx`
- Page metadata: `src/app/<page>/page.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- OG/Twitter image (static): `public/images/LW_W_on_B.webp`

---
## 17. Contact / Ownership Notes
Primary domain: `linuxwale.in`  
Alternate domain (redirect): `linuxwale.com`  
Preferred handle(s): `linuxwale`, `linuxwaleofficial`

---
Feel free to append decisions, experiments, or change logs below.

> Maintain this file as the single source of truth for SEO decisions.
