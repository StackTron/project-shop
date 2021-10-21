console.log ('test')


let button = document.getElementById('burger');

let navigation = document.getElementById('show');

let wrp = document.getElementById('wrp');

button.addEventListener('click', function () { 
navigation.classList.toggle('show-nav');
wrp.classList.toggle('show__overlay');
});