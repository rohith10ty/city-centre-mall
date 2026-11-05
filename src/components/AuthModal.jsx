import React, { useState } from "react";
import { X, User, Mail, Lock, Sparkles, CheckCircle2, ShieldCheck, LogOut } from "lucide-react";
import { useMall } from "../context/MallContext";

export const AuthModal = () => {
  const { isAuthOpen, setIsAuthOpen, authMode, setAuthMode, user, login, logout, wishlist } = useMall();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!isAuthOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      name: form.name || form.email.split("@")[0] || "Valued Shopper",
      email: form.email,
      tier: "City Centre Gold Member",
      memberSince: "Nov 2026",
    });
  };

  const handleDemoLogin = () => {
    login({
      name: "Rohit Sharma",
      email: "rohit.sharma@citycentremall.in",
      tier: "Banjara VIP Member",
      memberSince: "Jan 2024",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {user ? (
          /* Profile Mode */
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 text-xl font-black flex items-center justify-center mx-auto shadow-xl shadow-amber-500/20">
                {user.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-white mt-3">{user.name}</h3>
              <p className="text-xs text-slate-400">{user.email}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{user.tier}</span>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Mall Membership:</span>
                <span className="font-semibold text-emerald-400">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Saved Wishlist Items:</span>
                <span className="font-semibold text-white">{wishlist.length} Items</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Complimentary Parking:</span>
                <span className="font-semibold text-amber-400">B1 / B2 Passes Included</span>
              </div>
            </div>

            <button
              onClick={() => {
                logout();
                setIsAuthOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 font-bold text-xs border border-rose-500/20 flex items-center justify-center gap-2 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out of Account</span>
            </button>
          </div>
        ) : (
          /* Sign In / Sign Up Form */
          <div>
            <div className="mb-6 text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-2 border border-amber-500/30">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-white">
                {authMode === "signin" ? "Sign In to City Centre" : "Join City Centre Mall"}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Access exclusive store vouchers, bowling deals, and order updates.
              </p>
            </div>

            {/* Quick Demo Login Option */}
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full mb-5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>One-Click Visitor Demo Sign In</span>
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-slate-900 text-slate-500">Or use email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {authMode === "signup" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohith Kumar"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. shopper@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all active:scale-[0.99]"
              >
                {authMode === "signin" ? "Sign In" : "Create Account"}
              </button>
            </form>

            <div className="mt-5 text-center text-xs text-slate-400">
              {authMode === "signin" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setAuthMode("signup")}
                    className="text-amber-400 font-semibold hover:underline"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setAuthMode("signin")}
                    className="text-amber-400 font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
