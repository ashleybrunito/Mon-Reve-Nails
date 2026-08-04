import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Phone, Flower2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { BUSINESS, GALLERY } from "@/data/content";
import { Reveal } from "@/components/site/Reveal";
import Lightbox from "@/components/site/Lightbox";

const EASE = [0.16, 1, 0.3, 1];

// Bento span pattern for irregular grid
const SPANS = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:row-span-2",
  "",
  "md:col-span-2",
  "",
  "",
];

export default function Gallery() {
  const { t, lang } = useLang();
  const [index, setIndex] = useState(null);

  const nav = useCallback((dir) => {
    setIndex((cur) => {
      if (cur === null) return cur;
      return (cur + dir + GALLERY.length) % GALLERY.length;
    });
  }, []);

  return (
    <div className="pt-28 md:pt-32" data-testid="gallery-page">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="text-xs uppercase tracking-[0.25em] text-gold">
          {t.galleryPage.overline}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }} className="mt-4 font-serif text-5xl font-light leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {t.galleryPage.heading}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.25 }} className="mt-6 max-w-xl text-base text-ink-soft md:text-lg">
          {t.galleryPage.intro}
        </motion.p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
          {GALLERY.map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06} className={`overflow-hidden rounded-2xl ${SPANS[i] || ""}`}>
              <button
                onClick={() => setIndex(i)}
                className="group block h-full w-full"
                data-testid={`gallery-item-${i}`}
                aria-label={lang === "es" ? img.alt_es : img.alt_en}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={lang === "es" ? img.alt_es : img.alt_en}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-rose-deep/0 transition-colors duration-500 group-hover:bg-rose-deep/15" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Future spa photos placeholder */}
        <Reveal className="mt-8">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-rose/60 bg-blush px-6 py-20 text-center" data-testid="future-photos-placeholder">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose/25 text-rose-deep">
              <Flower2 className="h-8 w-8" />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-ink md:text-3xl">{t.galleryPage.future}</h3>
            <p className="mt-3 max-w-sm text-sm text-ink-soft">{t.galleryPage.futureSub}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-ink py-16 text-center md:py-20" data-testid="gallery-cta">
        <Reveal>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-rose px-9 py-4 text-sm font-medium uppercase tracking-widest text-ink transition-all duration-300 hover:scale-[1.03] hover:bg-white" data-testid="gallery-call-button">
            <Phone className="h-4 w-4" /> {t.hero.cta}
          </a>
        </Reveal>
      </section>

      <Lightbox images={GALLERY} index={index} lang={lang} onClose={() => setIndex(null)} onNav={nav} />
    </div>
  );
}
