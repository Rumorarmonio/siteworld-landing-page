let openButtons = document.querySelectorAll('.digital__list > li > button')

openButtons.forEach(button => button.addEventListener('click', openNav))

function openNav() {
    document.querySelector('.mySidebar').style.width = '250px'
    document.querySelector('.main').style.marginLeft = '250px'
}

function closeNav() {
    document.querySelector('.mySidebar').style.width = '0'
    document.querySelector('.main').style.marginLeft = '0'
}