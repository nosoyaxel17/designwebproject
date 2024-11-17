window.onload = function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    }, 1500);
};

let currentSlide = 0;
const slides = document.querySelectorAll('#carrusel .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}


showSlide(currentSlide);


setInterval(nextSlide, 3000); 
