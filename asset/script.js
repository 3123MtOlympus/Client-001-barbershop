


//Calendly Function

// document.querySelector('.book-btn').addEventListener('click', function() {
//     Calendly.initPopupWidget({ url: 'https://calendly.com/ausomelifecoachcarter/free-consultation' });
// });


// Navbar dropdown function

document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', function() {
            if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
                dropdownMenu.style.display = "block";
            } else {
                dropdownMenu.style.display = "none";
            }
        });
    }
});