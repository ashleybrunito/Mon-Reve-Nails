import React from "react";
import { motion } from "framer-motion";
import { Phone, Sparkles, Check } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { BUSINESS, CATEGORIES, SIGNATURE } from "@/data/content";
import { Reveal } from "@/components/site/Reveal";

const EASE = [0.16, 1, 0.3, 1];

function priceFor(item, lang) {
  if (lang === "es" && item.price_es) return item.price_es;
  return item.price;
}

function CategoryBlock({ cat, index }) {
  const { lang } = useLang();
  const flip = index % 2 === 1;
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16" data-testid={`service-category-${cat.id}`}>
      <Reveal className={`overflow-hidden rounded-2xl ${flip ? "md:order-2" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <img
            src={cat.image}
            alt={lang === "es" ? cat.title_es : cat.title_en}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
          />
        </div>
      </Reveal>
      <Reveal delay={0.1} className={flip ? "md:order-1" : ""}>
        <h3 className="font-serif text-3xl font-light tracking-tight text-ink sm:text-4xl">
          {lang === "es" ? cat.title_es : cat.title_en}
        </h3>
        <ul className="mt-8 space-y-1">
          {cat.items.map((item, i) => (
            <li key={i} className="group flex items-baseline gap-3 border-b border-border py-3.5">
              <span className="text-base text-ink">
                {lang === "es" ? item.name_es : item.name_en}
                {item.note_en && (
                  <span className="ml-2 text-xs italic text-ink-soft">
                    ({lang === "es" ? item.note_es : item.note_en})
                  </span>
                )}
              </span>
              <span className="mx-2 flex-1 border-b border-dotted border-border/80 opacity-70" />
              <span className="whitespace-nowrap font-serif text-lg text-rose-deep">{priceFor(item, lang)}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export default function Services() {
  const { t, lang } = useLang();
  return (
    <div className="pt-28 md:pt-32" data-testid="services-page">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="text-xs uppercase tracking-[0.25em] text-gold">
          {t.servicesPage.overline}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }} className="mt-4 font-serif text-5xl font-light leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {t.servicesPage.heading}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.25 }} className="mt-6 max-w-xl text-base text-ink-soft md:text-lg">
          {t.servicesPage.intro}
        </motion.p>
      </section>

      {/* Signature */}
      <section className="bg-ink py-20 text-white md:py-28" data-testid="signature-section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <Reveal className="overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={SIGNATURE.image} alt={lang === "es" ? SIGNATURE.title_es : SIGNATURE.title_en} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
              <Sparkles className="h-4 w-4" /> {t.servicesPage.signatureOverline}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-tight sm:text-5xl">
              {lang === "es" ? SIGNATURE.title_es : SIGNATURE.title_en}
            </h2>
            <p className="mt-2 font-italic-display text-xl text-rose/90">
              {lang === "es" ? SIGNATURE.tagline_es : SIGNATURE.tagline_en}
            </p>
            <p className="mt-3 font-italic-display text-3xl text-rose">{SIGNATURE.price}</p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
              {lang === "es" ? SIGNATURE.desc_es : SIGNATURE.desc_en}
            </p>
            <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2" data-testid="signature-includes">
              {(lang === "es" ? SIGNATURE.includes_es : SIGNATURE.includes_en).map((inc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
                  {inc}
                </li>
              ))}
            </ul>
            <a href={BUSINESS.phoneHref} className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-ink transition-all duration-300 hover:scale-[1.03] hover:bg-white" data-testid="signature-call-button">
              <Phone className="h-4 w-4" /> {t.reserve}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl space-y-24 px-6 py-24 md:space-y-32 md:px-12 md:py-32">
        {CATEGORIES.map((cat, i) => (
          <CategoryBlock key={cat.id} cat={cat} index={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="bg-blush py-20 text-center md:py-28" data-testid="services-cta">
        <Reveal>
          <h2 className="mx-auto max-w-2xl px-6 font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl">
            {t.contactPage.intro}
          </h2>
          <a href={BUSINESS.phoneHref} className="mt-10 inline-flex items-center gap-2 rounded-full bg-rose-deep px-9 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.03] hover:bg-ink" data-testid="services-bottom-call">
            <Phone className="h-4 w-4" /> {t.hero.cta}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
