import React, { useState } from "react";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { MALL_INFO } from "../data/mallData";

export const MallGallerySection = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  const photos = MALL_INFO.gallery;

  const openLightbox = (idx) => setActivePhotoIdx(idx);
  const closeLightbox = () => setActivePhotoIdx(null);

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
            <Camera className="w-4 h-4" />
            <span>Google Maps Photographic Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Explore City Centre Mall in Pictures
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Real visitor photos from Google Maps featuring the exterior architectural facade, skylight atrium, store promenades, and multi-level escalators.
          </p>
        </div>
        <div className="text-xs text-slate-400 flex items-center gap-1.5 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 self-start md:self-auto">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Road No. 1, Banjara Hills, Hyderabad</span>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Large featured photo (Facade) */}
        <div
          onClick={() => openLightbox(0)}
          className="sm:col-span-2 lg:col-span-2 relative h-80 sm:h-96 rounded-3xl overflow-hidden group cursor-pointer border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-2xl"
        >
          <img
            src={photos[0].url}
            alt={photos[0].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 mb-2 inline-block">
                Main Landmark
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">{photos[0].title}</h3>
              <p className="text-xs text-slate-300 mt-1">{photos[0].subtitle}</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/80 backdrop-blur border border-slate-700 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Gallery item 1 */}
        <div
          onClick={() => openLightbox(1)}
          className="relative h-80 sm:h-96 rounded-3xl overflow-hidden group cursor-pointer border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl"
        >
          <img
            src={photos[1].url}
            alt={photos[1].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-lg font-bold text-white">{photos[1].title}</h3>
            <p className="text-xs text-slate-300 mt-1">{photos[1].subtitle}</p>
          </div>
        </div>

        {/* Gallery items 2, 3, 4 */}
        {photos.slice(2).map((item, idx) => (
          <div
            key={idx + 2}
            onClick={() => openLightbox(idx + 2)}
            className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 mt-0.5">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhotoIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={photos[activePhotoIdx].url}
              alt={photos[activePhotoIdx].title}
              className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl border border-slate-800"
            />
            <div className="text-center mt-4">
              <h4 className="text-lg font-bold text-white">{photos[activePhotoIdx].title}</h4>
              <p className="text-xs text-slate-400 mt-1">{photos[activePhotoIdx].subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
