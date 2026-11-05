import React, { useState } from "react";
import {
  ShoppingBag,
  X,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  Tag,
  CheckCircle,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { useMall } from "../context/MallContext";

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    discountAmount,
    cartTotal,
    appliedCoupon,
    applyCouponCode,
    checkoutOrder,
    setActiveTab,
  } = useMall();

  const [inputCoupon, setInputCoupon] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (inputCoupon.trim()) {
      applyCouponCode(inputCoupon);
    }
  };

  const handleCheckout = () => {
    const orderNum = checkoutOrder();
    setOrderConfirmed(orderNum);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col justify-between shadow-2xl animate-slide-up">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Your Mall Shopping Bag</h3>
              <span className="text-[11px] text-slate-400">
                {cart.length} unique item{cart.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setIsCartOpen(false);
              setOrderConfirmed(null);
            }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        {orderConfirmed ? (
          <div className="p-8 text-center flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black text-white">Order Confirmed!</h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
              Thank you for shopping at City Centre Mall Banjara Hills. Your pickup token is ready:
            </p>
            <div className="px-4 py-2.5 rounded-xl bg-slate-950 border border-amber-500/50 font-mono text-sm font-bold text-amber-400">
              {orderConfirmed}
            </div>
            <p className="text-[11px] text-slate-500">
              Please present this reference number at the respective store counters for immediate delivery.
            </p>
            <button
              onClick={() => {
                setOrderConfirmed(null);
                setIsCartOpen(false);
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Continue Shopping
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="p-8 text-center flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-800/60 text-slate-500 flex items-center justify-center">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h4 className="text-base font-bold text-white">Your bag is currently empty</h4>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Explore branded apparel, electronics, gadgets, and food from stores inside City Centre Mall.
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setActiveTab("categories");
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20"
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {/* Cart Items list */}
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}`}
                className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex gap-3 items-center justify-between"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-800 shrink-0"
                />

                <div className="flex-1 min-w-0 px-2">
                  <h5 className="text-xs font-semibold text-white truncate">{item.name}</h5>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <span className="text-amber-400 font-medium">{item.brand}</span>
                    <span>•</span>
                    <span className="text-slate-500">{item.storeFloor}</span>
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1 bg-slate-900 border border-slate-700/80 rounded-lg p-0.5">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                      className="p-1 hover:bg-slate-800 rounded text-slate-300"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-semibold text-white px-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                      className="p-1 hover:bg-slate-800 rounded text-slate-300"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo Code Box */}
            <div className="pt-3">
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code (e.g. CITYCENTRE)"
                  value={inputCoupon}
                  onChange={(e) => setInputCoupon(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs uppercase tracking-wider focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs border border-slate-700 transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedCoupon.applied && (
                <div className="mt-2 text-[11px] text-emerald-400 flex items-center justify-between px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <span>Coupon {appliedCoupon.code} Applied</span>
                  <span>-{appliedCoupon.discountPercent}% OFF</span>
                </div>
              )}
            </div>

            {/* Express Mall Pickup Notice */}
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Free Express Pickup directly from City Centre Mall counters</span>
            </div>
          </div>
        )}

        {/* Footer Checkout Summary */}
        {cart.length > 0 && !orderConfirmed && (
          <div className="p-5 border-t border-slate-800 bg-slate-950/80 space-y-3">
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Promotional Discount</span>
                  <span>-₹{discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>In-Mall Store Pickup</span>
                <span className="text-emerald-400 font-semibold">FREE</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-bold text-white">
                <span>Total Amount</span>
                <span className="text-amber-400 font-black text-base">
                  ₹{cartTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <span>Confirm Reservation / Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
