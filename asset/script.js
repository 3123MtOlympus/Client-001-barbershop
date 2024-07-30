document.addEventListener('DOMContentLoaded', () => {
    // Calendly Popup Initialization
    const bookBtn = document.querySelector('.book-btn');
    if (bookBtn) {
        bookBtn.addEventListener('click', () => {
            Calendly.initPopupWidget({ url: 'https://calendly.com/ausomelifecoachcarter/free-consultation' });
        });
    }

    // Navbar Dropdown Toggle
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', () => {
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });
    }

    // Add Review Function
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
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
                            <button class="show-more">See More</button>
                        </div>
                    </div>
                </div>`;

            const newItem = document.createElement('div');
            newItem.classList.add('carousel-item');
            newItem.innerHTML = newReview;

            const firstCarouselItem = document.querySelector('.carousel-inner .carousel-item');
            if (firstCarouselItem) {
                firstCarouselItem.insertAdjacentElement('beforebegin', newItem);
            }

            // Reset form fields
            reviewForm.reset();

            // Add event listener for the "See More" button
            newItem.querySelector('.show-more').addEventListener('click', showMoreHandler);
        });
    }

    // Load and Display Static Reviews
    const reviews = [
        { name: 'Jacob', date: 'July 15, 2024', stars: 5, text: 'Great experience and wonderful support. Will use again!' },
        { name: 'Chris', date: 'July 16, 2024', stars: 4, text: 'Amazing service! Highly recommended.' },
        { name: 'Alex', date: 'July 17, 2024', stars: 5, text: 'Fantastic job, very professional!' },
        { name: 'Jordan', date: 'July 18, 2024', stars: 3, text: 'Good service but room for improvement.' },
        { name: 'Taylor', date: 'July 19, 2024', stars: 4, text: 'Very satisfied with the results!' },
    ];

    const reviewList = document.querySelector('.review-list');
    if (reviewList) {
        reviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.innerHTML = `
                <h5 class="card-title">${review.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i>${review.date}</i></h6>
                <div class="star-rating">${'★'.repeat(review.stars)}</div>
                <p class="card-text">${review.text}</p>`;
            reviewList.appendChild(reviewCard);
        });
    }

    // Expand Review Text
    function showMoreHandler(e) {
        const cardBody = e.target.closest('.card-body');
        if (cardBody) {
            cardBody.style.overflow = 'visible';
            cardBody.style.webkitLineClamp = 'none';
            e.target.style.display = 'none';
        }
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('show-more')) {
            showMoreHandler(e);
        }
    });

    // Select Image Card
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        card.addEventListener('click', () => {
            imageCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });

    // Show confirmation modal
    const confirmationModalElement = document.getElementById('confirmationModal');
    if (confirmationModalElement) {
        const confirmationModal = new bootstrap.Modal(confirmationModalElement);
        confirmationModal.show();
    }
});
