const responsiveCarousel = document.querySelector(".js-carousel--responsive");

new Glider(responsiveCarousel, {
    slidesToShow: 2,
    slidesToScroll: 1,
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

const responsiveCarousel2 = document.querySelector(".js-carousel--responsive2");

new Glider(responsiveCarousel2, {
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: false,
    arrows: {
        prev: ".js-carousel--responsive-prev2",
        next: ".js-carousel--responsive-next2",
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

const responsiveCarousel3 = document.querySelector(".js-carousel--responsive3");

new Glider(responsiveCarousel3, {
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: false,
    arrows: {
        prev: ".js-carousel--responsive-prev3",
        next: ".js-carousel--responsive-next3",
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



