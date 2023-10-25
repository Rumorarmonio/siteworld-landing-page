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
            // storiesSecond.slides[clickedSlide].querySelector('.stories__video').style.dispay = 'block'
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

            // document.querySelector('.stories__video').style.dispay = 'block'

            if (isLoaded) {
                // video.style.setProperty('display', 'none', '')

                video.classList.remove('stories__video_active')
                video.load()
                isLoaded = false
            } else {
                // video.style.setProperty('display', 'block', '')

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

    // if (isLoaded) {
        if (!storiesFirst.contains(targetElement)
            && !storiesSecondContainer.querySelector('.swiper-wrapper').contains(targetElement)) {

            storiesSecondContainer.classList.remove('stories__second_visible')
            shadow.classList.remove('page__shadow_visible')

            page.style.overflow = 'initial'
            storiesSecond.update()
        }
    /*}*/ else {
        if (targetElement.matches('.stories__first .swiper-wrapper .swiper-slide *')) {
            storiesSecondContainer.classList.add('stories__second_visible')
            shadow.classList.add('page__shadow_visible')

            page.style.overflow = 'hidden'
            storiesSecond.update()
        }
    }
})