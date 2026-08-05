// Bilingual content + service menu for Mon Reve Nail Spa

export const BUSINESS = {
  name: "Mon Reve Nail Spa",
  phone: "646-750-9932",
  phoneHref: "tel:6467509932",
  address: "17171 Pines Blvd, Pembroke Pines, FL 33027",
  addressShort: "17171 Pines Blvd, Pembroke Pines, FL 33027",
  mapQuery: "17171 Pines Blvd, Pembroke Pines, FL 33027",
  social: {
    instagram: "https://instagram.com/monrevenailspa",
    facebook: "https://www.facebook.com/andrea.nieves.1690",
    tiktok: "https://www.tiktok.com/@monreve96",
  },
};

const ASSET_BASE = process.env.PUBLIC_URL || "";

export const IMAGES = {
  heroFloral:
    "https://images.unsplash.com/photo-1764513168327-309c566fbc36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWluaW1hbCUyMGZsb3JhbCUyMHRleHR1cmUlMjBwaW5rfGVufDB8fHx8MTc4NTg3MDAwOHww&ixlib=rb-4.1.0&q=85",
  nailArt1:
    "https://images.unsplash.com/photo-1780402695869-49cfb47f9f9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBuYWlsJTIwYXJ0JTIwY2xvc2UlMjB1cHxlbnwwfHx8fDE3ODU4NzAwMDh8MA&ixlib=rb-4.1.0&q=85",
  nailArt2:
    "https://images.unsplash.com/photo-1777287216954-2b4b22bb6bf2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuYWlsJTIwYXJ0JTIwY2xvc2UlMjB1cHxlbnwwfHx8fDE3ODU4NzAwMDh8MA&ixlib=rb-4.1.0&q=85",
  pedicure1:
    "https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  spa:
    "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  pedicure2:
    "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxzcGElMjBwZWRpY3VyZSUyMGx1eHVyeXxlbnwwfHx8fDE3ODU4NzAwMDh8MA&ixlib=rb-4.1.0&q=85",
  logo: `${ASSET_BASE}/assets/mr-logo-3-tone.svg`,
};

// Gallery images (Mon Reve client work). The first five are featured on the homepage.
export const GALLERY = [
  {
    src: `${ASSET_BASE}/assets/gallery/478061581_17887939644192475_8347484175421345911_n.jpg`,
    alt_en: "Pink almond nails with red French tips and heart accents",
    alt_es: "Uñas almendradas rosadas con puntas francesas rojas y detalles de corazones",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/621548936_17982481496959510_3936618406694251410_n.jpg`,
    alt_en: "Pink almond nails with sculpted black French tips",
    alt_es: "Uñas almendradas rosadas con puntas francesas negras esculpidas",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/588494552_17920132557192475_2766963760376855176_n.jpg`,
    alt_en: "Long red, gold, and blush statement nails",
    alt_es: "Uñas largas llamativas en rojo, dorado y rosa suave",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/624053893_18079295720033331_5115358124636921392_n.jpg`,
    alt_en: "Glossy black nails with white floral details",
    alt_es: "Uñas negras brillantes con detalles florales blancos",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/625054904_18256800598288515_6745722690197143004_n.jpg`,
    alt_en: "Long pink ombre nails with delicate crystal accents",
    alt_es: "Uñas largas rosadas en degradado con delicados detalles de cristal",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/470921101_17881373379192475_5288220039474707259_n.jpg`,
    alt_en: "Glossy red square nails with winter art",
    alt_es: "Uñas rojas cuadradas y brillantes con arte de invierno",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/454503177_17863466334192475_6176011656391875255_n.jpg`,
    alt_en: "Blue French manicure with playful nail art",
    alt_es: "Manicura francesa azul con arte de uñas divertido",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/454776443_17863592271192475_8147143332697713917_n.jpg`,
    alt_en: "Pink almond manicure with pearlescent accents",
    alt_es: "Manicura almendrada rosada con detalles nacarados",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/455262112_17864242086192475_7036952425832999720_n.jpg`,
    alt_en: "Natural ombre almond manicure",
    alt_es: "Manicura almendrada natural en degradado",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/485353071_17892029220192475_6359090822228583527_n.jpg`,
    alt_en: "Soft pink manicure with gold leaf accents",
    alt_es: "Manicura rosa suave con detalles de hoja dorada",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/554985446_17914151793192475_8306604681301071756_n.jpg`,
    alt_en: "Blush manicure with delicate daisy nail art",
    alt_es: "Manicura rosa suave con delicado arte de margaritas",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/599168234_17921737377192475_2560696099829725853_n.jpg`,
    alt_en: "Classic glossy red square manicure",
    alt_es: "Manicura roja clásica, cuadrada y brillante",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/624043655_18075138074375803_2932965325468921449_n.jpg`,
    alt_en: "Milky white square nails with soft pink accents",
    alt_es: "Uñas cuadradas blanco lechoso con detalles rosados suaves",
  },
  {
    src: `${ASSET_BASE}/assets/gallery/624545753_18070894517625248_8367817247222488330_n.jpg`,
    alt_en: "Pale pink manicure with a jeweled floral accent",
    alt_es: "Manicura rosa pálido con un detalle floral de joyería",
  },
];

