/* ======================================
   UNIFIED INDEX.JS — All pages logic
====================================== */

/* ---- TOAST NOTIFICATION ---- */
/* ---- TOAST NOTIFICATION ---- */
function showToast(message, type) {
    let toast = document.createElement("div");
    toast.className = "toast" + (type === "remove" ? " remove-type" : "");
    toast.innerHTML = (type === "remove" ? "⚠️ " : "✅ ") + message;
    document.body.appendChild(toast);
    
    // trigger animation
    setTimeout(() => toast.classList.add("show"), 10);

    setTimeout(function () {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}


/* ---- HAMBURGER MENU ---- */
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("open");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            hamburger.classList.remove("open");
            navLinks.classList.remove("open");
        });
    });
}


/* ---- SEARCH DESTINATION ---- */
function searchDestination() {
    let search = document.getElementById("searchInput");
    if (!search) return;
    let val = search.value.trim().toLowerCase();

    if (val === "") {
        showToast("Please enter a destination 🔍", "info");
        return;
    }

    // Route to destination page with query
    window.location.href = "destination.html?search=" + encodeURIComponent(val);
}

// Allow Enter key in search box
let searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") searchDestination();
    });
}


/* ---- HERO IMAGE SLIDER ---- */
let heroImage  = document.querySelector(".hero-image");
let images     = document.querySelectorAll(".hero-image img");
let currentImage = 0;
let slideInterval;

