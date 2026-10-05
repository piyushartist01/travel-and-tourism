# ✈️ TravelGo — Tour & Travel Website

> A beautiful, mobile-responsive Travel & Tourism website built with pure HTML, CSS, and JavaScript.

![TravelGo Banner](./banner%20copy.png)

---

## 🌐 Live Preview

Visit the site by opening `index.html` in your browser, or host it on **GitHub Pages**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Pages](#-pages)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)

---

## ✨ Features

- 🎠 **Auto-sliding Hero Banner** — Smooth image carousel with 4 destinations
- 🔍 **Destination Search** — Search bar with live navigation to destination page
- ❤️ **Wishlist System** — Add/remove destinations using `localStorage` (persists on refresh)
- 📅 **Trip Planner** — Select travel date, duration, and number of travellers
- 🗺️ **8 Destinations** — Manali, Jaipur, Agra, Goa, J&K, Kerala, Ladakh, Andaman
- 📦 **Dynamic Package Pages** — Cards update based on chosen destination
- 👤 **User Profile Page** — Login / Signup forms with wishlist count display
- 📱 **Mobile Responsive** — Hamburger menu, fluid grids, touch-friendly buttons
- 🌟 **Smooth Animations** — Hover effects, transitions, micro-interactions
- 🔔 **Toast Notifications** — Non-intrusive alerts for wishlist actions

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero slider, popular destinations, trip planner |
| Destinations | `destination.html` | All 8 destination cards with wishlist toggle |
| Packages | `package.html` | Detailed package view with booking form |
| Wishlist | `wishlist.html` | Saved destinations with search & remove |
| Profile | `login.html` | Login/signup forms + profile overview |

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic page structure |
| **CSS3** | Flexbox, Grid, animations, media queries |
| **Vanilla JavaScript** | DOM manipulation, localStorage, event handling |
| **Font Awesome 6** | Icons (plane, heart, location, etc.) |
| **Unsplash / Local** | High-quality destination images |

---

## 🚀 Getting Started

No build tools or dependencies required!

### Option 1: Open Locally
```bash
git clone https://github.com/piyushartist01/travel-and-tourism.git
cd travel-and-tourism
# Open index.html in any browser
```

### Option 2: GitHub Pages
1. Go to your repo → **Settings → Pages**
2. Set source to `main` branch, root folder
3. Your site will be live at `https://piyushartist01.github.io/travel-and-tourism/`

---

## 📁 Project Structure

```
travel-and-tourism/
│
├── index.html          # Home page
├── destination.html    # All destinations
├── package.html        # Package detail + booking
├── wishlist.html       # Saved destinations
├── login.html          # Profile / Login / Signup
│
├── index.css           # Home page styles
├── destination.css     # Destinations styles
├── package.css         # Package page styles
├── wishlist.css        # Wishlist page styles
├── login.css           # Profile/login styles
├── style.css           # Shared/global styles
│
├── index.js            # Home page logic
├── destination.js      # Destination toggle + routing
├── package.js          # Package data + booking logic
├── wishlist.js         # Wishlist display + search
├── login.js            # Profile + auth logic
│
├── banner copy.png         # Hero image
├── udaipur banner.png      # Udaipur hero
├── shimla banner.png       # Shimla hero
├── jaipur copy.png         # Jaipur card
├── goa copy.png            # Goa card
├── kolkata copy.png        # Kolkata card
├── manali copy.png         # Manali card
├── Agra copy.jpeg          # Agra card
├── tamilnadu copy.png      # Madurai card
├── udaipur copy.png        # Udaipur card
├── coverpage image.jpeg    # Destinations background
└── POPULAR BG copy.png     # Popular section background
```

---

## 🗃️ Key Features Explained

### 🔒 localStorage Wishlist
All wishlist data is stored in the browser's `localStorage` under the key `"wishlist"` as a JSON array:
```js
// Add to wishlist
localStorage.setItem("wishlist", JSON.stringify(["Goa", "Manali"]));

// Read wishlist
JSON.parse(localStorage.getItem("wishlist")) || []
```

### 🗺️ Dynamic Package Pages
Clicking any destination card on `destination.html` routes to `package.html?place=manali` and the package page dynamically loads the correct data from a built-in `destinations` object in `package.js`.

### 📱 Mobile Navigation
A hamburger (☰) menu is shown on screens ≤ 768px. Clicking it toggles the nav links with a smooth slide animation.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Piyush** — [@piyushartist01](https://github.com/piyushartist01)

> Made with ❤️ for Travel Lovers 🌍
