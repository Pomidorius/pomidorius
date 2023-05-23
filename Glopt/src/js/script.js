const hamburger = document.querySelector(".nav__hamburger"),
overlay = document.querySelector(".nav__overlay"),
menu = document.querySelector(".nav__menu-hidden");

hamburger.addEventListener('click', () => {
    menu.classList.add("nav__menu-active");
});
hamburger.addEventListener('click', () => {
    overlay.classList.add("nav__overlay-active");
});
hamburger.addEventListener('click', () => {
    hamburger.classList.add("nav__hamburger-disactive");
});
const closer = document.querySelector(".nav__closer");

closer.addEventListener('click', () => {
    overlay.classList.remove("nav__overlay-active");
});
closer.addEventListener('click', () => {
    menu.classList.remove("nav__menu-active");
});
closer.addEventListener('click', () => {
    hamburger.classList.remove("nav__hamburger-disactive");
})
const mapOpenner = document.querySelector(".map__btn"),
    map = document.querySelector(".map"),
    mapCloser = document.querySelector(".map__closer");
mapOpenner.addEventListener('click', () => {
    map.classList.remove("map_hidden"),
    mapCloser.classList.remove("map_hidden"),
    mapOpenner.classList.add("map_hidden");
});
mapCloser.addEventListener('click',  () => {
    map.classList.add("map_hidden"),
    mapCloser.classList.add("map_hidden"),
    mapOpenner.classList.remove("map_hidden");
})