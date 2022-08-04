const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu')
const navlogo = document.querySelector('navbar_logo')
const body = document.querySelector('body')

const mobile_menu = () => {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobile_menu)
