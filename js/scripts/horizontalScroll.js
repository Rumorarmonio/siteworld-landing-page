const strings = document.querySelectorAll('.strings__string')
const stringsContainer = document.querySelector('.strings')

let previousPosition = window.scrollY

let scrollString = 1200
strings.forEach(string => {
    string.innerHTML = 'Думаем за Вас Предлагаем креативные решения JAVASCRIPT ANGULARJS PHP YANDEX GOOGLE FIGMA PHOTOSHOP ILLUSTRATOR TILDA AJAX 1C SQL '.repeat(3)
    string.scrollLeft = scrollString
    scrollString -= 400
})

window.addEventListener('scroll', event => {
    // event.preventDefault()

    let currentPosition = window.scrollY

    if (isElementInViewport(stringsContainer)) {
        if (currentPosition > previousPosition) {
            strings[0].scrollLeft += 7
            strings[1].scrollLeft += 12
            strings[2].scrollLeft += 17
        } else {
            strings[0].scrollLeft -= 7
            strings[1].scrollLeft -= 12
            strings[2].scrollLeft -= 17
        }
    }

    // if (Math.abs(currentPosition - previousPosition) > 50) {
    previousPosition = currentPosition
    // }
})

function isElementInViewport(element) {
    let rect = element.getBoundingClientRect()
    return rect.bottom > 0
        || rect.right > 0
        || rect.left < window.innerWidth
        || rect.top < window.innerHeight
}