let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

let wrp = document.getElementById('wrp');

button.addEventListener('header__menu-button', function(){ 
navigation.classList.toggle('header__nav');
wrp.classList.toggle('header__menu-overlay');
});