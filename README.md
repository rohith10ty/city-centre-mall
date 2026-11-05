# 🏙️ City Centre Mall (సిటీ సెంటర్ మాల్) - Banjara Hills, Hyderabad

A modern, responsive, and feature-rich Shopping Mall Web Application built with **React.js**, **Vite**, **Tailwind CSS**, and **Lenis Smooth Scroll**. Designed specifically for **City Centre Mall**, Road No. 1, Banjara Hills, Hyderabad, integrating actual Google Maps directory data, customer reviews, photo galleries, and mall amenities.

---

## ✨ Features Implemented

### 1. 🌟 Navigation & Hero Section
- **Brand Identity**: City Centre Mall typography with Telugu subtitle (`సిటీ సెంటర్ మాల్`) and Banjara Hills landmark badge.
- **Hero Slider**: Interactive carousel displaying authentic Google Maps exterior and interior photos of the mall.
- **Lenis Smooth Scroll**: Ultra-smooth scrolling experience (`@studio-freight/lenis` / `lenis`) with completely hidden scrollbars across all modern browsers.
- **Font**: Styled using Google Font **Outfit** with custom typographic hierarchy.
- **Mall Live Status**: Real-time indicator (`Open Now · Closes 9:30 PM`, McDonald's till 12:00 AM Midnight).
- **Global Search**: `⌘K` or click modal to search across all stores, brands, categories, and products.
- **Shopping Bag Badge**: Animated counter badge with slide-out cart drawer.

### 2. 🏪 Store Directory & 6-Floor Level Guide
- **Multi-Level Layout**:
  - **B2**: Free Two-Wheeler / Bike Parking
  - **B1**: Free Four-Wheeler / Car Parking
  - **Ground Floor**: City Hypermarket & Furnishings, Reliance Trends, Banjara Kids Wonderland
  - **Floor 1**: McDonald's, Max Fashion, Scullers Club Store, Royal Jewellers
  - **Floor 2**: Authorized Google Pixel Store & Service Centre, Max Fashion, aLL - The Plus Size Store, Modelz World Casting Agency
  - **Floor 3**: Glamour Studio Salon & Spa
  - **Floor 4**: SMAAASH Zone (Bowling Alley, Arcade & VR Games)
  - **Terrace**: Terrace Heights Multi-Cuisine Diner & Terrace Mosque / Prayer Hall
- **Store Filters**: Filter by Floor, Category, or direct search with phone dialers and operating hours.

### 3. 🛍️ Shopping Categories & Product Catalogue
- **Categories**: Fashion, Electronics, Footwear, Beauty, Groceries, and Accessories.
- **Product Cards**: High-resolution imagery, store floor tags, crossed-out MRP, discount chips, customer star ratings.
- **Quick View Modal**: Detailed modal with size selector, store counter guarantees, quantity selector, and instant Add to Bag.
- **Wishlist**: Toggle favorites with persistent state.

### 4. 🎟️ Special Offers & Events
- **Active Promotional Vouchers**:
  - `CITYCENTRE`: 10% Welcome Mall Discount
  - `MAX50HYD`: 15% End of Season Fashion Voucher
  - `MCDWEEKEND`: 12% Weekend Foodie Saver
- **One-Click Coupon Copy**: Instant feedback and automatic deduction in shopping bag.
- **Upcoming Events**: Banjara Hills Weekend Flea Market, Hyderabad Inter-College Bowling Championship at SMAAASH, and Kids Fancy Dress Parade.

### 5. 🌟 Google Maps Reviews & Gemini AI Summary
- **Google Maps Score**: Verified **4.2 ★** rating from **26,086 reviews**.
- **Gemini AI Summary**:
  > *"People say this mall is a good place for shopping and has a decent selection of stores, including Max fashion and a hypermarket with home furnishings. They also highlight the good service from staff and the availability of free parking. Visitors also appreciate the nostalgic vibe, peaceful family atmosphere, and the terrace prayer facility."*
- **Review Keyword Filters**: Filter by topics like `games (296)`, `food court (79)`, `bowling (50)`, `city centre mall (36)`, `kids shopping (32)`, `gaming zone (28)`, etc.
- **Real Verified Reviews**:
  - *Pasupuleti Purna Sai* (Local Guide · 61 reviews)
  - *SAIKUMAR Y* (Google Pixel Store customer feedback)
  - *Abiram TJ* (Local Guide · 380 reviews)
  - *Syed Yousuf* (Terrace mosque, bowling & restaurants)
  - *Dr Swayambhu Ray* (Kids games & budget shopping)
  - *Venkata Ratnam Rayala* (Road No. 1 location, Max & Scullers)
- **Interactive "Write a Review" Modal**: Shoppers can submit star ratings and feedback.

### 6. 📸 Authentic Google Maps Photo Gallery
- Includes high-resolution photos downloaded directly from Google Maps:
  - Architectural Exterior Facade (`/images/mall/city-centre-facade.jpg`)
  - Central Skylight Atrium (`/images/mall/city-centre-atrium.jpg`)
  - Multi-Level Store Corridors (`/images/mall/city-centre-stores.jpg`)
  - Grand Entrance Portal (`/images/mall/city-centre-entrance.jpg`)
  - Escalator Corridors (`/images/mall/city-centre-escalators.jpg`)
- Interactive Lightbox with zoom and previous/next navigation.

### 7. 🛡️ About & Mall Amenities
- **Identifies as women-owned** badge & commitment.
- **Free Parking Lot**: Dedicated B1 (Cars) and B2 (Bikes).
- **Terrace Mosque / Prayer Hall**: Rooftop prayer room with clean ablution facilities.
- **On-site Tech Support**: Authorized Google Pixel Service Center.
- **Free High-Speed Wi-Fi** throughout all levels.
- **Children's Playground** & arcade gaming.
- **All Payment Modes**: Credit cards, debit cards, UPI, tap & pay.

### 8. 📍 Location, Map & Contact
- **Address**: CITY CENTER, 8-2-592, Road No. 1, Banjara Hills, Hyderabad, Telangana 500034, India.
- **Plus Code**: `CC7X+XF Hyderabad, Telangana, India`.
- **Google Maps Embed & Directions Button**: One-click navigation route calculation.
- **Customer Helpdesk Form**: Leasing, store inquiries, feedback, and lost & found support.

### 9. 🛒 Slide-Out Shopping Bag & Reservation Checkout
- Real-time calculation of subtotal, voucher discounts, and taxes.
- Free In-Mall express pickup option.
- Interactive Checkout with **Confetti Animation** and unique order pickup token generation.

---

## 🛠️ Tech Stack

- **Framework**: React.js 19 + Vite
- **Styling**: Tailwind CSS v3.4 + PostCSS + Autoprefixer
- **Typography**: Google Font **Outfit**
- **Smooth Scrolling**: Lenis (`lenis`)
- **Icons**: Lucide React
- **Celebration Animations**: Canvas Confetti

---

## 🚀 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd "City Centre MALL"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📦 Deployment Instructions

### Deploy to Vercel:
1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/city-centre-mall.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `city-centre-mall` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**!

### Deploy to Netlify:
1. Push to GitHub as described above.
2. Go to [Netlify](https://app.netlify.com) and select **"Import an existing project"**.
3. Select your GitHub repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy Site**!