export const CATEGORIES = [
  {
    id: "natural",
    title_en: "Natural Nails",
    title_es: "Uñas Naturales",
    image: IMAGES.nailArt2,
    items: [
      { name_en: "Regular Manicure", name_es: "Manicura Regular", price: "$25" },
      { name_en: "Gel Manicure", name_es: "Manicura en Gel", price: "$35" },
      { name_en: "Hand Polish Change", name_es: "Cambio de Esmalte (Manos)", price: "$15" },
    ],
  },
  {
    id: "pedicures",
    title_en: "Pedicures",
    title_es: "Pedicuras",
    image: IMAGES.pedicure1,
    items: [
      { name_en: "Regular Pedicure", name_es: "Pedicura Regular", price: "$35" },
      { name_en: "Gel Pedicure", name_es: "Pedicura en Gel", price: "$50" },
      { name_en: "Spa Pedicure", name_es: "Pedicura Spa", price: "$55" },
      { name_en: "Volcano Pedicure", name_es: "Pedicura Volcán", price: "$65" },
      { name_en: "Foot Polish Change", name_es: "Cambio de Esmalte (Pies)", price: "$18" },
    ],
  },
  {
    id: "builder",
    title_en: "Builder Gel",
    title_es: "Builder Gel",
    image: IMAGES.nailArt1,
    items: [
      { name_en: "Builder Gel Overlay", name_es: "Cobertura Builder Gel", price: "$65" },
      { name_en: "Builder Gel Refill", name_es: "Relleno Builder Gel", price: "$55" },
      { name_en: "Rubber Base", name_es: "Rubber Base", price: "$55" },
    ],
  },
  {
    id: "acrylic",
    title_en: "Acrylic",
    title_es: "Acrílico",
    image: IMAGES.nailArt2,
    items: [
      { name_en: "Acrylic Full Set", name_es: "Set Completo de Acrílico", price: "from $65", price_es: "desde $65" },
      { name_en: "Acrylic Refill", name_es: "Relleno de Acrílico", price: "$50" },
      { name_en: "Nail Repair", name_es: "Reparación de Uña", price: "$7", note_en: "per nail", note_es: "por uña" },
    ],
  },
  {
    id: "gelx",
    title_en: "Gel-X & Apres",
    title_es: "Gel-X y Apres",
    image: IMAGES.nailArt1,
    items: [
      { name_en: "Gel-X or Apres Full Set", name_es: "Set Completo Gel-X o Apres", price: "$65" },
      { name_en: "Gel-X Refill", name_es: "Relleno Gel-X", price: "$55" },
      { name_en: "Apres Removal", name_es: "Remoción Apres", price: "$15" },
    ],
  },
  {
    id: "dip",
    title_en: "Dip Powder",
    title_es: "Dip Powder",
    image: IMAGES.pedicure2,
    items: [
      { name_en: "Dip Powder Full Set", name_es: "Set Completo Dip Powder", price: "$50" },
      { name_en: "Gel Removal", name_es: "Remoción de Gel", price: "$10" },
    ],
  },
  {
    id: "addons",
    title_en: "Add-ons",
    title_es: "Complementos",
    image: IMAGES.nailArt2,
    items: [
      { name_en: "French", name_es: "Francés", price: "$10" },
      { name_en: "Chrome", name_es: "Chrome", price: "$15" },
      { name_en: "Nail Art", name_es: "Arte de Uñas", price: "from $5", price_es: "desde $5" },
      { name_en: "Long Length", name_es: "Largo Extra", price: "from $10", price_es: "desde $10" },
      { name_en: "Cat-Eye", name_es: "Cat-Eye", price: "$15" },
      { name_en: "Special Designs", name_es: "Diseños Especiales", price: "Varies", price_es: "Variable" },
    ],
  },
];

