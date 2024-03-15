let currentImageIndex = 0;
const images = document.querySelectorAll('.slider-image');

function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 7000); // Rotate images every 7 seconds
