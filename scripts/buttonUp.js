let buttonUp = document.querySelector('.button-up');

window.onscroll = function() {
    if (window.pageYOffset > 300) {
        buttonUp.classList.add('shown');
    } else {
        buttonUp.classList.remove('shown');
    }

};

buttonUp.onclick = function() {
    window.scrollTo(0, 0);
};