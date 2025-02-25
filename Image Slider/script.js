let currentIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let totalslide = images.length;

function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function changeSlide(step) {
    currentIndex = (currentIndex + step + totalslide) % totalslide;
    updateSlider();
}
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

let slideInterval = setInterval(() => 
    changeSlide(1), 3000
);

document.querySelector('.slider-container').addEventListener('mouseover', () => clearInterval(slideInterval));
document.querySelector('.slider-container').addEventListener('mouseout', () => slideInterval = setInterval(() => changeSlide(1), 3000));

updateSlider(); 


