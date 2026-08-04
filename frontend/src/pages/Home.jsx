import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MapPin, Clock, ArrowUpRight, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { BUSINESS, IMAGES, CATEGORIES, GALLERY } from "@/data/content";
import { Reveal, MaskedLines } from "@/components/site/Reveal";
import Marquee from "@/components/site/Marquee";

const EASE = [0.16, 1, 0.3, 1];

function Hero() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yFloral = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const yLogo = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-blush" data-testid="hero-section">
      {/* Parallax floral texture */}
      <motion.div style={{ y: yFloral }} className="pointer-events-none absolute inset-0">
        <img src={IMAGES.heroFloral} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white" />
      </motion.div>
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />

      {/* Floating logo medallion */}
      <motion.div style={{ y: yLogo, opacity }} className="pointer-events-none absolute right-6 top-28 z-10 md:right-20 md:top-40">
        <div className="animate-float-slow">
          <img
            src={IMAGES.logo}
            alt="Mon Reve Nail Spa"
            className="h-28 w-28 rounded-full object-cover shadow-[0_20px_60px_-20px_rgba(190,120,150,0.6)] ring-2 ring-white md:h-44 md:w-44"
          />
        </div>
      </motion.div>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-italic-display text-lg text-rose-deep md:text-xl"
          data-testid="hero-overline"
        >
          {t.hero.overline}
        </motion.p>

        <h1 className="mt-4 font-serif font-light leading-[0.92] tracking-tight text-ink text-5xl sm:text-7xl lg:text-[6.5rem]">
          <MaskedLines lines={[t.hero.line1, t.hero.line2]} />
          <MaskedLines
            lines={[t.hero.line3]}
            lineClassName="font-italic-display text-rose-deep"
            delay={0.4}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="mt-8 max-w-md text-base text-ink-soft md:text-lg"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={BUSINESS.phoneHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-rose-deep px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.03] hover:bg-ink"
            data-testid="hero-call-button"
          >
            <Phone className="h-4 w-4" />
            {t.hero.cta}
          </a>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-4 text-sm font-medium uppercase tracking-widest text-ink transition-all duration-300 hover:border-rose-deep hover:text-rose-deep"
            data-testid="hero-services-link"
          >
            {t.featured.viewAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Manifesto() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40" data-testid="manifesto-section">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-gold">Mon Reve</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl">
          {t.manifesto.heading}
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {t.manifesto.chapters.map((c, i) => (
          <Reveal key={c.no} delay={i * 0.12} className="bg-white p-8 md:p-10">
            <span className="font-italic-display text-5xl text-rose">{c.no}</span>
            <h3 className="mt-6 font-serif text-2xl text-ink">{c.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{c.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  const { t, lang } = useLang();
  const picks = [CATEGORIES[1], CATEGORIES[3], CATEGORIES[4]]; // Pedicures, Acrylic, Gel-X
  return (
    <section className="bg-blush py-24 md:py-40" data-testid="featured-section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{t.featured.overline}</p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl">{t.featured.heading}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-rose-deep" data-testid="featured-viewall">
              {t.featured.viewAll}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {picks.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.12}>
              <Link to="/services" className="group block" data-testid={`featured-card-${cat.id}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={cat.image}
                    alt={lang === "es" ? cat.title_es : cat.title_en}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-2xl text-white">{lang === "es" ? cat.title_es : cat.title_en}</h3>
                    <p className="mt-1 text-sm text-white/80">{lang === "es" ? cat.items[0].name_es : cat.items[0].name_en} · {cat.items[0].price}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryTeaser() {
  const { t, lang } = useLang();
  const imgs = GALLERY.slice(0, 5);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40" data-testid="gallery-teaser">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">{t.galleryTeaser.overline}</p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl">{t.galleryTeaser.heading}</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Link to="/gallery" className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-rose-deep" data-testid="teaser-viewall">
            {t.galleryTeaser.viewAll}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
        {imgs.map((img, i) => (
          <Reveal
            key={i}
            delay={i * 0.08}
            className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <Link to="/gallery" className="group block h-full">
              <div className={`relative h-full ${i === 0 ? "aspect-square md:aspect-auto" : "aspect-square"}`}>
                <img
                  src={img.src}
                  alt={lang === "es" ? img.alt_es : img.alt_en}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LocationHours() {
  const { t } = useLang();
  return (
    <section className="bg-ink py-24 text-white md:py-40" data-testid="location-section">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">{t.locationBlock.overline}</p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight sm:text-5xl">{t.locationBlock.heading}</h2>
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-rose" />
              <div>
                <p className="text-lg">{BUSINESS.address}</p>
                <p className="text-white/60">{t.locationBlock.inside}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 text-rose" />
              <div className="text-lg">
                <p>{t.hours.weekdays}: <span className="text-white/70">{t.hours.weekdaysTime}</span></p>
                <p>{t.hours.sunday}: <span className="text-white/70">{t.hours.sundayTime}</span></p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-ink transition-all duration-300 hover:scale-[1.03] hover:bg-white" data-testid="location-call-button">
              <Phone className="h-4 w-4" /> {t.reserve}
            </a>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.mapQuery)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:border-rose">
              {t.locationBlock.getDirections}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Mon Reve Nail Spa location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="h-full min-h-[360px] w-full"
            loading="lazy"
            data-testid="home-map"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <Marquee />
      <Manifesto />
      <Featured />
      <GalleryTeaser />
      <LocationHours />
    </div>
  );
}
