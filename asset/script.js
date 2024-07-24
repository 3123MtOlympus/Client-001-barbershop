


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

// Function to add Reviews

document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const stars = document.getElementById('stars').value;
    const message = document.getElementById('message').value;

    const starIcons = '<i class="fas fa-star"></i>'.repeat(stars) + '<i class="far fa-star"></i>'.repeat(5 - stars);

    const newReview = `
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                    <div class="star-rating">${starIcons}</div>
                    <p class="card-text">${message}</p>
                </div>
            </div>
        </div>
    `;

    const carouselInner = document.querySelector('#reviewsCarousel .carousel-inner');
    const activeItem = document.querySelector('#reviewsCarousel .carousel-item.active .row');

    if (activeItem.children.length < 2) {
        activeItem.insertAdjacentHTML('beforeend', newReview);
    } else {
        const newItem = `
            <div class="carousel-item">
                <div class="row">
                    ${newReview}
                </div>
            </div>
        `;
        carouselInner.insertAdjacentHTML('afterbegin', newItem);
    }

    // Reset form
    document.getElementById('reviewForm').reset();
});

// Add event listener for "See More" buttons
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('show-more')) {
        const cardBody = e.target.closest('.card-body');
        cardBody.style.overflow = 'visible';
        cardBody.style.webkitLineClamp = 'none';
        e.target.style.display = 'none';
    }
});