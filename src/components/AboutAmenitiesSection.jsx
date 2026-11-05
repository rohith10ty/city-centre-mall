import React from "react";
import {
  ShieldCheck,
  Wifi,
  Car,
  CreditCard,
  Gamepad2,
  Compass,
  Wrench,
  Clock,
  MapPin,
  CheckCircle,
  Sparkles,
  Phone,
} from "lucide-react";
import { MALL_INFO } from "../data/mallData";

export const AboutAmenitiesSection = () => {
  const amenitiesList = [
    {
      icon: ShieldCheck,
      title: "Women-Owned Enterprise",
      tag: "From the Business",
      desc: "City Centre Mall proudly identifies as women-owned, fostering inclusive retail opportunities, diverse leadership, and dedicated female safety standards.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Car,
      title: "Dedicated Free Parking Lot",
      tag: "Basement Levels B1 & B2",
      desc: "Stress-free parking with dedicated B1 for 4-wheelers (cars) and B2 for 2-wheelers (bikes), complete with 24/7 security attendants.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Compass,
      title: "Terrace Mosque & Prayer Hall",
      tag: "Terrace Floor",
      desc: "Peaceful prayer hall situated on the rooftop terrace, offering clean ablution facilities for visitors, shoppers, and staff throughout the day.",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Wifi,
      title: "High-Speed Free Wi-Fi",
      tag: "Throughout All Floors",
      desc: "Seamless connectivity for shoppers across all six levels, allowing effortless browsing, mobile payments, and digital coordination.",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: Gamepad2,
      title: "Children's Playground & Arcade",
      tag: "Ground Floor & Floor 4",
      desc: "Ground floor dedicated kids' costume & play corner plus SMAAASH bowling arcade on Floor 4 for family recreation.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Wrench,
      title: "Official On-Site Tech Support",
      tag: "Floor 2 Authorized Center",
      desc: "Authorized Google Pixel Store & Service Centre providing genuine spare parts, screen replacements, diagnosis, and fast turnaround.",
      color: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    },
    {
      icon: CreditCard,
      title: "All Digital & Card Payments",
      tag: "Debit, Credit & UPI",
      desc: "100% cashless convenience across all dining outlets, supermarket counters, and apparel stores with NFC contactless tap.",
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
    {
      icon: Clock,
      title: "Extended Dining Hours",
      tag: "Till 12:00 AM Midnight",
      desc: "McDonald's open until midnight daily. General retail stores welcome visitors from 10:30 AM to 9:30 PM seven days a week.",
      color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    },
  ];

  return (
    <section id="about" className="py-16 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mall Amenities & Hospitality</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            About City Centre Mall Banjara Hills
          </h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Situated on Road No. 1 in Banjara Hills, Hyderabad, City Centre Mall is designed to offer a nostalgic, relaxed, and hassle-free shopping experience for families and discerning visitors.
          </p>
        </div>

        {/* Amenities 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl border ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Available Today</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
