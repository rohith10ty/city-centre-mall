import React, { useState, useMemo } from "react";
import {
  ShoppingBag,
  Heart,
  Star,
  MapPin,
  Eye,
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import { useMall } from "../context/MallContext";
import { PRODUCTS_DATA, CATEGORIES_LIST } from "../data/mallData";

export const CategoriesSection = () => {
  const {
    addToCart,
    wishlist,
    toggleWishlist,
    setSelectedProduct,
  } = useMall();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured"); // 'featured' | 'price-low' | 'price-high' | 'rating'

  // Filter & sort products
  const displayedProducts = useMemo(() => {
    let list = [...PRODUCTS_DATA];

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, sortBy]);

  return (
    <section id="categories" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Mall Catalogue & In-Store Shopping</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Shop by Categories
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Browse authentic products from stores inside City Centre Mall. Reserve online or add to cart for express in-mall pickup.
          </p>
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <SlidersHorizontal className="w-4 h-4 text-slate-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-500"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {CATEGORIES_LIST.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 shrink-0 ${
                isSelected
                  ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              <span>{cat.name}</span>
              {cat.count && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? "bg-slate-950/20 text-slate-950" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product) => {
          const isFav = wishlist.includes(product.id);

          return (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
            >
              {/* Product Image Area */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges: Discount & Status */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 font-black text-[11px] shadow-md">
                    {product.discount}
                  </span>
                  {product.badge && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/90 text-amber-400 font-semibold text-[10px] border border-amber-500/30">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-colors ${
                    isFav
                      ? "bg-rose-500/20 text-rose-500 border border-rose-500/40"
                      : "bg-slate-900/70 text-slate-300 hover:text-white border border-slate-700/60"
                  }`}
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFav ? "fill-rose-500" : ""}`} />
                </button>

                {/* Quick View Button overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold hover:bg-amber-500 hover:text-slate-950 transition-all shadow-lg"
                  >
                    <Eye className="w-4 h-4" />
                    Quick View
                  </button>
                </div>

                {/* Floor / Store attribution */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur border border-slate-800 text-slate-300">
                  <span className="font-medium text-amber-400">{product.brand}</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {product.storeFloor}
                  </span>
                </div>
              </div>

              {/* Product Info & Action */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="flex items-center text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="text-xs font-bold ml-1">{product.rating}</span>
                    </div>
                    <span className="text-[11px] text-slate-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="text-sm font-semibold text-white line-clamp-2 hover:text-amber-400 cursor-pointer transition-colors leading-snug"
                  >
                    {product.name}
                  </h3>
                </div>

                {/* Price and Add to Cart */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-white">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium">
                      In Stock at Mall
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 active:scale-95 transition-all"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
