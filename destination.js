/* ============================================
   DESTINATION.JS — Fixed routing + hamburger
============================================ */

/* ---- TOAST ---- */
function showToast(message, type) {
    let toast = document.createElement("div");
    toast.className = "toast" + (type === "remove" ? " remove" : "");
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function () { toast.remove(); }, 2500);
}


/* ---- HAMBURGER ---- */
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            hamburger.classList.remove("open");
            navLinks.classList.remove("open");
        });
    });
}


/* ---- SCROLL: navbar turns white ---- */
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


/* ---- WISHLIST HELPERS (JSON array) ---- */
function getWishlist() {
    try { return JSON.parse(localStorage.getItem("wishlist")) || []; }
    catch (e) { return []; }
}

function saveWishlist(list) {
    localStorage.setItem("wishlist", JSON.stringify(list));
}


/* ---- TOGGLE WISHLIST ---- */
function toggleWishlist(event, button, destination) {
    event.stopPropagation(); // prevent card click routing

    let wishlist = getWishlist();
    let idx = wishlist.findIndex(d => d.toLowerCase() === destination.toLowerCase());
    let icon = button.querySelector("i");

    if (idx === -1) {
        wishlist.push(destination);
        saveWishlist(wishlist);
        if (icon) icon.className = "fa-solid fa-heart";
        button.classList.add("active");
        showToast(destination + " added to wishlist ❤️");
    } else {
        wishlist.splice(idx, 1);
        saveWishlist(wishlist);
        if (icon) icon.className = "fa-regular fa-heart";
        button.classList.remove("active");
        showToast(destination + " removed from wishlist", "remove");
    }
}


/* ---- SYNC WISHLIST BUTTONS on page load ---- */
function syncWishlistButtons() {
    let wishlist = getWishlist();
    document.querySelectorAll(".card").forEach(function (card) {
        let h3 = card.querySelector("h3");
        if (!h3) return;
        let name = h3.textContent.trim();
        let btn  = card.querySelector(".wishlist-btn");
        if (!btn) return;
        let icon = btn.querySelector("i");

        if (wishlist.some(d => d.toLowerCase() === name.toLowerCase())) {
            if (icon) icon.className = "fa-solid fa-heart";
            btn.classList.add("active");
        }
    });
}
syncWishlistButtons();


/* ---- CARD CLICK → package.html ---- */
document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function (event) {
        // Don't navigate if wishlist button was clicked
        if (event.target.closest(".wishlist-btn")) return;

        let place = card.getAttribute("data-place");
        if (!place) {
            let h3 = card.querySelector("h3");
            if (h3) place = h3.textContent.trim().toLowerCase();
        }

        if (place) {
            window.location.href = "package.html?place=" + encodeURIComponent(place);
        }
    });
});


/* ---- SEARCH: highlight cards based on URL param ---- */
(function applySearchFilter() {
    let params = new URLSearchParams(window.location.search);
    let search = params.get("search");
    if (!search) return;

    let cards = document.querySelectorAll(".card");
    let found = false;

    cards.forEach(function (card) {
        let h3 = card.querySelector("h3");
        if (!h3) return;
        if (h3.textContent.toLowerCase().includes(search.toLowerCase())) {
            card.style.outline = "3px solid #ffb52e";
            card.style.transform = "scale(1.03)";
            if (!found) {
                card.scrollIntoView({ behavior: "smooth", block: "center" });
                found = true;
            }
        }
    });

    if (!found) {
        showToast('No destination found for "' + search + '"', "remove");
    }
})();