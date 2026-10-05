// 1 code window section //
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


//2 code for nav bar smotth transparent to white 
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    
    // Page 50px scroll hote hi white background apply ho jayega
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// 3 code Add destination to wishlist
function toggleWishlist(button, destination) {
    if (window.event) window.event.stopPropagation();

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let icon = button.querySelector('i');
    
    // Safety: Trim and lowercase checking
    let cleanDestination = destination ? destination.trim() : "";

    // Array me exact match check karein
    let existingIndex = wishlist.findIndex(
        item => item.toLowerCase() === cleanDestination.toLowerCase()
    );

    if (existingIndex === -1) {
        // Condition: Wishlist me nahi hai -> ADD karein
        wishlist.push(cleanDestination);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        if (icon) icon.className = "fa-solid fa-heart";
        button.classList.add("active");

        alert(cleanDestination + " added to wishlist ❤️");
    } else {
        // Condition: Wishlist me pehle se hai -> REMOVE karein
        wishlist.splice(existingIndex, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        if (icon) icon.className = "fa-regular fa-heart";
        button.classList.remove("active");

        alert(cleanDestination + " removed from wishlist");
    }
}


//  not useable for me 



// // Search destination

// function searchDestination() {

//     let search = document.getElementById("searchInput").value;

//     if (search == "") {
//         alert("Please enter a destination");
//     } else {
//         alert("Searching for " + search);
//     }
// }


// Display wishlist

// function displayWishlist() {

//     let container = document.getElementById("wishlistContainer");

//     if (!container) {
//         return;
//     }

//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//     if (wishlist.length == 0) {

//         container.innerHTML = "<p>Your wishlist is empty.</p>";

//         return;
//     }

//     container.innerHTML = "";

//     wishlist.forEach(function(destination) {

//         let card = document.createElement("div");

//         card.className = "card";

//         card.innerHTML = `
//             <h3>${destination}</h3>
//             <p>This destination is saved in your wishlist.</p>
//             <button onclick="removeWishlist('${destination}')">
//                 Remove
//             </button>
//         `;

//         container.appendChild(card);
//     });
// }


// // Remove from wishlist

// function removeWishlist(destination) {

//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//     wishlist = wishlist.filter(function(item) {
//         return item !== destination;
//     });

//     localStorage.setItem(
//         "wishlist",
//         JSON.stringify(wishlist)
//     );

//     displayWishlist();
// }


// // Book package

// function bookPackage(packageName) {

//     alert(
//         "You selected " + packageName + 
//         ". Booking feature will be added later."
//     );
// }


// // Logout

// // function logout() {

// //     alert("You have been logged out.");
// // }


// // Run wishlist function when page loads

// displayWishlist();
// function loginUser() {

//     let email = document.getElementById("loginEmail").value;
//     let password = document.getElementById("loginPassword").value;

//     if (email == "" || password == "") {

//         alert("Please enter email and password");

//     } else {

//         alert("Login successful!");

//     }
// }


// function signupUser() {

//     let name = document.getElementById("signupName").value;
//     let email = document.getElementById("signupEmail").value;
//     let password = document.getElementById("signupPassword").value;

//     if (name == "" || email == "" || password == "") {

//         alert("Please fill all fields");

//     } else {

//         alert("Account created successfully!");

//     }
// }


// function showSignup() {

//     document.getElementById("signupBox").style.display = "block";

// }