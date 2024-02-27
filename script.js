// constantes
const mainElement = document.querySelector('main');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const sections = mainElement.querySelectorAll('section');

// Écouteur d'événement de défilement pour appeler la fonction de mise à jour de la couleur du fond
mainElement.addEventListener('scroll', updateBackgroundColor);
// Écouteur d'événement de défilement pour appeler la fonction de mise à jour de la couleur du texte du h2
mainElement.addEventListener('scroll', updateHeadingColor);
// Écouteur d'événement de survol pour appeler la fonction de mise à jour de la couleur du lien
menu.addEventListener('mouseenter', updateLinkColor);
menu.addEventListener('mouseleave', updateLinkColor);

// revenir en haut de la page
const titleBtn = document.getElementById('title');
titleBtn.addEventListener('click', (event) => {
    // event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// menu
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    if (menuBtn.classList.contains('active')) {
        menu.classList.remove('inactive');
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
        menu.classList.add('inactive');
    }
    // apres un delai de 1s, retirer la class inactive
    setTimeout(() => {
        menu.classList.remove('inactive');
    }, 1000);
});

// au clic sur élément du menu, fermer le menu
menu.addEventListener('click', (event) => {
    // A = anchor (lien d'ancrage)
    if (event.target.tagName === 'A') {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        menu.classList.add('inactive');

    }
});

//TODO: changement du background-color des sections (smooth) : OK smooth avec le css (body {transition: background-color 1s ease;})
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

// Mettre à jour la couleur du texte du h2 en fonction de la section visible
function updateHeadingColor() {
    sections.forEach(section => {
        const heading = section.querySelector('h2');
        if (heading && isHalfVisible(section)) {
            const colorVariable = heading.getAttribute('data-color');
            heading.style.color = `var(--color-${colorVariable})`;
        }
    });
}

//TODO: changement du color des liens du menu au hover : OK
// Mettre à jour la couleur des liens au survol
function updateLinkColor() {
    const links = document.querySelectorAll('.menu-section a');
    
    links.forEach(link => {
        const colorVariable = link.getAttribute('data-color');
        
        link.addEventListener('mouseenter', () => {
            // Utiliser la variable de couleur CSS correspondant à la couleur spécifiée dans data-color
            link.style.color = `var(--color-${colorVariable})`;
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = ''; // Rétablir la couleur par défaut
        });
    });
}


