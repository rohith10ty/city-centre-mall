import React, { useState, useMemo } from "react";
import {
  Store,
  MapPin,
  Clock,
  Phone,
  Search,
  Filter,
  Star,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { STORES_DATA } from "../data/mallData";

export const StoreDirectorySection = () => {
  const [selectedFloor, setSelectedFloor] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [storeSearch, setStoreSearch] = useState("");

  const floorOptions = [
    { id: "all", label: "All Floors" },
    { id: "Ground Floor", label: "Ground Floor (Kids & Mart)" },
    { id: "Floor 1", label: "Floor 1 (McDonald's & Max)" },
    { id: "Floor 2", label: "Floor 2 (Pixel & Fashion)" },
    { id: "Floor 3", label: "Floor 3 (Salons & Spas)" },
    { id: "Floor 4", label: "Floor 4 (SMAAASH Bowling)" },
    { id: "Terrace Floor", label: "Terrace (Dining & Mosque)" },
  ];

  const categoryOptions = [
    { id: "all", label: "All Categories" },
    { id: "Fashion", label: "Fashion & Apparel" },
    { id: "Food & Drink", label: "Food & Dining" },
    { id: "Entertainment", label: "Gaming & Bowling" },
    { id: "Electronics", label: "Electronics & Service" },
    { id: "Groceries", label: "Hypermarket" },
    { id: "Kids", label: "Kids & Toys" },
    { id: "Beauty", label: "Beauty & Spa" },
    { id: "Services", label: "Agencies & Services" },
  ];

  const filteredStores = useMemo(() => {
    return STORES_DATA.filter((store) => {
      // Floor filter
      const matchesFloor =
        selectedFloor === "all" ||
        store.floor.toLowerCase().includes(selectedFloor.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === "all" ||
        store.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search term
      const matchesSearch =
        !storeSearch.trim() ||
        store.name.toLowerCase().includes(storeSearch.toLowerCase()) ||
        store.description.toLowerCase().includes(storeSearch.toLowerCase()) ||
        store.tags.some((t) => t.toLowerCase().includes(storeSearch.toLowerCase()));

      return matchesFloor && matchesCategory && matchesSearch;
    });
  }, [selectedFloor, selectedCategory, storeSearch]);

  return (
    <section id="directory" className="py-16 bg-slate-900/40 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>Interactive Floor Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            City Centre Mall Store Directory
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Find brand locations, floor levels, contact numbers, and operating schedules across all 6 levels of City Centre Mall, Banjara Hills.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 mb-8 backdrop-blur shadow-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search store name, brand, or tag..."
                value={storeSearch}
                onChange={(e) => setStoreSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Floor Dropdown */}
            <div className="relative">
              <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={selectedFloor}
                onChange={(e) => setSelectedFloor(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-amber-500 appearance-none"
              >
                {floorOptions.map((f) => (
                  <option key={f.id} value={f.id} className="bg-slate-900 text-white">
                    {f.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <Filter className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-amber-500 appearance-none"
              >
                {categoryOptions.map((c) => (
                  <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Floor Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 scrollbar-none">
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mr-2 shrink-0">
              Floors:
            </span>
            {floorOptions.map((floor) => (
              <button
                key={floor.id}
                onClick={() => setSelectedFloor(floor.id)}
                className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-colors ${
                  selectedFloor === floor.id
                    ? "bg-amber-500 text-slate-950 font-bold"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {floor.label.split("(")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 p-5 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={store.image}
                      alt={store.name}
                      className="w-14 h-14 rounded-xl object-cover border border-slate-700 shrink-0"
                    />
                    <div>
                      <h3 className="text-base font-bold text-white hover:text-amber-400 transition-colors">
                        {store.name}
                      </h3>
                      <span className="inline-block mt-0.5 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {store.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-amber-400 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold">{store.rating}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {store.description}
                </p>

                {/* Details list */}
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-slate-400">Location:</span>
                    <span className="font-semibold text-white">{store.floor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-slate-400">Hours:</span>
                    <span>{store.openHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="text-slate-400">Desk:</span>
                    <a
                      href={`tel:${store.phone}`}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {store.phone}
                    </a>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {store.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status pill & call */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Open Today
                </span>
                <a
                  href={`tel:${store.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3" />
                  Call Store
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-300 font-medium">No stores match your selected filters.</p>
            <button
              onClick={() => {
                setSelectedFloor("all");
                setSelectedCategory("all");
                setStoreSearch("");
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
