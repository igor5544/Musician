$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $('.slider-inner').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,

        pauseOnHover: true,
    });

    $('.history__slider').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 0,
        pauseOnHover: true,
        cssEase: 'easeOutElastic',
        focusOnSelect: true,
        draggable: false,
    }); 
});
jQuery(function ($) {
    $(document).ready(function () {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.header__menu').stickUp({
            parts: {
                0: 'ABOUT',
                1: 'DISCOGRAPHY',
                2: 'Concert',
                3: 'latter',
                4: 'new',
                5: 'Upcoming',
                6: 'History',
                7: 'contact'
            },
            itemClass: 'menuItem',
            itemHover: 'active'
        });
    });
});

