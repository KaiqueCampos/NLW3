const responsiveCarousel = document.querySelector(".js-carousel--responsive");

new Glider(responsiveCarousel, {
    infinite: false,
    draggable: false,
    arrows: {
        prev: ".js-carousel--responsive-prev",
        next: ".js-carousel--responsive-next",
    },
    responsive: [
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                duration: 1.5

            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                duration: 1.5
            },
        },
    ],
});

