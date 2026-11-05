import React, { useState } from "react";
import {
  X,
  Star,
  MapPin,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";
import { useMall } from "../context/MallContext";

export const ProductDetailsModal = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    wishlist,
    toggleWishlist,
  } = useMall();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  if (!selectedProduct) return null;

  const isFav = wishlist.includes(selectedProduct.id);

  const handleAdd = () => {
    addToCart(selectedProduct, quantity, selectedSize);
    setSelectedProduct(null);
  };

  const sizes = selectedProduct.category === "fashion"
    ? ["S", "M", "L", "XL", "XXL"]
    : selectedProduct.category === "footwear"
    ? ["UK 7", "UK 8", "UK 9", "UK 10"]
    : ["Standard"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 relative bg-slate-950 min-h-[260px] md:min-h-[420px]">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="px-3 py-1 rounded-md bg-emerald-500 text-slate-950 font-black text-xs shadow-lg">
              {selectedProduct.discount}
            </span>
            {selectedProduct.badge && (
              <span className="px-2.5 py-1 rounded-md bg-slate-900/90 text-amber-400 font-semibold text-xs border border-amber-500/30">
                {selectedProduct.badge}
              </span>
            )}
          </div>
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Brand & Floor */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-bold text-amber-400 text-sm">
                {selectedProduct.brand}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {selectedProduct.storeFloor}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-black text-white leading-snug">
              {selectedProduct.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-xs font-bold ml-1">{selectedProduct.rating}</span>
              </div>
              <span className="text-xs text-slate-500">
                ({selectedProduct.reviews} customer reviews)
              </span>
            </div>

            {/* Price section */}
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-2xl font-black text-white">
                ₹{selectedProduct.price.toLocaleString()}
              </span>
              <span className="text-sm text-slate-500 line-through">
                ₹{selectedProduct.originalPrice.toLocaleString()}
              </span>
              <span className="text-xs font-bold text-emerald-400 ml-1">
                Save ₹{(selectedProduct.originalPrice - selectedProduct.price).toLocaleString()}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              {selectedProduct.description}
            </p>

            {/* Size / Variant Options */}
            {sizes.length > 1 && (
              <div className="mt-5">
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Select Size / Option:
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                        selectedSize === s
                          ? "bg-amber-500 text-slate-950 border-amber-500"
                          : "bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-300">Quantity:</span>
              <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg p-0.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:bg-slate-700 rounded text-slate-300"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold text-white px-3">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:bg-slate-700 rounded text-slate-300"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Store Guarantees */}
            <div className="mt-5 pt-3 border-t border-slate-800 space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Authentic product directly from Mall Brand Store</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant counter pickup available at {selectedProduct.storeFloor}</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
            <button
              onClick={() => toggleWishlist(selectedProduct.id)}
              className={`p-3 rounded-xl border transition-colors ${
                isFav
                  ? "bg-rose-500/20 text-rose-500 border-rose-500/40"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
              }`}
              title="Save to wishlist"
            >
              <Heart className={`w-4 h-4 ${isFav ? "fill-rose-500" : ""}`} />
            </button>

            <button
              onClick={handleAdd}
              className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag (₹{(selectedProduct.price * quantity).toLocaleString()})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
