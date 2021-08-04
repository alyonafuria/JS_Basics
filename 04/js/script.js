const popup = document.querySelector('.popup');
const request = document.querySelector('.request');
const closepopup = document.querySelector('.closePopup');
const menu = document.querySelector('.menu');
const openmenu = document.querySelector('.openMenu');
const closemenu = document.querySelector('.closeMenu');

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
