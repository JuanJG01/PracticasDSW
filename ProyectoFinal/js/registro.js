document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
});

// Cierra el menú cuando se hace clic en un enlace dentro del menú
document.querySelectorAll("#menu ul li a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("menu").classList.remove("active");
    });
});

// Cierra el menú cuando se hace clic en cualquier parte del contenido de la página
document.getElementById("contenido").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
});

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const galleryImages = document.querySelectorAll(".gallery-image");
let currentIndex = 0;

prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);

function showPrevImage() {
    galleryImages[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    galleryImages[currentIndex].classList.add("active");
}

function showNextImage() {
    galleryImages[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % galleryImages.length;
    galleryImages[currentIndex].classList.add("active");
}

