import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Star,
  ShieldCheck,
  Heart,
  Store,
  Compass,
  ArrowUp,
} from "lucide-react";
import { useMall } from "../context/MallContext";
import { MALL_INFO } from "../data/mallData";

export const Footer = () => {
  const { setActiveTab } = useMall();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Top floor highlight bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>City Centre Mall Level Guide:</span>
          </div>

          <div className="flex flex-wrap gap-2 text-slate-300">
            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60">
              <strong className="text-amber-400">B2:</strong> Bike Parking
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60">
              <strong className="text-amber-400">B1:</strong> Car Parking
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60">
              <strong className="text-amber-400">G:</strong> Hypermarket & Kids
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60">
              <strong className="text-amber-400">F1:</strong> McDonald's & Max
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60">
              <strong className="text-amber-400">F2:</strong> Google Pixel & aLL
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60">
              <strong className="text-amber-400">F3:</strong> Salon & Spa
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60">
              <strong className="text-amber-400">F4:</strong> SMAAASH Bowling
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60">
              <strong className="text-amber-400">Terrace:</strong> Dining & Mosque
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Mall Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg className="w-6 h-6 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 21V8L12 3L21 8V21L12 17L3 21Z" strokeLinejoin="round" />
                  <circle cx="12" cy="11" r="3" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-black text-white tracking-tight">
                  CITY CENTRE MALL
                </div>
                <div className="text-[11px] text-amber-400 font-medium">
                  {MALL_INFO.teluguName} · Banjara Hills
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed pr-6">
              Hyderabad's iconic shopping, dining, and leisure centre on Road No. 1, Banjara Hills. Home to Max Fashion, Google Pixel authorized service, McDonald's, and SMAAASH bowling.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Women-Owned Business
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px] font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.2 ★ (26,086 Reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("home")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home & Banners
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("directory")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Store Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("categories")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Shop Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("offers")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Offers & Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Google Reviews (26k+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("about")}
                  className="hover:text-amber-400 transition-colors"
                >
                  About & Amenities
                </button>
              </li>
            </ul>
          </div>

          {/* Key Stores */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Key Outlets
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-300">Max Fashion (F1 & F2)</li>
              <li className="text-slate-300">McDonald's (Floor 1)</li>
              <li className="text-slate-300">SMAAASH Bowling (Floor 4)</li>
              <li className="text-slate-300">Google Pixel Center (Floor 2)</li>
              <li className="text-slate-300">Reliance Trends (Ground)</li>
              <li className="text-slate-300">Scullers Club (Floor 1)</li>
              <li className="text-slate-300">Terrace Mosque (Rooftop)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Visit & Contact
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span>Road No. 1, Banjara Hills, Hyderabad - 500034</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Daily: 10:30 AM – 9:30 PM</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="tel:+914066685555" className="hover:text-amber-400">
                  +91 40 6668 5555
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Free Parking B1 & B2</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & scroll to top */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} City Centre Mall, Banjara Hills, Hyderabad. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
