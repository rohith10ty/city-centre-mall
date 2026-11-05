import React, { useEffect } from "react";
import Lenis from "lenis";
import { MallProvider, useMall } from "./context/MallContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { QuickStats } from "./components/QuickStats";
import { FeaturedBrands } from "./components/FeaturedBrands";
import { CategoriesSection } from "./components/CategoriesSection";
import { StoreDirectorySection } from "./components/StoreDirectorySection";
import { OffersEventsSection } from "./components/OffersEventsSection";
import { GoogleReviewsSection } from "./components/GoogleReviewsSection";
import { MallGallerySection } from "./components/MallGallerySection";
import { AboutAmenitiesSection } from "./components/AboutAmenitiesSection";
import { ContactLocationSection } from "./components/ContactLocationSection";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { SearchModal } from "./components/SearchModal";
import { ProductDetailsModal } from "./components/ProductDetailsModal";
import { AuthModal } from "./components/AuthModal";
import { Toast } from "./components/Toast";

const MainContent = () => {
  const { activeTab, setIsSearchOpen } = useMall();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const reqId = requestAnimationFrame(raf);

    // Global keyboard listener for search (Ctrl+K or Cmd+K)
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsSearchOpen]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-outfit selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === "directory" ? (
          <div className="pt-8">
            <StoreDirectorySection />
          </div>
        ) : activeTab === "categories" ? (
          <div className="pt-8">
            <CategoriesSection />
          </div>
        ) : activeTab === "offers" ? (
          <div className="pt-8">
            <OffersEventsSection />
          </div>
        ) : activeTab === "reviews" ? (
          <div className="pt-8">
            <GoogleReviewsSection />
          </div>
        ) : activeTab === "about" ? (
          <div className="pt-8">
            <AboutAmenitiesSection />
          </div>
        ) : activeTab === "contact" ? (
          <div className="pt-8">
            <ContactLocationSection />
          </div>
        ) : (
          /* Default "home" view: Seamless all-in-one experience */
          <>
            <Hero />
            <QuickStats />
            <FeaturedBrands />
            <CategoriesSection />
            <StoreDirectorySection />
            <OffersEventsSection />
            <GoogleReviewsSection />
            <MallGallerySection />
            <AboutAmenitiesSection />
            <ContactLocationSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <SearchModal />
      <ProductDetailsModal />
      <AuthModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <MallProvider>
      <MainContent />
    </MallProvider>
  );
}
