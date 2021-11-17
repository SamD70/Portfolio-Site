const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');

hamburger.addEventListener('click', () =>{
    nav.classList.toggle('show');
});