document.addEventListener('click', event => {
    const isDropdownButton = event.target.matches('[data-dropdown-button]')
    if (!isDropdownButton && event.target.closest('[data-dropdown]') != null) {
        return
    }

    let currentDropdown
    let arrowIcon
    if (isDropdownButton) {
        currentDropdown = event.target.closest('[data-dropdown]')
        arrowIcon = currentDropdown.querySelector('.menu__arrow')
        currentDropdown.classList.toggle('active')
        arrowIcon.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) {
            return
        }
        dropdown.classList.remove('active')
        dropdown.querySelector('.menu__arrow').classList.remove('active')
    })
})
