new Swiper('.intro__main', {
    slidesPerView: 1,
    spaceBetween: 100000,
    allowTouchMove: true,
    loop: true,
    effect: 'fade',
    grabCursor: true,
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    pagination: {
        el: '.intro__pagination',
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

new Swiper('.clients', {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 300,
    grabCursor: true,
})