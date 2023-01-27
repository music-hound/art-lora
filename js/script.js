$('.burger').on('click', function(){
    if($('.menu-mobile').hasClass('menu-mobile_visible')){
        $('.menu-mobile').removeClass('menu-mobile_visible');
    }   else {
            $('.menu-mobile').addClass('menu-mobile_visible');
    }
});

$('.policy_ref').on('click', function(){
        $('.conf-policy').addClass('conf-policy-visible');
});

$('.conf-close').on('click', function(){
    $('.conf-policy').removeClass('conf-policy-visible');
});

$(document).click(function(e){
    if ($(e.target).is('.conf-policy'))
    $('.conf-policy').removeClass('conf-policy-visible')
})
