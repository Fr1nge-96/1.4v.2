let swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    // slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    // mousewheel: true,
    keyboard: true,
    loop: true,
});

