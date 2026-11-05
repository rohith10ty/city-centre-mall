import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Navigation,
  Send,
  CheckCircle2,
  Building,
  HelpCircle,
} from "lucide-react";
import { useMall } from "../context/MallContext";
import { MALL_INFO } from "../data/mallData";

export const ContactLocationSection = () => {
  const { showToast } = useMall();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please complete all required fields.", "error");
      return;
    }

    setSubmitted(true);
    showToast("Thank you! Your message has been sent to City Centre Mall management.", "success");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 4000);
  };

  const mapsUrl =
    "https://www.google.com/maps/place/City+Center+Mall/@17.4149422,78.4487433,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb912ea1cf8915:0xa465794b40397bf!8m2!3d17.4149422!4d78.4487433!16s%2Fg%2F1tgf676v";

  return (
    <section id="contact" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Prime Banjara Hills Location</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Visit Us or Get in Touch
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Conveniently located on Road No. 1, Banjara Hills with seamless road connectivity, metro proximity, and dedicated basement parking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact info & Google Maps preview */}
        <div className="lg:col-span-5 space-y-6">
          {/* Location details card */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 space-y-5 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-amber-400" />
              Mall Headquarters & Address
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Official Address</span>
                  <span className="text-slate-300 leading-relaxed block mt-0.5">
                    {MALL_INFO.address}
                  </span>
                  <span className="text-[11px] text-amber-400 font-mono mt-1 block">
                    Plus Code: {MALL_INFO.plusCode}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Opening Timings</span>
                  <span className="text-slate-300 block mt-0.5">
                    Retail Stores: 10:30 AM – 09:30 PM
                  </span>
                  <span className="text-slate-400 block">
                    McDonald's Dine-in / Takeaway: Till 12:00 AM Midnight
                  </span>
                  <span className="text-slate-400 block">
                    SMAAASH Bowling: 11:00 AM – 10:30 PM
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Parking Facilities</span>
                  <span className="text-slate-300 block mt-0.5">{MALL_INFO.parking}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Helpline & Leasing</span>
                  <a
                    href="tel:+914066685555"
                    className="text-amber-400 hover:underline block mt-0.5"
                  >
                    {MALL_INFO.phone}
                  </a>
                  <a
                    href="mailto:support@citycentremallhyd.com"
                    className="text-slate-400 hover:text-white block mt-0.5"
                  >
                    {MALL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps External Directions Button */}
            <div className="pt-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="rounded-3xl overflow-hidden border border-slate-800 h-60 shadow-xl relative">
            <iframe
              title="City Centre Mall Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0371457497184!2d78.4461683758364!3d17.414947201490214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912ea1cf8915%3A0xa465794b40397bf!2sCity%20Center%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact & Leasing Inquiry Form */}
        <div className="lg:col-span-7 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
              Inquiry & Customer Support Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Send a Message to Mall Administration
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              For retail space leasing, brand pop-ups, event registrations, or lost & found inquiries.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Our helpdesk team at City Centre Mall Banjara Hills will respond to you within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. vikram@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500 appearance-none"
                  >
                    <option value="General Inquiry">General Visitor Inquiry</option>
                    <option value="Store Leasing">Store / Kiosk Leasing</option>
                    <option value="Event Space Booking">Atrium Event Space Booking</option>
                    <option value="Lost and Found">Lost & Found Assistance</option>
                    <option value="Google Pixel Service">Google Pixel Tech Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Message / Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can our mall customer management help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
