/* ============================================
   LOGIN.JS — hamburger setup for profile page
   All other functions (loginUser, signupUser,
   showSignup, editProfile, changePassword,
   openWishlist, openBookings, displayProfileWishlist)
   are defined in index.js which loads first.
============================================ */

/* Hamburger menu setup */
(function setupHamburger() {
    let hamburger = document.getElementById("hamburger");
    let navLinks  = document.getElementById("navLinks");
    if (!hamburger || !navLinks) return;

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
})();