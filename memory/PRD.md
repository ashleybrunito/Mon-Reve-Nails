# Mon Reve Nail Spa — PRD

## Problem Statement
Responsive bilingual (EN/ES) marketing website for Mon Reve Nail Spa, 17171 Pines Blvd, Pembroke Pines, FL 33027 (inside Sedano's, Kiosk #5). Phone-only reservations (646-750-9932). Hours: Mon–Sat 10AM–8PM, Sun 11AM–5PM. Elegant pink/white/soft-gold luxury aesthetic, Awwwards-level motion.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis (smooth scroll). No backend needed (static content, no booking form).
- Pages: Home, Services, Gallery, Contact. Router in App.js. LanguageProvider (localStorage) for EN/ES.
- Data/i18n in src/data/content.js. Components in src/components/site (Header, Footer, Marquee, Reveal, Lightbox). Hook src/hooks/useLenis.js.
- Fonts: Cormorant Garamond (serif), Playfair Display italic (accent), Outfit (body).
- Logo at /public/assets/logo.png. Gallery uses Unsplash/Pexels nail photography (no photos supplied).

## Implemented (Dec 2025)
- Kinetic hero: masked line-by-line reveal, parallax floral + floating logo medallion, click-to-call CTA.
- Editorial marquee, numbered manifesto (01/02/03), featured services, gallery teaser, location+hours w/ embedded Google Map.
- Services page: signature Mon Reve Pedicure ($75) with tagline + 8-item ritual checklist; 8 categories with full price list; alternating editorial layout.
- Gallery: irregular bento grid + lightbox (keyboard nav) + "future spa photos" placeholder.
- Contact: split layout, large click-to-call, address + inside-Sedano's/Kiosk#5 note, hours, embedded map.
- Prominent EN/ES switcher; persistent top banner "Now open inside Sedano's · Kiosk #5".
- Footer with Instagram/Facebook/TikTok buttons, address, hours.
- Local SEO: title/meta/OG + NailSalon JSON-LD schema.

## Backlog / Next
- P1: Swap in real client nail + studio photos when provided (replace gallery placeholder).
- P2: Google Business reviews section; WhatsApp click-to-chat; promotions/announcement rotation.
