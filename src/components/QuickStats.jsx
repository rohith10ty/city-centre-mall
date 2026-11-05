import React from "react";
import { Star, ShieldCheck, Car, Clock, Wifi, Gamepad2, Compass, Award } from "lucide-react";
import { MALL_INFO } from "../data/mallData";

export const QuickStats = () => {
  return (
    <section className="relative z-20 py-8 bg-slate-950/90 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Feature highlight cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Rating Card */}
          <div className="p-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-amber-500/25 hover:border-amber-500/50 transition-all shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-[10px] uppercase font-bold text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                Google Maps
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">4.2 ★</div>
            <div className="text-[11px] text-slate-400 mt-0.5">26,086 Verified Reviews</div>
          </div>

          {/* Women Owned Card */}
          <div className="p-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-emerald-500/25 hover:border-emerald-500/50 transition-all shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                From Business
              </span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white line-clamp-1">Women-Owned</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Inclusive Leadership</div>
          </div>

          {/* Parking & Access */}
          <div className="p-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-blue-500/25 hover:border-blue-500/50 transition-all shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400">
                <Car className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                Convenient
              </span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white">Free Parking</div>
            <div className="text-[11px] text-slate-400 mt-0.5">B1 (Cars) & B2 (Bikes)</div>
          </div>

          {/* Entertainment & Timings */}
          <div className="p-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-purple-500/25 hover:border-purple-500/50 transition-all shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-xl bg-purple-500/15 text-purple-400">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold text-purple-400 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                Floor 4 & Terrace
              </span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white">SMAAASH & Mosque</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Bowling, VR & Rooftop</div>
          </div>
        </div>
      </div>
    </section>
  );
};
