import React, { useState, useMemo } from "react";
import { Search, X, Store, ShoppingBag, ArrowRight, MapPin, Tag } from "lucide-react";
import { useMall } from "../context/MallContext";
import { PRODUCTS_DATA, STORES_DATA, CATEGORIES_LIST } from "../data/mallData";

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, setSelectedProduct, setActiveTab } = useMall();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStores = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return STORES_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.category.toLowerCase().includes(term) ||
        s.tags.some((t) => t.toLowerCase().includes(term)) ||
        s.floor.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return PRODUCTS_DATA.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-amber-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search stores, brands, categories or products in City Centre Mall..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-400 text-base focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="p-1 text-slate-400 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1.5 rounded-lg border border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Content area */}
        <div className="max-h-[65vh] overflow-y-auto p-5 space-y-6">
          {!searchTerm.trim() ? (
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Popular Searches at City Centre
              </p>
              <div className="flex flex-wrap gap-2">
                {["Max Fashion", "Google Pixel Store", "McDonald's", "SMAAASH Bowling", "Kurta", "Smartphones", "Perfume", "Floor 1"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1.5 bg-slate-800/80 hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-500/40 border border-slate-700 rounded-full text-xs text-slate-300 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Quick Directory Categories
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CATEGORIES_LIST.slice(1).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setActiveTab("categories");
                      }}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-left transition-colors"
                    >
                      <Tag className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-slate-200">{cat.name}</div>
                        <div className="text-[10px] text-slate-400">{cat.count}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Stores results */}
              {filteredStores.length > 0 && (
                <div>
                  <h4 className="flex items-center text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3 gap-1.5">
                    <Store className="w-3.5 h-3.5" /> Stores & Outlets ({filteredStores.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredStores.map((store) => (
                      <div
                        key={store.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setActiveTab("directory");
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/30 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={store.image}
                            alt={store.name}
                            className="w-11 h-11 rounded-lg object-cover border border-slate-700"
                          />
                          <div>
                            <div className="text-sm font-semibold text-white flex items-center gap-2">
                              {store.name}
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30">
                                {store.category}
                              </span>
                            </div>
                            <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                              <MapPin className="w-3 h-3 text-slate-500" />
                              {store.floor} · {store.openHours}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Products results */}
              {filteredProducts.length > 0 && (
                <div>
                  <h4 className="flex items-center text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3 gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5" /> Products Available ({filteredProducts.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredProducts.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSelectedProduct(prod);
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/30 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-11 h-11 rounded-lg object-cover border border-slate-700"
                          />
                          <div>
                            <div className="text-sm font-medium text-white line-clamp-1">
                              {prod.name}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5">
                              {prod.brand} · <span className="text-amber-400 font-bold">₹{prod.price.toLocaleString()}</span>
                              <span className="text-slate-500 line-through text-[11px] ml-1.5">₹{prod.originalPrice.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                          {prod.discount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredStores.length === 0 && filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-400 text-sm">
                    No stores or items matching "<span className="text-white font-medium">{searchTerm}</span>" found.
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Try searching for "Max", "McDonald's", "Bowling", or "Kurta".
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
