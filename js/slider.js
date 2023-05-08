$(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});