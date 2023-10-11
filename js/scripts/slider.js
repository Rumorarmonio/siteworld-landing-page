const sliderIntro = document.querySelector('.intro__main');

let swiper = new Swiper(sliderIntro, {
    slidesPerView: 1,
    spaceBetween: 10000,
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

const sliderStories = document.querySelector('.stories');

let swiperStories = new Swiper(sliderStories, {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 250
})