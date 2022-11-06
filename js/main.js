var ul = document.querySelector('nav ul');
var menuHamburguer = document.querySelector('.menu-hamburguer i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}