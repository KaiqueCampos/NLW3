const $responsiveCarousel = document.querySelector(".js-carousel--responsive");

new Glider($responsiveCarousel, {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    arrows: {
        prev: ".js-carousel--responsive-prev",
        next: ".js-carousel--responsive-next",
    },
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
});