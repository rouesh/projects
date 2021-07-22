(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-adapt');
    const menuCloseItem = document.querySelector('.burger__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-adapt_active');
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-adapt_active');
    })
} ());

$(window).resize(function(event){
    adaptive_function();
});

function adaptive_header(w,h) {
    var headerAdapt=$('.header-adapt');
    var headerLang=$('.header-top__lang');
    var headerOrder=$('.header-top__ordering');
    var headerMenuLeft=$('.header-bottom__menu_l');
    var headerMenuRight=$('.header-bottom__menu_r');

    if(w<766){ //.header-top__lang
        if(!headerLang.hasClass('done')){
            headerLang.addClass('done').appendTo(headerAdapt);
        }
    }else{
        if(headerLang.hasClass('done')){
            headerLang.removeClass('done').prependTo($('.header-top'));
        }
    }

    if(w<766){ //.header-bottom__menu_left
        if(!headerMenuLeft.hasClass('done')){
            headerMenuLeft.addClass('done').appendTo(headerAdapt);
        }
    }else{
        if(headerMenuLeft.hasClass('done')){
            headerMenuLeft.removeClass('done').prependTo($('.header-bottom__column_l'));
        }
    }

    if(w<766){ //.header-bottom__menu_right
        if(!headerMenuRight.hasClass('done')){
            headerMenuRight.addClass('done').appendTo(headerAdapt);
        }
    }else{
        if(headerMenuRight.hasClass('done')){
            headerMenuRight.removeClass('done').prependTo($('.header-bottom__column_r'));
        }
    }

    

    if(w<451){ //.header-top__ordering
        if(!headerOrder.hasClass('done')){
            headerOrder.addClass('done').prependTo(headerAdapt);
        }
    }else{
        if(headerOrder.hasClass('done')){
            headerOrder.removeClass('done').appendTo($('.header-top'));
        }
    }
}
function adaptive_function() {
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
adaptive_header(w,h);
}
adaptive_function();



function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();

