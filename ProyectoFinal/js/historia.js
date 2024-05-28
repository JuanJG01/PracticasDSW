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

// Obtener todas las galerías y sus botones de control
const galleries = document.querySelectorAll('.gallery');
const prevButtons = document.querySelectorAll('.prev-btn');
const nextButtons = document.querySelectorAll('.next-btn');

// Iterar sobre cada galería
galleries.forEach((gallery, index) => {
    const galleryImages = gallery.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    // Agregar listeners a los botones de control de esta galería
    prevButtons[index].addEventListener('click', () => showPrevImage(index));
    nextButtons[index].addEventListener('click', () => showNextImage(index));

    function showPrevImage() {
        galleryImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        galleryImages[currentIndex].classList.add('active');
    }

    function showNextImage() {
        galleryImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % galleryImages.length;
        galleryImages[currentIndex].classList.add('active');
    }
});
