function searchDestination() {

    let search =
        document.getElementById("searchInput").value.trim();


    if (search == "") {

        alert("Please enter a destination");

    } else {

        alert("Searching for " + search);

    }
}





let heroImage =
    document.querySelector(".hero-image");

let images =
    document.querySelectorAll(".hero-image img");

let currentImage = 0;


function showNextImage() {

    currentImage++;


    if (currentImage >= images.length) {

        currentImage = 0;

    }


    heroImage.style.transform =
        `translateX(-${currentImage * 100}%)`;
}


// Change image every 3 seconds

setInterval(showNextImage, 3000);





function addWishlist(destination) {

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];


    if (!wishlist.includes(destination)) {

        wishlist.push(destination);


        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );


        alert(
            destination +
            " added to wishlist ❤️"
        );

    } else {

        alert(
            destination +
            " is already in your wishlist"
        );

    }
}





function displayWishlist() {

    let container =
        document.getElementById(
            "wishlistContainer"
        );


    if (!container) {

        return;

    }


    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];


    if (wishlist.length == 0) {

        container.innerHTML =
            "<p>Your wishlist is empty.</p>";

        return;

    }


    container.innerHTML = "";


    wishlist.forEach(
        function(destination) {

            let card =
                document.createElement("div");


            card.className = "card";


            card.innerHTML = `

                <h3>
                    ${destination}
                </h3>

                <p>
                    This destination is saved
                    in your wishlist.
                </p>

                <button
                    onclick="removeWishlist('${destination}')"
                >
                    Remove
                </button>

            `;


            container.appendChild(card);

        }
    );
}




function removeWishlist(destination) {

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];


    wishlist =
        wishlist.filter(
            function(item) {

                return item !== destination;

            }
        );


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    displayWishlist();
}




function bookPackage(packageName) {

    alert(
        "You selected " +
        packageName +
        ". Booking feature will be added later."
    );
}




function loginUser() {

    let email =
        document.getElementById(
            "loginEmail"
        ).value;

    let password =
        document.getElementById(
            "loginPassword"
        ).value;


    if (
        email == "" ||
        password == ""
    ) {

        alert(
            "Please enter email and password"
        );

    } else {

        alert(
            "Login successful!"
        );

    }
}




function signupUser() {

    let name =
        document.getElementById(
            "signupName"
        ).value;

    let email =
        document.getElementById(
            "signupEmail"
        ).value;

    let password =
        document.getElementById(
            "signupPassword"
        ).value;


    if (
        name == "" ||
        email == "" ||
        password == ""
    ) {

        alert(
            "Please fill all fields"
        );

    } else {

        alert(
            "Account created successfully!"
        );

    }
}




function showSignup() {

    let signupBox =
        document.getElementById(
            "signupBox"
        );


    if (signupBox) {

        signupBox.style.display =
            "block";

    }
}





function selectTravelDate() {

    let travelDateInput =
        document.getElementById(
            "travelDate"
        );

    let result =
        document.getElementById(
            "selectedDate"
        );


    if (!travelDateInput || !result) {

        return;

    }


    let travelDate =
        travelDateInput.value;


    if (travelDate == "") {

        alert(
            "Please select your travel date"
        );

        return;

    }


    let selectedDate =
        new Date(
            travelDate + "T00:00:00"
        );


    let today =
        new Date();


    today.setHours(
        0,
        0,
        0,
        0
    );


    if (selectedDate < today) {

        alert(
            "Please select a future travel date"
        );

        return;

    }


    let formattedDate =
        selectedDate.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );


    result.innerHTML =
        "✈️ Your travel date is " +
        formattedDate;
}




let travelDateInput =
    document.getElementById(
        "travelDate"
    );


if (travelDateInput) {

    let today =
        new Date();


    let year =
        today.getFullYear();


    let month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    let day =
        String(
            today.getDate()
        ).padStart(2, "0");


    let todayString =
        `${year}-${month}-${day}`;


    travelDateInput.min =
        todayString;
}




displayWishlist();