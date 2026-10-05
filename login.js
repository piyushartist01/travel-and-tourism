/* ============================================
   LOGIN.JS — MakeMyTrip Style Profile Logic
============================================ */

document.addEventListener("DOMContentLoaded", function() {
    checkLoginState();
    populateWishlistTab();
});

// Check if user is logged in
function checkLoginState() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const overlay = document.getElementById("loginOverlay");
    
    if (isLoggedIn === "true") {
        if(overlay) overlay.style.display = "none";
    } else {
        if(overlay) overlay.style.display = "flex";
    }
}

// Tab Switching Logic
window.switchTab = function(tabId, element) {
    // Hide all tabs
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });
    
    // Remove active class from menu
    document.querySelectorAll(".sidebar-menu li").forEach(li => {
        li.classList.remove("active");
    });
    
    // Show selected tab
    document.getElementById("tab-" + tabId).classList.add("active");
    
    // Highlight selected menu item
    if(element) {
        element.classList.add("active");
    }
}

// Override Login
window.loginUser = function() {
    let email = document.getElementById("loginEmail");
    let password = document.getElementById("loginPassword");
    
    if (!email || !password) return;

    if (email.value.trim() === "" || password.value.trim() === "") {
        if(typeof showToast === "function") showToast("Please enter email and password", "info");
    } else {
        localStorage.setItem("isLoggedIn", "true");
        if(typeof showToast === "function") showToast("Login successful! Welcome back ✈️");
        
        // Hide overlay
        document.getElementById("loginOverlay").style.display = "none";
    }
}

// Override Signup
window.showSignup = function() {
    let modal = document.querySelector(".login-modal");
    if(modal) {
        modal.innerHTML = `
            <h2>Create Account</h2>
            <p>Start your travel journey with us</p>
            <input type="text" id="signupName" placeholder="Full Name">
            <input type="email" id="signupEmail" placeholder="Email Address">
            <input type="password" id="signupPassword" placeholder="Password">
            <button class="btn-primary" onclick="signupUser()">Sign Up</button>
            <p class="switch-form">Already have an account? <span onclick="location.reload()">Login</span></p>
        `;
    }
}

window.signupUser = function() {
    let name = document.getElementById("signupName");
    let email = document.getElementById("signupEmail");
    let password = document.getElementById("signupPassword");
    
    if (!name || !email || !password) return;

    if (name.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "") {
        if(typeof showToast === "function") showToast("Please fill all fields", "info");
    } else {
        localStorage.setItem("isLoggedIn", "true");
        if(typeof showToast === "function") showToast("Account created successfully! 🎉");
        
        // Hide overlay
        document.getElementById("loginOverlay").style.display = "none";
    }
}

// Logout
window.logoutUser = function() {
    localStorage.setItem("isLoggedIn", "false");
    if(typeof showToast === "function") showToast("Logged out successfully");
    document.getElementById("loginOverlay").style.display = "flex";
    
    // Reset inputs
    let email = document.getElementById("loginEmail");
    let password = document.getElementById("loginPassword");
    if(email) email.value = "";
    if(password) password.value = "";
}

// Populate Wishlist in Profile Tab
function populateWishlistTab() {
    let container = document.getElementById("profileWishlist");
    if (!container) return;

    let wishlistStr = localStorage.getItem("travelWishlist");
    let wishlist = wishlistStr ? JSON.parse(wishlistStr) : [];
    
    let count = document.getElementById("profileWishlistCount");
    if (count) count.textContent = wishlist.length;

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-heart-crack"></i>
                <h3>Wishlist is Empty</h3>
                <p>You haven't saved any destinations yet.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = "";
    wishlist.forEach(function (destination) {
        let item = document.createElement("div");
        item.className = "profile-wishlist-item";
        item.innerHTML = `<i class="fa-solid fa-plane"></i> ` + destination;
        container.appendChild(item);
    });
}