document.addEventListener("DOMContentLoaded", function() {

    const hours = new Date().getHours() // get the current hour
    
    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?
    
let message = "";

if (isMorning) {
    message = "Good morning! Have a great start to your day!";
} else if (isAfternoon) {
    message = "Good afternoon! Keep pushing forward!";
} else if (isEvening) {
    message = "Good evening! Time to relax and get in bed.";
}
document.getElementById("welcome").innerText = message;
});

// keeping the secret message
localStorage.setItem("It's a secret to everybody.", "Here, take this. It's dangerous to go alone!");
// pictures
const images = [
    "https://wallpapers.com/images/hd/world-of-warcraft-restoration-druid-healing-69ucodb01a3oyfab.webp",
    "https://wallpapers.com/images/high/sylvanas-windrunner-q892cabxvp1kerna.webp",
    "https://wallpapers.com/images/high/warcraft-2-86orjm2qwgsq561i.webp",
    "https://wallpapers.com/images/high/warcraft-2-2400-x-1350-wxluvbbro072yvzu.webp"
];

const carruselInner = document.querySelector('.carrusel-inner');

// function to add pictures
function loadImages() {
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('carrusel-item');
        if (index === 0) item.classList.add('active'); // First active picture

        const img = document.createElement('img');
        img.src = image;
        img.alt = `Imagen ${index + 1}`;

        item.appendChild(img);
        carruselInner.appendChild(item);
    });
}

// calling the function to the images
loadImages();

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrusel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carruselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);

