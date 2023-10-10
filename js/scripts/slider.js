const slider_intro = document.querySelector('.intro__main');

console.log('hi');

let swiper = new Swiper(slider_intro, {
    slidesPerView: 1,
    spaceBetween: 10,
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
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
