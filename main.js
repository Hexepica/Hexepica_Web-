const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentIndex = 0;
const maxIndex = slides.length - 1;

const sliderNav = (index) => {
    // Remove active class from all slides and contents
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    // Add active class to the selected slide, content, and button
    slides[index].classList.add("active");
    contents[index].classList.add("active");
    btns[index].classList.add("active");
    currentIndex = index; // Update currentIndex
};

const autoSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length; // Increment currentIndex cyclically
    sliderNav(currentIndex);
};

// Start auto-sliding
let slideInterval = setInterval(autoSlide, 10000);

// Stop auto-sliding when a button is clicked, and navigate to the selected slide
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        clearInterval(slideInterval); // Stop auto-sliding
        sliderNav(i); // Navigate to the selected slide
        slideInterval = setInterval(autoSlide, 10000); // Resume auto-sliding
    });
});
