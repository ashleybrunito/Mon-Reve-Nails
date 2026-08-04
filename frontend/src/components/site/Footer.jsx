import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { BUSINESS, IMAGES } from "@/data/content";

// TikTok inline icon (not in lucide)
const TikTok = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9V10c-1.3.1-2.5-.3-3.6-1v6.6c0 3.2-2.6 5.4-5.5 5.4-3 0-5.4-2.4-5.4-5.3 0-3.1 2.7-5.4 5.9-5v3.2c-.4-.1-.8-.2-1.2-.2-1.2 0-2.3 1-2.3 2.2 0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3V3h3.5z" />
  </svg>
);

export default function Footer() {
  const { t } = useLang();
  const socials = [
    { icon: Instagram, href: BUSINESS.social.instagram, label: "Instagram" },
    { icon: Facebook, href: BUSINESS.social.facebook, label: "Facebook" },
    { icon: TikTok, href: BUSINESS.social.tiktok, label: "TikTok" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-white/85" data-testid="site-footer">
      <div className="grain absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 md:px-12">
        <div>
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="Mon Reve logo" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/50" />
            <span className="font-serif text-2xl text-white">
              Mon Reve <span className="font-italic-display text-rose">Nail Spa</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs font-serif text-lg italic text-white/70">{t.footer.tagline}</p>
        </div>

        <div className="space-y-4 text-sm">
          <a href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.mapQuery)}`} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-rose transition-colors" data-testid="footer-address">
            <MapPin className="mt-0.5 h-4 w-4 text-gold" />
            <span>{BUSINESS.address}<br /><span className="text-white/60">{t.locationBlock.inside}</span></span>
          </a>
          <a href={BUSINESS.phoneHref} className="flex items-center gap-3 hover:text-rose transition-colors" data-testid="footer-phone">
            <Phone className="h-4 w-4 text-gold" />
            {BUSINESS.phone}
          </a>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-gold" />
            <span>
              {t.hours.weekdays}: {t.hours.weekdaysTime}<br />
              {t.hours.sunday}: {t.hours.sundayTime}
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">{t.footer.followUs}</p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:border-rose hover:bg-rose hover:text-ink"
                data-testid={`social-${s.label.toLowerCase()}`}
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
            <Link to="/services" className="hover:text-rose">{t.nav.services}</Link>
            <Link to="/gallery" className="hover:text-rose">{t.nav.gallery}</Link>
            <Link to="/contact" className="hover:text-rose">{t.nav.contact}</Link>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Mon Reve Nail Spa. {t.footer.rights}
      </div>
    </footer>
  );
}
