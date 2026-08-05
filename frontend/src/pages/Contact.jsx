import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Store } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { BUSINESS } from "@/data/content";
import { Reveal } from "@/components/site/Reveal";

const EASE = [0.16, 1, 0.3, 1];

export default function Contact() {
  const { t } = useLang();
  return (
    <div className="pt-28 md:pt-32" data-testid="contact-page">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }} className="text-xs uppercase tracking-[0.25em] text-gold">
          {t.contactPage.overline}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }} className="mt-4 font-serif text-5xl font-light leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {t.contactPage.heading}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.25 }} className="mt-6 max-w-xl text-base text-ink-soft md:text-lg">
          {t.contactPage.intro}
        </motion.p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 md:grid-cols-2 md:px-12">
        {/* Info column */}
        <div className="space-y-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{t.contactPage.phoneTitle}</p>
            <a href={BUSINESS.phoneHref} className="mt-3 block font-serif text-4xl text-rose-deep transition-colors hover:text-ink sm:text-5xl" data-testid="contact-phone-large">
              {BUSINESS.phone}
            </a>
            <a href={BUSINESS.phoneHref2} className="mt-2 block font-serif text-4xl text-rose-deep transition-colors hover:text-ink sm:text-5xl" data-testid="contact-phone-secondary">
              {BUSINESS.phone2}
            </a>
            <a href={BUSINESS.phoneHref} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-deep px-8 py-5 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:bg-ink sm:w-auto" data-testid="contact-call-button">
              <Phone className="h-5 w-5" /> {t.callNow}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{t.contactPage.addressTitle}</p>
            <div className="mt-3 flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-rose-deep" />
              <p className="text-lg text-ink">{BUSINESS.address}</p>
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-xl bg-blush px-4 py-3">
              <Store className="h-5 w-5 text-rose-deep" />
              <p className="text-sm text-ink-soft">{t.locationBlock.inside}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{t.contactPage.hoursTitle}</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between border-b border-border py-2.5">
                <span className="flex items-center gap-2 text-ink"><Clock className="h-4 w-4 text-rose-deep" /> {t.hours.weekdays}</span>
                <span className="text-ink-soft">{t.hours.weekdaysTime}</span>
              </div>
              <div className="flex items-center justify-between border-b border-border py-2.5">
                <span className="flex items-center gap-2 text-ink"><Clock className="h-4 w-4 text-rose-deep" /> {t.hours.sunday}</span>
                <span className="text-ink-soft">{t.hours.sundayTime}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Map column */}
        <Reveal delay={0.1}>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">{t.contactPage.mapTitle}</p>
          <div className="mt-3 overflow-hidden rounded-2xl border border-border shadow-[0_20px_60px_-30px_rgba(190,120,150,0.5)]">
            <iframe
              title="Mon Reve Nail Spa map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="h-[460px] w-full md:h-[560px]"
              loading="lazy"
              data-testid="contact-map"
            />
          </div>
          <a href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.mapQuery)}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-rose-deep hover:text-ink" data-testid="contact-directions">
            <MapPin className="h-4 w-4" /> {t.locationBlock.getDirections}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
