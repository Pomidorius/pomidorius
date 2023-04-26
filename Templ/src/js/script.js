window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav'),
    navLink = document.querySelectorAll('.nav_link'),
    subtract = document.querySelector('.subtract');

    subtract.addEventListener('click', () => {
        subtract.classList.toggle('subtract');
        nav.classList.toggle('nav_active');
    });

    navLink.forEach(item => {
        item.addEventListener('click', () => {
            subtract.classList.toggle('subtract);
            nav.classList.toggle('nav_active');
        });
    });
});