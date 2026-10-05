# TravelGo - Tour & Travel Website

> A beautiful, mobile-responsive Travel & Tourism website built with pure HTML, CSS, and JavaScript.

![TravelGo Banner](./banner%20copy.png)

---

## Live Preview

Visit the site by opening `index.html` in your browser, or host it on **GitHub Pages**.

---

## Table of Contents

- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features Explained](#key-features-explained)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Auto-sliding Hero Banner** — Smooth image carousel with 4 destinations.
- **Destination Search** — Search bar with live navigation to destination page.
- **Wishlist System** — Add/remove destinations using `localStorage` (persists on refresh).
- **Trip Planner** — Select travel date, duration, and number of travellers.
- **8 Destinations** — Manali, Jaipur, Agra, Goa, J&K, Kerala, Ladakh, Andaman.
- **Dynamic Package Pages** — Cards update based on chosen destination.
- **User Profile Dashboard** — Tabbed profile layout, login modal, and wishlist overview.
- **Mobile Responsive** — Hamburger menu, fluid grids, touch-friendly components.
- **Premium UI/UX** — Glassmorphic components, floating elements, smooth animations.
- **Dynamic Island Nav** — A unified, floating navigation bar used across all pages.
- **Toast Notifications** — Non-intrusive alerts for interactions.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero slider, popular destinations, trip planner. |
| **Destinations** | `destination.html` | All 8 destination cards with wishlist toggle. |
| **Packages** | `package.html` | Detailed package view with booking form. |
| **Wishlist** | `wishlist.html` | Saved destinations with search & remove. |
| **Profile** | `login.html` | MakeMyTrip-style profile dashboard + login modal. |

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic page structure. |
| **CSS3** | Flexbox, Grid, glassmorphism, animations, media queries. |
| **Vanilla JavaScript** | DOM manipulation, localStorage, state management. |
| **FontAwesome 6** | Clean vector icons used universally. |
| **Unsplash / Local** | High-quality destination imagery. |

---

## Getting Started

No build tools or dependencies are required. This is a vanilla front-end application.

### Option 1: Open Locally
```bash
git clone https://github.com/piyushartist01/travel-and-tourism.git
cd travel-and-tourism
# Open index.html in any modern browser
```

### Option 2: GitHub Pages
1. Go to your repository → **Settings → Pages**.
2. Set the source to the `master` branch and the root folder.
3. Your site will be published at `https://piyushartist01.github.io/travel-and-tourism/`.

---

## Project Structure

```text
travel-and-tourism/
│
├── index.html          # Home page
├── destination.html    # All destinations
├── package.html        # Package detail + booking
├── wishlist.html       # Saved destinations
├── login.html          # Profile / Login / Signup
│
├── global.css          # Shared global styles (Nav, Toasts, Typography)
├── index.css           # Home page styles
├── destination.css     # Destinations styles
├── package.css         # Package page styles
├── wishlist.css        # Wishlist page styles
├── login.css           # Profile/login styles
│
├── index.js            # Home page logic + global toast
├── destination.js      # Destination filtering + routing
├── package.js          # Package data mapping + booking logic
├── wishlist.js         # Wishlist display + search
├── login.js            # Profile dashboard + auth logic
│
└── [Images...]         # Various local hero and card images
```

---

## Key Features Explained

### Browser Storage (localStorage)
All wishlist data and authentication state are stored in the browser's `localStorage` to ensure persistence across sessions.
```js
// Add to wishlist
localStorage.setItem("travelWishlist", JSON.stringify(["Goa", "Manali"]));

// Check Login State
localStorage.getItem("isLoggedIn"); // returns "true" or "false"
```

### Dynamic Routing
Clicking any destination card on `destination.html` routes to `package.html?place=place_name`. The package page dynamically loads the correct hero, description, and images from a data object in `package.js`.

### Unified Design System
The application utilizes `global.css` to enforce a strict design language. The floating "Dynamic Island" navbar, toast popups, and glassmorphic wishlist buttons ensure visual consistency across all five main pages.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Author

**Piyush** — [@piyushartist01](https://github.com/piyushartist01)

> Made with FontAwesome and Vanilla JS for Travel Lovers
