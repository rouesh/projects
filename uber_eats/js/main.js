$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        adaptiveHeight:true,
        draggable:false,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider-for',
        dots: false,
        arrows:false,
        centerMode: true,
        focusOnSelect: true
      });
});
