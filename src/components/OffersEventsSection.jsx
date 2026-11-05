import React, { useState } from "react";
import {
  Tag,
  Calendar,
  Clock,
  MapPin,
  Copy,
  Check,
  Gift,
  Sparkles,
  ArrowRight,
  Users,
} from "lucide-react";
import { useMall } from "../context/MallContext";
import { OFFERS_DATA, UPCOMING_EVENTS } from "../data/mallData";

export const OffersEventsSection = () => {
  const { applyCouponCode, showToast, setIsCartOpen } = useMall();
  const [copiedCode, setCopiedCode] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    applyCouponCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const handleRsvp = (eventId, title) => {
    if (registeredEvents.includes(eventId)) {
      showToast(`You have already registered for ${title}!`, "info");
      return;
    }
    setRegisteredEvents([...registeredEvents, eventId]);
    showToast(`RSVP Confirmed for "${title}"! See you at City Centre.`, "success");
  };

  return (
    <section id="offers" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Promotional Top Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-16 border border-amber-500/40 shadow-2xl bg-gradient-to-r from-amber-600/30 via-slate-900 to-amber-950/40 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs">
            <Gift className="w-3.5 h-3.5" />
            <span>Grand Seasonal Shopping Carnival</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Exclusive In-Mall Discounts & Family Deals
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Flash your digital promo code at checkouts in Max Fashion, McDonald's, and SMAAASH Bowling or apply them directly in your digital bag.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <div className="px-4 py-3 rounded-2xl bg-slate-950/90 border border-amber-500/40 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Default Code</span>
            <span className="text-lg font-black text-amber-400 tracking-wider">CITYCENTRE</span>
            <span className="text-[10px] text-emerald-400 font-medium block">10% Instant Mall Bag Off</span>
          </div>
          <button
            onClick={() => handleCopy("CITYCENTRE")}
            className="px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all"
          >
            {copiedCode === "CITYCENTRE" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copiedCode === "CITYCENTRE" ? "Applied & Copied!" : "Claim Voucher"}</span>
          </button>
        </div>
      </div>

      {/* Ongoing Offers Grid */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Tag className="w-4 h-4" />
              <span>Limited-Time Retail Promotions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Special Offers & Store Deals
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OFFERS_DATA.map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all hover:shadow-xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                        {offer.tag}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2">{offer.title}</h3>
                      <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                        <span className="font-semibold text-slate-300">{offer.store}</span>
                        <span>•</span>
                        <span>{offer.floor}</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-black block">
                        {offer.discount}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{offer.validTill}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded-lg bg-slate-950 border border-dashed border-slate-700 font-mono text-xs text-white">
                      {offer.code}
                    </div>
                    <button
                      onClick={() => handleCopy(offer.code)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-semibold text-xs border border-amber-500/30 transition-all flex items-center gap-1"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? "Applied" : "Apply"}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Calendar className="w-4 h-4" />
              <span>Mall Happenings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Upcoming Events & Entertainment
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => {
            const isRegistered = registeredEvents.includes(event.id);

            return (
              <div
                key={event.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 p-5 flex flex-col justify-between transition-all hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {event.badge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Users className="w-3 h-3 text-slate-500" />
                      {event.attendees}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="font-medium text-slate-200">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-slate-400">{event.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => handleRsvp(event.id, event.title)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                      isRegistered
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default"
                        : "bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/20"
                    }`}
                  >
                    {isRegistered ? <Check className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                    <span>{isRegistered ? "You're Registered!" : "RSVP / Get Free Pass"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
