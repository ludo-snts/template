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

//TODO: changement du background-color des sections (smooth)

