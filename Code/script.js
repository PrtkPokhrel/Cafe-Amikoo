document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".reviewMid_container");
    const dots = document.querySelectorAll(".dot");
    let slideIndex = 0;
    let intervalId;

    // Initialize slider
    function initializeSlider() {
        showSlide(slideIndex);
        intervalId = setInterval(nextSlide, 3000); // Automatically change slides every 3 seconds
    }

    // Display the current slide and update dots
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none"; // Show the current slide
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index); // Highlight the active dot
        });
    }

    // Go to the next slide
    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length; // Loop back to the first slide
        showSlide(slideIndex);
    }

    // Go to the previous slide (optional)
    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
        showSlide(slideIndex);
    }

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            clearInterval(intervalId); // Stop automatic sliding
            slideIndex = index; // Set slideIndex to the clicked dot
            showSlide(slideIndex);
            intervalId = setInterval(nextSlide, 3000); // Restart automatic sliding
        });
    });

    initializeSlider();
});


// To add maps
function openGoogleMap() {
    const googleMapUrl = 'https://www.google.com/maps?q=Wisconsin&z=10' ;
    window.open(googleMapUrl, '_blank');
}

function openAppleMap() {
    const appleMapUrl = 'https://maps.apple.com/?q=Wisconsin';
    window.open(appleMapUrl, '_blank');
}
 