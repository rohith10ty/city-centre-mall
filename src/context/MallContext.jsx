import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { PRODUCTS_DATA, STORES_DATA, MALL_INFO } from "../data/mallData";

const MallContext = createContext();

export const MallProvider = ({ children }) => {
  // Navigation active tab: 'home' | 'directory' | 'categories' | 'offers' | 'reviews' | 'about' | 'contact' | 'cart'
  const [activeTab, setActiveTab] = useState("home");

  // Cart State with localStorage persistence
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("citycentre_cart");
      return saved ? JSON.parse(saved) : [
        {
          ...PRODUCTS_DATA[0],
          quantity: 1,
          selectedSize: "M",
        },
        {
          ...PRODUCTS_DATA[4],
          quantity: 1,
          selectedSize: "Standard",
        }
      ];
    } catch {
      return [];
    }
  });

  // Saved / Wishlist items
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("citycentre_wishlist");
      return saved ? JSON.parse(saved) : ["prod-f-1", "prod-e-1"];
    } catch {
      return [];
    }
  });

  // Modals & Panels
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin"); // 'signin' | 'signup'
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("citycentre_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Selected Product for quick view modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Search query & global filter
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Applied Coupon in Cart
  const [appliedCoupon, setAppliedCoupon] = useState({
    code: "CITYCENTRE",
    discountPercent: 10,
    applied: false,
  });

  // Toast Notification State
  const [toast, setToast] = useState(null);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem("citycentre_cart", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem("citycentre_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Persist user
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("citycentre_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("citycentre_user");
      }
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  // Show Toast Helper
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Add to Cart
  const addToCart = (product, quantity = 1, size = "Standard") => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { ...product, quantity, selectedSize: size }];
      }
    });

    showToast(`Added "${product.name.slice(0, 28)}..." to cart!`);
  };

  // Update Cart Quantity
  const updateQuantity = (itemId, size, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === itemId && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  // Remove from cart
  const removeFromCart = (itemId, size) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === itemId && item.selectedSize === size)
      )
    );
    showToast("Item removed from cart", "info");
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Toggle Wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast("Removed from wishlist", "info");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Saved to wishlist!", "success");
        return [...prev, productId];
      }
    });
  };

  // Apply Coupon
  const applyCouponCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === "CITYCENTRE") {
      setAppliedCoupon({ code: "CITYCENTRE", discountPercent: 10, applied: true });
      showToast("10% City Centre Welcome Discount applied!", "success");
      return true;
    } else if (clean === "MAX50HYD") {
      setAppliedCoupon({ code: "MAX50HYD", discountPercent: 15, applied: true });
      showToast("15% Max Fest special voucher applied!", "success");
      return true;
    } else if (clean === "MCDWEEKEND") {
      setAppliedCoupon({ code: "MCDWEEKEND", discountPercent: 12, applied: true });
      showToast("12% Weekend Foodie voucher applied!", "success");
      return true;
    } else {
      showToast("Invalid promo code. Try 'CITYCENTRE' or 'MAX50HYD'", "error");
      return false;
    }
  };

  // Trigger Checkout celebration
  const checkoutOrder = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F59E0B", "#10B981", "#3B82F6", "#EC4899"],
    });
    const orderNum = "CCM-" + Math.floor(100000 + Math.random() * 900000);
    clearCart();
    setIsCartOpen(false);
    showToast(`Order Confirmed! Reference: ${orderNum}`, "success");
    return orderNum;
  };

  // User Auth Actions
  const login = (userData) => {
    setUser(userData);
    setIsAuthOpen(false);
    showToast(`Welcome back, ${userData.name}!`, "success");
  };

  const logout = () => {
    setUser(null);
    showToast("You have been signed out.", "info");
  };

  // Calculations
  const cartSubtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = appliedCoupon.applied
    ? Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100)
    : 0;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount);
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <MallContext.Provider
      value={{
        activeTab,
        setActiveTab,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        discountAmount,
        cartTotal,
        totalCartCount,
        appliedCoupon,
        applyCouponCode,
        checkoutOrder,
        wishlist,
        toggleWishlist,
        isCartOpen,
        setIsCartOpen,
        isAuthOpen,
        setIsAuthOpen,
        authMode,
        setAuthMode,
        user,
        login,
        logout,
        selectedProduct,
        setSelectedProduct,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        toast,
        showToast,
      }}
    >
      {children}
    </MallContext.Provider>
  );
};

export const useMall = () => {
  const context = useContext(MallContext);
  if (!context) {
    throw new Error("useMall must be used within a MallProvider");
  }
  return context;
};
