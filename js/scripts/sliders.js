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

new Swiper('.stories__first', {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 300,
    // autoplay: {
    //     delay: 2500,
    // },
    grabCursor: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    on: {
        click: function () {
            let clickedSlide = this.clickedSlide.getAttribute('data-swiper-slide-index')
            storiesSecond.slideTo(clickedSlide)
            storiesSecond.update()
        }
    }
})

let isLoaded = false

const storiesSecond = new Swiper('.stories__second', {
    // loop: true,
    slidesPerView: 5,
    spaceBetween: 400,
    grabCursor: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    on: {
        realIndexChange: function () {
            let slides = this.slides
            let video = slides[this.realIndex].querySelector('.stories__video')

            video.play()
            video.classList.add('stories__video_active')

            let previousVideo
            if (this.previousIndex) {
                previousVideo = slides[this.previousIndex].querySelector('.stories__video')
                previousVideo.load()
                previousVideo.classList.remove('stories__video_active')
            } else {
                previousVideo = slides[0].querySelector('.stories__video')
                previousVideo.load()
                previousVideo.classList.remove('stories__video_active')
            }
        },
        update: function () {
            let slides = this.slides
            let video = slides[this.activeIndex].querySelector('.stories__video')

            if (isLoaded) {
                video.classList.remove('stories__video_active')
                video.load()
                isLoaded = false
            } else {
                video.classList.add('stories__video_active')
                video.play()
                isLoaded = true
            }
        }
    }
})

const storiesFirst = document.querySelector('.stories__first')
const storiesSecondContainer = document.querySelector('.stories__second')

document.body.addEventListener('click', event => {
    let targetElement = event.target

    if (!storiesFirst.contains(targetElement)
        && !storiesSecondContainer.querySelector('.swiper-wrapper').contains(targetElement)) {
        storiesSecondContainer.classList.remove('stories__second_visible')
        shadow.classList.remove('page__shadow_visible')

        page.style.overflow = 'initial'
        storiesSecond.update()
    } else {
        if (targetElement.matches('.stories__first .swiper-wrapper .swiper-slide *')) {
            storiesSecondContainer.classList.add('stories__second_visible')
            shadow.classList.add('page__shadow_visible')

            page.style.overflow = 'hidden'
        }
    }
})

new Swiper('.clients', {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 300,
    grabCursor: true,
})