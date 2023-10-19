let isOpen = false

const closeButton = document.querySelector('.sidebar__close')
const certificates = document.querySelector('.certificates')
const certificatesList = document.querySelector('.certificates__list')
const sidebar = document.querySelector('.sidebar')
const shadow = document.querySelector('.page__shadow')
const page = document.querySelector('.page')

document.body.addEventListener('click', event => {
    let targetElement = event.target

    if (isOpen) {
        if (!sidebar.contains(targetElement)
            && !certificatesList.contains(targetElement)
            || targetElement === closeButton) {
            isOpen = false
            certificates.classList.remove('certificates_visible')
            shadow.classList.remove('page__shadow_visible')

            page.style.overflow = 'initial'
        }
    } else {
        if (targetElement.matches('.digital__list img')) {
            isOpen = true
            certificates.classList.add('certificates_visible')
            shadow.classList.add('page__shadow_visible')

            page.style.overflow = 'hidden'
        }
    }
})