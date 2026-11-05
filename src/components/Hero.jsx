import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Car,
  ShoppingBag,
  Store,
  Tag,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Compass,
  Gamepad2,
  Navigation,
} from "lucide-react";
import { useMall } from "../context/MallContext";
import { MALL_INFO } from "../data/mallData";

export const Hero = () => {
  const { setActiveTab } = useMall();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/images/mall/city-centre-facade.jpg",
      badge: "Iconic Banjara Hills Landmark",
      titleMain: "Welcome to Hyderabad's",
      titleAccent: "City Centre Mall",
      subtitle:
        "Road No. 1, Banjara Hills. Hyderabad's classic destination for Max Fashion, Google Pixel service, McDonald's, and family recreation.",
      ctaText: "Explore Directory",
      ctaAction: "directory",
      secondaryText: "Shop Products",
      secondaryAction: "categories",
      floorHighlight: "Ground to Terrace Levels",
    },
    {
      image: "/images/mall/city-centre-atrium.jpg",
      badge: "6 Retail & Dining Levels",
      titleMain: "Shop 45+ Premier Outlets at",
      titleAccent: "City Centre Mall",
      subtitle:
        "From Max Fashion & Reliance Trends to Scullers linen, ethnic kurtas, and boutique jewellery across multi-level shopping corridors.",
      ctaText: "Shop Products",
      ctaAction: "categories",
      secondaryText: "View Current Deals",
      secondaryAction: "offers",
      floorHighlight: "Floors 1 & 2: Fashion & Tech",
    },
    {
      image: "/images/mall/city-centre-stores.jpg",
      badge: "Gaming & Dining Hub",
      titleMain: "SMAAASH Bowling & Food at",
      titleAccent: "City Centre Mall",
      subtitle:
        "World-class bowling alley, virtual gaming simulators, McDonald's (open till 12 AM), and rooftop multi-cuisine dining with Banjara skyline views.",
      ctaText: "Bowling & Fun",
      ctaAction: "directory",
      secondaryText: "Upcoming Events",
      secondaryAction: "offers",
      floorHighlight: "Floor 4: Bowling & Arcade",
    },
    {
      image: "/images/mall/city-centre-escalators.jpg",
      badge: "Comfort & Family Amenities",
      titleMain: "Relaxed & Peaceful Shopping at",
      titleAccent: "City Centre Mall",
      subtitle:
        "Ample free basement parking (B1 Cars & B2 Bikes), rooftop terrace mosque & prayer hall, and peaceful weekend family shopping atmosphere.",
      ctaText: "Visitor Amenities",
      ctaAction: "about",
      secondaryText: "Get Map Directions",
      secondaryAction: "contact",
      floorHighlight: "Free B1/B2 Parking & Mosque",
    },
  ];

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[540px] max-h-[720px] flex items-center overflow-hidden bg-slate-950">
      {/* Background Images with Cross-Fade */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <img
            src={slide.image}
            alt={slide.titleAccent}
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-110"
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        </div>
      ))}

      {/* Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline, Description, Badges & CTAs */}
          <div className="lg:col-span-7 space-y-4">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/30 backdrop-blur-md shadow-sm text-amber-300 text-[11px] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeSlide.badge}</span>
              <span className="w-1 h-1 rounded-full bg-amber-400"></span>
              <span className="text-slate-300">సిటీ సెంటర్ మాల్ · Road No. 1</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              <span>{activeSlide.titleMain} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                {activeSlide.titleAccent}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl">
              {activeSlide.subtitle}
            </p>

            {/* Key feature pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white">4.2 ★</span>
                <span className="text-slate-400">(26,086 Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <Car className="w-3.5 h-3.5 text-blue-400" />
                <span>Free Parking B1/B2</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Women-Owned</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab(activeSlide.ctaAction)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Store className="w-3.5 h-3.5" />
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActiveTab(activeSlide.secondaryAction)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs transition-all hover:border-amber-500/40"
              >
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeSlide.secondaryText}</span>
              </button>

              <a
                href="https://www.google.com/maps/place/City+Center+Mall/@17.4149422,78.4487433,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Map Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Interactive Mall Navigator Card */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-white/[0.09] p-5 shadow-2xl relative overflow-hidden">
              {/* Card Header with Floor Guide */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Quick Mall Guide
                  </span>
                </div>
                <span className="text-[11px] text-amber-400 font-semibold">
                  6 Levels Active
                </span>
              </div>

              {/* Floor Shortcuts Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  onClick={() => setActiveTab("directory")}
                  className="p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.05] hover:border-amber-500/40 text-left transition-colors group"
                >
                  <div className="text-[10px] font-bold text-amber-400">FLOOR 1</div>
                  <div className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">McDonald's & Max</div>
                  <div className="text-[10px] text-slate-400">Open till 12 AM</div>
                </button>

                <button
                  onClick={() => setActiveTab("directory")}
                  className="p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.05] hover:border-amber-500/40 text-left transition-colors group"
                >
                  <div className="text-[10px] font-bold text-amber-400">FLOOR 2</div>
                  <div className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">Google Pixel Store</div>
                  <div className="text-[10px] text-slate-400">Official Tech Service</div>
                </button>

                <button
                  onClick={() => setActiveTab("directory")}
                  className="p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.05] hover:border-amber-500/40 text-left transition-colors group"
                >
                  <div className="text-[10px] font-bold text-purple-400">FLOOR 4</div>
                  <div className="text-xs font-semibold text-white group-hover:text-purple-400 transition-colors">SMAAASH Bowling</div>
                  <div className="text-[10px] text-slate-400">Arcade & VR Games</div>
                </button>

                <button
                  onClick={() => setActiveTab("about")}
                  className="p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.05] hover:border-amber-500/40 text-left transition-colors group"
                >
                  <div className="text-[10px] font-bold text-emerald-400">TERRACE</div>
                  <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">Dining & Mosque</div>
                  <div className="text-[10px] text-slate-400">Prayer Hall Facility</div>
                </button>
              </div>

              {/* Slide Controls & Indicator */}
              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? "w-6 bg-amber-400" : "w-1.5 bg-slate-700"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400 px-1 font-mono">
                    {currentSlide + 1} / {heroSlides.length}
                  </span>
                  <button
                    onClick={nextSlide}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom slide dots for mobile */}
      <div className="lg:hidden absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-5 bg-amber-400" : "w-1.5 bg-slate-600"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