export const SIGNATURE = {
  id: "monreve",
  title_en: "The Mon Reve Pedicure",
  title_es: "La Pedicura Mon Reve",
  price: "$75",
  image: IMAGES.spa,
  tagline_en: "The Ultimate Experience",
  tagline_es: "La Experiencia Definitiva",
  desc_en:
    "The very best of all our pedicures in one complete ritual of relaxation and renewal — pure escape for tired feet.",
  desc_es:
    "Lo mejor de todos nuestros pedicures en un ritual completo de relajación y renovación — un escape puro para tus pies.",
  includes_en: [
    "Mineral salt soak & aromatherapy",
    "Sugar scrub exfoliation",
    "Detox hydrating mask",
    "Relaxing massage with CBD oil",
    "Hot paraffin for extra softness",
    "Hot stone massage",
    "Hydrating lotion with essential oil",
    "Long-lasting gel polish",
  ],
  includes_es: [
    "Remojo con sales minerales y aromaterapia",
    "Exfoliación sugar scrub",
    "Mascarilla hidratante detox",
    "Masaje relajante con aceite de CBD",
    "Parafina caliente para suavidad extrema",
    "Masaje con piedras calientes",
    "Loción hidratante con aceite esencial",
    "Esmalte en gel de larga duración",
  ],
};

