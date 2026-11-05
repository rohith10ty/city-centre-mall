import React, { useState } from "react";
import {
  Star,
  ThumbsUp,
  Share2,
  Sparkles,
  Bot,
  MessageSquare,
  CheckCircle2,
  PenLine,
  Filter,
  Check,
  X,
} from "lucide-react";
import { useMall } from "../context/MallContext";
import { MALL_INFO } from "../data/mallData";

export const GoogleReviewsSection = () => {
  const { showToast } = useMall();
  const [selectedTag, setSelectedTag] = useState("All");
  const [reviewsList, setReviewsList] = useState(MALL_INFO.realReviews);
  const [likedReviews, setLikedReviews] = useState({});

  // Write Review Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    text: "",
  });

  const handleLike = (reviewId) => {
    setLikedReviews((prev) => {
      const isLiked = prev[reviewId];
      const updated = { ...prev, [reviewId]: !isLiked };

      setReviewsList((rList) =>
        rList.map((r) =>
          r.id === reviewId ? { ...r, likes: r.likes + (isLiked ? -1 : 1) } : r
        )
      );

      return updated;
    });
  };

  const handleShare = (author) => {
    navigator.clipboard?.writeText(window.location.href);
    showToast(`Copied review link by ${author} to clipboard!`, "info");
  };

  const submitReview = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.text.trim()) {
      showToast("Please enter your name and review text.", "error");
      return;
    }

    const created = {
      id: Date.now(),
      author: newReview.name,
      badge: "Local Guide · Verified Visitor",
      date: "Just now",
      rating: newReview.rating,
      tag: "city centre mall",
      text: newReview.text,
      likes: 0,
    };

    setReviewsList([created, ...reviewsList]);
    setIsModalOpen(false);
    setNewReview({ name: "", rating: 5, text: "" });
    showToast("Thank you! Your Google review has been posted.", "success");
  };

  // Filter reviews
  const displayedReviews =
    selectedTag === "All"
      ? reviewsList
      : reviewsList.filter((r) => {
          const matchTag = r.tag?.toLowerCase() === selectedTag.toLowerCase();
          const matchText = r.text?.toLowerCase().includes(selectedTag.toLowerCase());
          return matchTag || matchText;
        });

  return (
    <section id="reviews" className="py-16 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>Google Maps Verified Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              What Hyderabad Visitors Say
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Real feedback from local guides and shoppers on Google Maps about stores, dining, bowling, parking, and family experience.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all self-start md:self-auto"
          >
            <PenLine className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Rating Breakdown & Gemini Summary Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Rating Score Card */}
          <div className="lg:col-span-4 rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center justify-between">
                <span>Google Review Summary</span>
                <span className="text-[10px] text-slate-500 font-normal">Reviews aren't verified</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-black text-white tracking-tight">4.2</div>
                <div>
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <div className="relative">
                      <Star className="w-5 h-5 text-slate-700" />
                      <div className="absolute inset-0 overflow-hidden w-[35%]">
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">26,086 Google reviews</div>
                </div>
              </div>

              {/* Star distribution bars */}
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 text-right">5</span>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[65%]" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 text-right">4</span>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[20%]" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 text-right">3</span>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[8%]" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 text-right">2</span>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[4%]" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 text-right">1</span>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[3%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 mt-4 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Shopping Centre Category</span>
              <span className="text-emerald-400 font-semibold">4.2 ★ Good</span>
            </div>
          </div>

          {/* Gemini AI Review Summary Banner */}
          <div className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-amber-950/30 border border-indigo-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <Bot className="w-32 h-32 text-indigo-400" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Summarised with Gemini</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/30 text-indigo-200">
                  +88
                </span>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                "{MALL_INFO.geminiSummary}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Analyzed 26,086 reviews across Banjara Hills visitors
              </span>
              <span className="text-amber-400 font-medium">Free Parking & Max Fashion Highlights</span>
            </div>
          </div>
        </div>

        {/* Review Topics / Tags Filter Bar */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Sort by Popular Review Topics:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {MALL_INFO.reviewTags.map((tag) => {
              const isSelected = selectedTag.toLowerCase() === tag.label.toLowerCase();
              return (
                <button
                  key={tag.label}
                  onClick={() => setSelectedTag(tag.label)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                      : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80"
                  }`}
                >
                  <span>{tag.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-slate-950/20 text-slate-950" : "bg-slate-900 text-slate-400"
                    }`}
                  >
                    {tag.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((rev) => {
            const isLiked = likedReviews[rev.id];

            return (
              <div
                key={rev.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-5 flex flex-col justify-between transition-all hover:shadow-xl"
              >
                <div>
                  {/* Author Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 text-slate-950 font-black text-sm flex items-center justify-center shrink-0">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        {rev.author}
                      </div>
                      <div className="text-[11px] text-slate-400">{rev.badge}</div>
                    </div>
                  </div>

                  {/* Rating Stars & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-3.5 h-3.5 ${
                            idx < rev.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">{rev.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {rev.text}
                  </p>
                </div>

                {/* Footer Actions (Like, Share) */}
                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <button
                    onClick={() => handleLike(rev.id)}
                    className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition-colors ${
                      isLiked
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        : "hover:bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? "fill-amber-400" : ""}`} />
                    <span>{rev.likes > 0 ? rev.likes : "Helpful"}</span>
                  </button>

                  <button
                    onClick={() => handleShare(rev.author)}
                    className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                    aria-label="Share review"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-1">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>Post Public Review</span>
              </div>
              <h3 className="text-xl font-black text-white">Rate City Centre Mall</h3>
              <p className="text-xs text-slate-400 mt-1">
                Share your visit experience with thousands of shoppers in Hyderabad.
              </p>
            </div>

            <form onSubmit={submitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setNewReview({ ...newReview, rating: s })}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          s <= newReview.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-700"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-amber-400 font-bold ml-2">
                    {newReview.rating} out of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Review</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about the stores (Max, Pixel Store), bowling alley at SMAAASH, food court, or parking facility..."
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 shadow-md shadow-amber-500/20"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
