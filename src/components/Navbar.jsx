import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Search,
  User,
  Menu,
  X,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  Store,
  Tag,
  Star,
  Info,
  Navigation,
} from "lucide-react";
import { useMall } from "../context/MallContext";
import { MALL_INFO } from "../data/mallData";

export const Navbar = () => {
  const {
    activeTab,
    setActiveTab,
    totalCartCount,
    setIsCartOpen,
    setIsAuthOpen,
    user,
    logout,
    setIsSearchOpen,
  } = useMall();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "directory", label: "Store Directory" },
    { id: "categories", label: "Shop Products" },
    { id: "offers", label: "Offers & Events" },
    { id: "reviews", label: "Reviews (26k+)" },
    { id: "about", label: "Amenities" },
    { id: "contact", label: "Location" },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Sleek Top Utility Bar */}
      <div className="bg-slate-950 border-b border-white/[0.06] text-[11px] py-1 px-4 text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Now · Closes 9:30 PM (McDonald's till 12 AM)
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-400" />
              Road No. 1, Banjara Hills, Hyderabad
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden sm:flex items-center gap-1 text-amber-300 font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.2 ★ (26,086 Google Reviews)
            </span>
            <span className="hidden lg:inline text-slate-600">•</span>
            <span className="hidden lg:inline text-slate-400">
              Free Parking B1/B2
            </span>
            <a
              href="tel:+914066685555"
              className="hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" /> +91 40 6668 5555
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-2.5"
            : "bg-slate-950/75 backdrop-blur-lg border-b border-white/[0.05] py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-all">
              <svg className="w-5 h-5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 21V8L12 3L21 8V21L12 17L3 21Z" strokeLinejoin="round" />
                <circle cx="12" cy="11" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-lg font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  CITY CENTRE
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                  MALL
                </span>
              </div>
              <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                <span className="text-slate-300 font-medium">సిటీ సెంటర్ మాల్</span>
                <span>•</span>
                <span>Banjara Hills</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-2xl border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Icons (Search, Cart, Auth, Hamburger) */}
          <div className="flex items-center gap-2">
            {/* Minimalist Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/[0.08] text-slate-300 hover:text-white transition-all text-xs"
              title="Search stores & items"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline text-slate-400">Search stores...</span>
              <kbd className="hidden md:inline text-[9px] bg-slate-950 px-1.5 py-0.5 rounded border border-slate-700 text-slate-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/[0.08] text-slate-300 hover:text-amber-400 transition-all group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 transition-colors" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-slate-950 font-black text-[10px] rounded-full flex items-center justify-center shadow-md">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* User Auth / Profile Button */}
            {user ? (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/40 text-amber-300 hover:bg-slate-800 transition-all text-xs"
              >
                <div className="w-5 h-5 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[10px]">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:inline font-medium max-w-[80px] truncate">
                  {user.name}
                </span>
              </button>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all active:scale-95"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 animate-slide-up">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : "text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-800 mt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <div className="font-semibold text-white">City Centre Mall, Banjara Hills</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Road No. 1, Hyderabad · Closes 9:30 PM</div>
              </div>

              {user && (
                <button
                  onClick={logout}
                  className="w-full text-center py-2 text-xs text-rose-400 hover:bg-rose-500/10 rounded-lg"
                >
                  Sign Out ({user.email})
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