export const T = {
  en: {
    nav: { home: "Home", services: "Services", gallery: "Gallery", contact: "Contact" },
    banner: "Now open inside Sedano's · Kiosk #5 · Pembroke Pines",
    reserve: "Reserve by Phone",
    callNow: "Call Now",
    langLabel: "EN",
    hero: {
      overline: "Pembroke Pines · Inside Sedano's · Kiosk #5",
      line1: "Where beauty",
      line2: "becomes a",
      line3: "dream.",
      sub: "Luxury nail artistry, tailored to you. Reservations by phone only.",
      cta: "Reserve · 646-750-9932",
    },
    marquee: "MON REVE NAIL SPA · BEAUTY & LUXURY · PEMBROKE PINES · ",
    manifesto: {
      heading: "The Mon Reve philosophy",
      chapters: [
        { no: "01", title: "Crafted with intention", body: "Every set is shaped by hand with meticulous care — from natural nails to intricate art. We treat detail as devotion." },
        { no: "02", title: "A moment that's yours", body: "Step away from the everyday. Our airy, gold-lit space is designed to feel like a quiet exhale in the middle of your day." },
        { no: "03", title: "Beauty that lasts", body: "Premium builder gel, Gel-X, acrylic and dip powder — flawless finishes engineered to stay pristine long after you leave." },
      ],
    },
    featured: { overline: "What we do", heading: "Featured services", viewAll: "View full menu" },
    galleryTeaser: { overline: "Our work", heading: "A gallery of dreams", viewAll: "View gallery" },
    locationBlock: { overline: "Find us", heading: "Location & hours", inside: "Inside Sedano's · Kiosk #5", getDirections: "Get directions" },
    hours: { title: "Hours", weekdays: "Monday – Saturday", weekdaysTime: "10:00 AM – 8:00 PM", sunday: "Sunday", sundayTime: "11:00 AM – 5:00 PM" },
    servicesPage: { overline: "The menu", heading: "Services & pricing", intro: "Prices are a starting guide. Final pricing may vary with length, design and detail. Reserve your seat by phone.", signatureOverline: "Signature ritual" },
    galleryPage: { overline: "Portfolio", heading: "Photo gallery", intro: "A glimpse of the artistry that leaves our studio.", future: "Coming Soon: Mon Reve Spa Interior", futureSub: "New photos of our studio are on the way." },
    contactPage: { overline: "Say hello", heading: "Visit Mon Reve", intro: "We can't wait to pamper you. Reservations are by phone only — no online booking.", addressTitle: "Address", phoneTitle: "Reservations", hoursTitle: "Opening hours", mapTitle: "On the map" },
    footer: { tagline: "Luxury nail care, born from a dream.", followUs: "Follow us", rights: "All rights reserved." },
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", gallery: "Galería", contact: "Contacto" },
    banner: "Ya abierto dentro de Sedano's · Kiosco #5 · Pembroke Pines",
    reserve: "Reservar por Teléfono",
    callNow: "Llamar Ahora",
    langLabel: "ES",
    hero: {
      overline: "Pembroke Pines · Dentro de Sedano's · Kiosco #5",
      line1: "Donde la belleza",
      line2: "se vuelve un",
      line3: "sueño.",
      sub: "Arte de uñas de lujo, a tu medida. Reservas solo por teléfono.",
      cta: "Reservar · 646-750-9932",
    },
    marquee: "MON REVE NAIL SPA · BELLEZA Y LUJO · PEMBROKE PINES · ",
    manifesto: {
      heading: "La filosofía Mon Reve",
      chapters: [
        { no: "01", title: "Hecho con intención", body: "Cada set se moldea a mano con cuidado meticuloso — desde uñas naturales hasta arte detallado. El detalle es nuestra devoción." },
        { no: "02", title: "Un momento tuyo", body: "Aléjate de lo cotidiano. Nuestro espacio luminoso y dorado está diseñado para sentirse como una pausa serena en tu día." },
        { no: "03", title: "Belleza que perdura", body: "Builder gel premium, Gel-X, acrílico y dip powder — acabados impecables diseñados para lucir perfectos por mucho tiempo." },
      ],
    },
    featured: { overline: "Lo que hacemos", heading: "Servicios destacados", viewAll: "Ver menú completo" },
    galleryTeaser: { overline: "Nuestro trabajo", heading: "Una galería de sueños", viewAll: "Ver galería" },
    locationBlock: { overline: "Encuéntranos", heading: "Ubicación y horario", inside: "Dentro de Sedano's · Kiosco #5", getDirections: "Cómo llegar" },
    hours: { title: "Horario", weekdays: "Lunes – Sábado", weekdaysTime: "10:00 AM – 8:00 PM", sunday: "Domingo", sundayTime: "11:00 AM – 5:00 PM" },
    servicesPage: { overline: "El menú", heading: "Servicios y precios", intro: "Los precios son una guía inicial. El precio final puede variar según largo, diseño y detalle. Reserva tu cita por teléfono.", signatureOverline: "Ritual insignia" },
    galleryPage: { overline: "Portafolio", heading: "Galería de fotos", intro: "Un vistazo al arte que sale de nuestro estudio.", future: "Próximamente: Interior del Spa Mon Reve", futureSub: "Nuevas fotos de nuestro estudio están en camino." },
    contactPage: { overline: "Saluda", heading: "Visita Mon Reve", intro: "No podemos esperar a consentirte. Las reservas son solo por teléfono — sin reservas en línea.", addressTitle: "Dirección", phoneTitle: "Reservas", hoursTitle: "Horario de atención", mapTitle: "En el mapa" },
    footer: { tagline: "Cuidado de uñas de lujo, nacido de un sueño.", followUs: "Síguenos", rights: "Todos los derechos reservados." },
  },
};
