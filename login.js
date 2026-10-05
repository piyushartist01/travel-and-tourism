function editProfile() {
    alert("Edit Profile feature will be added.");
}

function changePassword() {
    alert("Change Password feature will be added.");
}

function openWishlist() {
    window.location.href = "wishlist.html";
}

function openBookings() {
    alert("No bookings yet.");
}
function displayProfileWishlist() {

    let container = document.getElementById("profileWishlist");

    if (!container) {
        return;
    }

    let wishlist = localStorage.getItem("wishlist");

    if (wishlist) {
        wishlist = wishlist.split(",");
    } else {
        wishlist = [];
    }

    container.innerHTML = "";

    if (wishlist.length == 0) {

        container.innerHTML = "<p>No saved destinations yet.</p>";
        return;
    }

    wishlist.forEach(function(destination) {

        let item = document.createElement("div");

        item.className = "profile-wishlist-item";

        item.innerText = "❤️ " + destination;

        container.appendChild(item);

    });
}
function displayProfileWishlistCount() {
    let count = document.getElementById("profileWishlistCount");

    if (!count) {
        return;
    }

    let wishlist = localStorage.getItem("wishlist");

    if (wishlist) {
        wishlist = wishlist.split(",");
        count.innerText = wishlist.length;
    } else {
        count.innerText = 0;
    }
}

displayProfileWishlistCount();

displayProfileWishlist();