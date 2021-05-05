(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.menu__body');
    const menuCloseItem = document.querySelector('.burger__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('menu__body_active');
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('menu__body_active');
    })
} ());

$(document).ready(function(){
    $('.slider__body').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true
    });
});