const burgerBtn = document.querySelector('.header__burger');
const navMenu = document.querySelector('.header__menu');
const body = document.body;

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('lock');
    });

    const navLinks = document.querySelectorAll('.header__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('lock');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('lock');
        }
    });
}