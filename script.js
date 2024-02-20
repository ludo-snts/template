// revenir en haut de la page
const titleBtn = document.getElementById('title');
titleBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

// au clic sur élément du menu, fermer le menu
menu.addEventListener('click', (event) => {
    // A = anchor (lien d'ancrage)
    if (event.target.tagName === 'A') {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }
});

//TODO: changement du background-color des sections (smooth) : OK smooth avec le css (body {transition: background-color 1s ease;})

const mainElement = document.querySelector('main');
const sections = mainElement.querySelectorAll('section');

// Déterminer si la moitié d'un élément (section dans la fonction updateBackgroundColor ) est visible à l'écran
function isHalfVisible(element) {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    return elementTop < windowHeight / 2 && elementBottom > windowHeight / 2;
}

// Mettre à jour la couleur du fond en fonction de la section visible
function updateBackgroundColor() {
    sections.forEach(section => {
        if (isHalfVisible(section)) {
            const sectionColor = section.getAttribute('data-color');
            document.body.style.backgroundColor = `var(--color-${sectionColor})`;
        }
    });
}

// Écouteur d'événement de défilement pour appeler la fonction de mise à jour de la couleur du fond
mainElement.addEventListener('scroll', updateBackgroundColor);
