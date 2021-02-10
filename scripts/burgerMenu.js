let burgerMenu = document.querySelector(".burger-menu");
let burgerMenuActive = document.querySelector(".burger-menu-active");
let adaptiveMenu = document.querySelector(".adaptive-menu");

burgerMenu.onclick = function() {
    adaptiveMenu.classList.toggle('hiden');
}