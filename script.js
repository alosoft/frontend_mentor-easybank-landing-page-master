// select elements
const mobile_menu = document.querySelector(".mobile__menu");
const overlay = document.querySelector("div.overlay");
const nav__list = document.querySelector('.nav__list');

// add click listeners
mobile_menu.addEventListener('click', () => {
    nav__list.classList.toggle('show');
    overlay.classList.toggle('show');
    mobile_menu.classList.toggle('close_icon');
    console.log(overlay);
})
