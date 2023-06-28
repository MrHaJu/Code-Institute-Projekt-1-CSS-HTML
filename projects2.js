let carousel = document.querySelector('.carousel');
let angle = 0;
let increment = 40;

carousel.addEventListener('wheel', function(e) {
    e.preventDefault();
    if (e.deltaY > 0) {
        angle += increment;
    } else {
        angle -= increment;
    }
    carousel.style.transform = `rotateY(${angle}deg)`;
});

let touchStartY;
carousel.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
});

carousel.addEventListener('touchmove', function(e) {
    e.preventDefault();
    let touchEndY = e.touches[0].clientY;
    if (touchEndY > touchStartY) {
        angle += increment;
    } else {
        angle -= increment;
    }
    carousel.style.transform = `rotateY(${angle}deg)`;
});