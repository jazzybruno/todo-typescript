"use strict";
let button;
let div;
button = document.querySelector('.main-button-add');
div = document.querySelector('.main-form');
button.addEventListener('click', () => {
    console.log("Hellp");
    div.style.opacity = '1';
});
