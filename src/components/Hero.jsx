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
  Search,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useMall } from "../context/MallContext";
import { MALL_INFO } from "../data/mallData";

export const Hero = () => {
  const { setActiveTab, setIsSearchOpen } = useMall();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/images/mall/city-centre-facade.jpg",
      badge: "Iconic Banjara Hills Landmark",
      title: "Welcome to City Centre Mall",
      subtitle: "Hyderabad's Premier Family Destination for Shopping, Dining & Fun",
      highlight: "Road No. 1, Banjara Hills • 4.2 ★ (26,086 Google Reviews)",
      ctaText: "Explore Directory",
      ctaAction: "directory",
      secondaryText: "View Current Offers",
      secondaryAction: "offers",
    },
    {
      image: "/images/mall/city-centre-atrium.jpg",
      badge: "6 Retail & Dining Levels",
      title: "Discover 45+ Branded Outlets",
      subtitle: "From Max Fashion & Reliance Trends to Google Pixel Service & Boutique Jewels",
      highlight: "Floors 1 & 2: Fashion & Tech • Ground Floor: Kids & Hypermarket",
      ctaText: "Shop Products",
      ctaAction: "categories",
      secondaryText: "Explore Brands",
      secondaryAction: "directory",
    },
    {
      image: "/images/mall/city-centre-stores.jpg",
      badge: "Entertainment & Multi-Cuisine",
      title: "SMAAASH Bowling & Rooftop Dining",
      subtitle: "Hyderabad's favorite bowling alley, virtual games, McDonald's & terrace dining",
      highlight: "Floor 4: Bowling & VR Arcade • Terrace: Multi-Cuisine & Mosque",
      ctaText: "View Entertainment",
      ctaAction: "directory",
      secondaryText: "Check Events",
      secondaryAction: "offers",
    },
    {
      image: "/images/mall/city-centre-escalators.jpg",
      badge: "Comfort & Visitor Facilities",
      title: "Relaxed, Family-Friendly Experience",
      subtitle: "Ample free car & bike parking, comfortable corridors, and top-tier hospitality",
      highlight: "Free B1 Car Parking • Free B2 Bike Parking • Free Wi-Fi",
      ctaText: "Visitor Guide",
      ctaAction: "about",
      secondaryText: "Get Directions",
      secondaryAction: "contact",
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
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-slate-950">
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
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
        </div>
      ))}

      {/* Decorative ambient glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 backdrop-blur-md shadow-lg shadow-amber-500/10 text-amber-300 text-xs font-semibold animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{activeSlide.badge}</span>
            <span className="w-1 h-1 rounded-full bg-amber-400"></span>
            <span className="text-slate-300">సిటీ సెంటర్ మాల్</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            {activeSlide.title.split("City Centre Mall")[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-gold-glow">
              City Centre Mall
            </span>
            {activeSlide.title.split("City Centre Mall")[1] || ""}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            {activeSlide.subtitle}
          </p>

          {/* Key highlight row */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.2 / 5.0</span>
              <span className="text-slate-400">(26,086 Google Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Identifies as women-owned</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <Car className="w-4 h-4 text-amber-400" />
              <span>Free Parking B1 (Car) & B2 (Bike)</span>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <button
              onClick={() => setActiveTab(activeSlide.ctaAction)}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Store className="w-4 h-4" />
              <span>{activeSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab(activeSlide.secondaryAction)}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all hover:border-amber-500/50"
            >
              <Tag className="w-4 h-4 text-amber-400" />
              <span>{activeSlide.secondaryText}</span>
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-sm transition-all"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Search Stores...</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots and Arrows */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        <div className="flex items-center gap-1.5 mr-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-amber-400" : "w-2 bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white backdrop-blur transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white backdrop-blur transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