function buildDots() {
    let dotsContainer = document.getElementById("heroDots");
    if (!dotsContainer || images.length === 0) return;

    images.forEach(function (_, i) {
        let dot = document.createElement("button");
        dot.className = "hero-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Slide " + (i + 1));
        dot.addEventListener("click", function () {
            goToSlide(i);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    document.querySelectorAll(".hero-dot").forEach(function (dot, i) {
        dot.classList.toggle("active", i === currentImage);
    });
}

function goToSlide(index) {
    currentImage = index;
    if (heroImage) {
        heroImage.style.transform = "translateX(-" + (currentImage * 100) + "%)";
    }
    updateDots();
}

function showNextImage() {
    goToSlide((currentImage + 1) % images.length);
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(showNextImage, 3500);
}

if (heroImage && images.length > 0) {
    buildDots();
    slideInterval = setInterval(showNextImage, 3500);
}


/* ---- WISHLIST — localStorage helpers (JSON array) ---- */
function getWishlist() {
    try {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch (e) {
        return [];
    }
}

function saveWishlist(list) {
    localStorage.setItem("wishlist", JSON.stringify(list));
}


/* ---- ADD TO WISHLIST (home cards) ---- */
function addWishlist(destination) {
    let wishlist = getWishlist();
    if (!wishlist.map(d => d.toLowerCase()).includes(destination.toLowerCase())) {
        wishlist.push(destination);
        saveWishlist(wishlist);
        showToast(destination + " added to wishlist ❤️");
    } else {
        showToast(destination + " is already in your wishlist", "info");
    }
}


/* ---- WISHLIST BUTTON on home cards ---- */
function handleWishlistClick(event, destination, btn) {
    event.stopPropagation(); // prevent card click routing
    let wishlist = getWishlist();
    let idx = wishlist.findIndex(d => d.toLowerCase() === destination.toLowerCase());

    if (idx === -1) {
        wishlist.push(destination);
        saveWishlist(wishlist);
        btn.classList.add("wishlisted");
        btn.textContent = "✅ Wishlisted";
        showToast(destination + " added to wishlist ❤️");
    } else {
        wishlist.splice(idx, 1);
        saveWishlist(wishlist);
        btn.classList.remove("wishlisted");
        btn.textContent = "❤️ Wishlist";
        showToast(destination + " removed from wishlist", "remove");
    }
}


/* ---- SYNC HOME CARD BUTTONS with existing wishlist on load ---- */
function syncHomeButtons() {
    let wishlist = getWishlist();
    ["Goa", "Madurai", "Kolkata", "Agra"].forEach(function (dest) {
        let btn = document.getElementById("wishBtn-" + dest);
        if (!btn) return;
        if (wishlist.some(d => d.toLowerCase() === dest.toLowerCase())) {
            btn.classList.add("wishlisted");
            btn.textContent = "✅ Wishlisted";
        }
    });
}
syncHomeButtons();


/* ---- NAVIGATE TO PACKAGE PAGE from home cards ---- */
function goToPackage(place) {
    window.location.href = "package.html?place=" + encodeURIComponent(place);
}


/* ---- TRAVEL DATE PLANNER ---- */
function selectTravelDate() {
    let travelDateInput = document.getElementById("travelDate");
    let result = document.getElementById("selectedDate");

    if (!travelDateInput || !result) return;

    let travelDate = travelDateInput.value;

    if (travelDate === "") {
        showToast("Please select your travel date 📅", "info");
        return;
    }

    let selectedDate = new Date(travelDate + "T00:00:00");
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        showToast("Please select a future travel date 📅", "info");
        return;
    }

    let formattedDate = selectedDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    result.innerHTML = "✈️ Your travel date is <strong>" + formattedDate + "</strong>! Happy journey!";
    showToast("Travel date saved! ✈️");
}

// Set minimum date to today
let travelDateInput = document.getElementById("travelDate");
if (travelDateInput) {
    let today = new Date();
    let yyyy  = today.getFullYear();
    let mm    = String(today.getMonth() + 1).padStart(2, "0");
    let dd    = String(today.getDate()).padStart(2, "0");
    travelDateInput.min = yyyy + "-" + mm + "-" + dd;
}


/* ---- DISPLAY WISHLIST (wishlist.html) ---- */
function displayWishlist() {
    let container = document.getElementById("wishlistContainer");
    if (!container) return;

    let wishlist = getWishlist();

    let count = document.getElementById("wishlistCount");
    if (count) count.textContent = wishlist.length;

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 40px 0;">
                <div style="font-size:60px; margin-bottom:15px;">❤️</div>
                <h3 style="color:#063b66; margin-bottom:10px;">No saved trips yet!</h3>
                <p style="color:#60788d;">Start exploring and save your favourites.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = "";

    wishlist.forEach(function (destination) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${destination}</h3>
            <p>Saved in your wishlist. Ready for your next adventure!</p>
            <button class="remove-btn">🗑️ Remove</button>
        `;

        card.querySelector(".remove-btn").addEventListener("click", function () {
            removeWishlistItem(destination);
        });

        container.appendChild(card);
    });
}

function removeWishlistItem(destination) {
    let wishlist = getWishlist().filter(d => d !== destination);
    saveWishlist(wishlist);
    showToast(destination + " removed from wishlist", "remove");
    displayWishlist();
}

displayWishlist();


/* ---- SEARCH WISHLIST ---- */
function searchWishlist() {
    let searchEl = document.getElementById("wishlistSearch");
    if (!searchEl) return;
    let search = searchEl.value.toLowerCase();
    let cards  = document.querySelectorAll("#wishlistContainer .card");

    cards.forEach(function (card) {
        let name = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = name.includes(search) ? "block" : "none";
    });
}


/* ---- PROFILE PAGE ---- */
function editProfile() {
    let btn = document.querySelector('[onclick="editProfile()"]');
    showToast("Edit Profile feature coming soon! 🛠️", "info");
    if (btn) {
        btn.style.opacity = "0.7";
        setTimeout(() => { btn.style.opacity = "1"; }, 500);
    }
}

function changePassword() {
    showToast("Change Password feature coming soon! 🔐", "info");
}

function openWishlist() {
    window.location.href = "wishlist.html";
}

function openBookings() {
    showToast("No bookings yet. Book a package to get started! 🧳", "info");
}

function displayProfileWishlist() {
    let container = document.getElementById("profileWishlist");
    if (!container) return;

    let wishlist = getWishlist();
    let count = document.getElementById("profileWishlistCount");
    if (count) count.textContent = wishlist.length;

    if (wishlist.length === 0) {
        container.innerHTML = "<p>No saved destinations yet.</p>";
        return;
    }

    container.innerHTML = "";
    wishlist.forEach(function (destination) {
        let item = document.createElement("div");
        item.className = "profile-wishlist-item";
        item.textContent = "❤️ " + destination;
        container.appendChild(item);
    });
}
displayProfileWishlist();


/* ---- LOGIN / SIGNUP ---- */
function loginUser() {
    let email    = document.getElementById("loginEmail");
    let password = document.getElementById("loginPassword");
    if (!email || !password) return;

    if (email.value.trim() === "" || password.value.trim() === "") {
        showToast("Please enter email and password", "info");
    } else {
        showToast("Login successful! Welcome back ✈️");
        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);
    }
}

function signupUser() {
    let name     = document.getElementById("signupName");
    let email    = document.getElementById("signupEmail");
    let password = document.getElementById("signupPassword");
    if (!name || !email || !password) return;

    if (name.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "") {
        showToast("Please fill all fields", "info");
    } else {
        showToast("Account created successfully! 🎉");
        setTimeout(function () {
            document.getElementById("signupBox").style.display = "none";
        }, 1200);
    }
}

function showSignup() {
    let signupBox = document.getElementById("signupBox");
    if (signupBox) {
        signupBox.style.display = "block";
        signupBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}