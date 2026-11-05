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
  Compass,
  Store,
  Tag,
  Star,
  Info,
  Layers,
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "directory", label: "Store Directory", icon: Store },
    { id: "categories", label: "Shop Products", icon: ShoppingBag },
    { id: "offers", label: "Offers & Events", icon: Tag },
    { id: "reviews", label: "Google Reviews", icon: Star },
    { id: "about", label: "About & Amenities", icon: Info },
    { id: "contact", label: "Location & Contact", icon: MapPin },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);

    // If section exists on home page, smooth scroll to it
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro banner with mall live status & location */}
      <div className="bg-slate-950/95 border-b border-slate-800/80 text-[11px] py-1.5 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 -ml-3"></span>
              Open Now · Closes 9:30 PM (McDonald's till 12 AM)
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-400" />
              Road No. 1, Banjara Hills, Hyderabad
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline-flex items-center gap-1 text-amber-300 font-medium">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.2 Rating (26k+ Reviews)
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              Free Parking B1/B2
            </span>
            <a
              href="tel:+914066685555"
              className="hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" /> +91 40 6668 5555
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? "glass-nav shadow-2xl py-3" : "bg-slate-900/90 backdrop-blur-md py-4 border-b border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 21V8L12 3L21 8V21L12 17L3 21Z" strokeLinejoin="round" />
                <circle cx="12" cy="11" r="3" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  CITY CENTRE
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-amber-500">
                  MALL
                </span>
              </div>
              <div className="text-[10px] text-slate-400 flex items-center gap-1 -mt-1">
                <span>{MALL_INFO.teluguName}</span>
                <span>•</span>
                <span>Banjara Hills</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm shadow-amber-500/10"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Icons (Search, Cart, Auth, Hamburger) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Quick Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all text-xs"
              title="Search stores & items"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden md:inline text-[9px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700 text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Shopping Cart Button with counter badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 group-hover:text-amber-400 transition-colors" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[11px] rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* User Auth / Profile Button */}
            {user ? (
              <div className="relative group">
                <button
                  onClick={() => setIsAuthOpen(true)}
                  className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800/90 border border-amber-500/40 text-amber-300 hover:bg-slate-800 transition-all text-xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline font-medium max-w-[90px] truncate">
                    {user.name}
                  </span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all active:scale-95"
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign In</span>
              </button>
            )}

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1.5 animate-slide-up">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {link.icon && <link.icon className="w-4 h-4 text-amber-400" />}
                    <span>{link.label}</span>
                  </div>
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-800 mt-2 flex flex-col gap-2">
              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 text-xs text-slate-400">
                <div className="font-semibold text-white mb-1">Mall Address</div>
                <div>CITY CENTER, 8-2-592, Road No. 1, Banjara Hills, Hyderabad</div>
                <div className="text-amber-400 mt-1 font-medium">Closes 9:30 PM · McDonald's 12 AM</div>
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
