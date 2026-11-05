import React from "react";
import { Star, MapPin, Clock, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { useMall } from "../context/MallContext";
import { STORES_DATA } from "../data/mallData";

export const FeaturedBrands = () => {
  const { setActiveTab } = useMall();

  const featuredStores = STORES_DATA.filter((s) => s.featured);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Featured Brand Showrooms</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Popular Stores & Anchor Outlets
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Explore trusted fashion brands, official electronics service, popular fast food, and premier entertainment in Banjara Hills.
          </p>
        </div>

        <button
          onClick={() => setActiveTab("directory")}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <span>View All 45+ Stores & Floor Map</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid of Featured Stores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredStores.map((store) => (
          <div
            key={store.id}
            className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            {/* Store Banner Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Floor Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur border border-slate-700 text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400" />
                {store.floor}
              </div>

              {/* Rating pill */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur border border-slate-700 text-[11px] font-bold text-white flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                {store.rating} ({store.reviews})
              </div>

              {/* Category label */}
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                  {store.category}
                </span>
              </div>
            </div>

            {/* Store Information */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {store.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {store.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {store.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timing & Action */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  {store.openHours.split("–")[0]}
                </span>
                <button
                  onClick={() => setActiveTab("directory")}
                  className="font-semibold text-amber-400 group-hover:underline flex items-center gap-1"
                >
                  Store Info
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
