const menu = document.querySelector('#menu-bar');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

const menuBar = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', menuBar);


//close menu bar when click on a menu item
const hideMenuBar = () => {
  const menuBars = document.querySelector('.is-active');
  if(window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMenuBar);
navLogo.addEventListener('click', hideMenuBar);
