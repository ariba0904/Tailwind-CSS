
// Mobile Menu

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

    });
}


// Search Button

const searchButton = document.getElementById("searchButton");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        searchCity();

    });
}


// Enter Key Search

const searchInput = document.getElementById("citySearch");

if (searchInput) {

    searchInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            searchCity();

        }

    });
}