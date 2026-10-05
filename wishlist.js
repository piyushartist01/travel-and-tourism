// Search destination

function searchDestination() {

    let search = document.getElementById("searchInput").value;

    if (search == "") {
        alert("Please enter a destination");
    } else {
        alert("Searching for " + search);
    }
}


// Add destination to wishlist

function addWishlist(destination) {

    let wishlist = localStorage.getItem("wishlist");

    if (wishlist) {
        wishlist = wishlist.split(",");
    } else {
        wishlist = [];
    }

    if (!wishlist.includes(destination)) {

        wishlist.push(destination);

        localStorage.setItem(
            "wishlist",
            wishlist.join(",")
        );

        showMessage(destination + " added to wishlist ❤️");

    } else {

        showMessage(destination + " is already in your wishlist");

    }
}


// Destination page button connection

function toggleWishlist(button, destination) {

    addWishlist(destination);

    if (button.querySelector("i")) {
        button.querySelector("i").className = "fa-solid fa-heart";
    }
}


function showMessage(messageText) {

    let message = document.createElement("div");

    message.innerText = messageText;
    message.style.position = "fixed";
    message.style.top = "80px";
    message.style.right = "25px";
    message.style.background = "white";
    message.style.color = "#333";
    message.style.padding = "15px 20px";
    message.style.borderRadius = "10px";
    message.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    message.style.borderLeft = "5px solid #28a745";
    message.style.zIndex = "99999";

    document.body.appendChild(message);

    setTimeout(function() {
        message.remove();
    }, 2000);
}


// Display wishlist

function displayWishlist() {

    let container = document.getElementById("wishlistContainer");

    if (!container) {
        return;
    }

    let wishlist = localStorage.getItem("wishlist");

    if (wishlist) {
        wishlist = wishlist.split(",");
    } else {
        wishlist = [];
    }


    // Wishlist count

    let count = document.getElementById("wishlistCount");

    if (count) {
        count.innerText = wishlist.length;
    }


    // Empty wishlist

    if (wishlist.length == 0) {

        container.innerHTML = `
            <div class="empty-heart">❤️</div>
            <h3>No saved trips yet!</h3>
        `;

        return;
    }


    // Display saved destinations

    container.innerHTML = "";

    wishlist.forEach(function(destination) {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${destination}</h3>

            <p>This destination is saved in your wishlist.</p>

            <button class="remove-btn">
                Remove
            </button>
        `;

        let removeButton = card.querySelector(".remove-btn");

        console.log("remove button found");

        removeButton.addEventListener("click", function() {

            removeWishlist(destination, this);
            showRemoveMessage(destination);

        });

        container.appendChild(card);

    });
}


function showRemoveMessage(destination) {

    let message = document.createElement("div");

    message.innerText = destination + " removed from wishlist";

    message.style.position = "fixed";
    message.style.top = "80px";
    message.style.right = "25px";
    message.style.background = "white";
    message.style.color = "#333";
    message.style.padding = "15px 20px";
    message.style.borderRadius = "10px";
    message.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    message.style.borderLeft = "5px solid #dc3545";
    message.style.zIndex = "99999";

    document.body.appendChild(message);

    setTimeout(function() {
        message.remove();
    }, 2000);
}


// Remove from wishlist

function removeWishlist(destination, button) {

    button.parentElement.remove();

    let wishlist = localStorage.getItem("wishlist");

    if (wishlist) {
        wishlist = wishlist.split(",");
    } else {
        wishlist = [];
    }

    wishlist = wishlist.filter(function(item) {

        return item !== destination;

    });

    localStorage.setItem(
        "wishlist",
        wishlist.join(",")
    );

    displayWishlist();
}


// Book package

function bookPackage(packageName) {

    alert(
        "You selected " + packageName +
        ". Booking feature will be added later."
    );
}


// Login

function loginUser() {

    let email = document.getElementById("loginEmail").value;

    let password = document.getElementById("loginPassword").value;


    if (email == "" || password == "") {

        alert("Please enter email and password");

    } else {

        alert("Login successful!");

    }
}


// Signup

function signupUser() {

    let name = document.getElementById("signupName").value;

    let email = document.getElementById("signupEmail").value;

    let password = document.getElementById("signupPassword").value;


    if (name == "" || email == "" || password == "") {

        alert("Please fill all fields");

    } else {

        alert("Account created successfully!");

    }
}


// Show signup

function showSignup() {

    document.getElementById("signupBox").style.display = "block";

}


// Search wishlist

function searchWishlist() {

    let search = document.getElementById("wishlistSearch").value.toLowerCase();

    let cards = document.querySelectorAll("#wishlistContainer .card");

    let found = 0;

    cards.forEach(function(card) {

        let destination = card.querySelector("h3").innerText.toLowerCase();

        if (destination.includes(search)) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });


    if (found == 0) {

        alert("No destination found");

    }

}


// Run wishlist function when page loads

displayWishlist();