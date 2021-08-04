let popup = document.querySelector('.popup');
let request = document.querySelector('.request');
let closepopup = document.querySelector('.closePopup');
let menu = document.querySelector('.menu');
let openmenu = document.querySelector('.openMenu');
let closemenu = document.querySelector('.closeMenu');

request.addEventListener('click', () => {
  popup.style.display = 'flex';
});
closepopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
openmenu.addEventListener('click', () => {
  menu.style.left = '0';
});
closemenu.addEventListener('click', () => {
  menu.style.left = '-50vw';
});
