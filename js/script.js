$('.burger').on('click', function(){
    if($('.menu-mobile').hasClass('menu-mobile_visible')){
        $('.menu-mobile').removeClass('menu-mobile_visible');
    }   else {
            $('.menu-mobile').addClass('menu-mobile_visible');
    }
});