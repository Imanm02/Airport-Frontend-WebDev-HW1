const button = document.querySelector('#mobile-appbar-button');
const menu = document.querySelector('#menu-mobile');
button.addEventListener('click', () => {
    menu.classList.toggle('is-hidden');
    console.log('and you are beautiful');
});