const headerBurger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');
const body = document.querySelector('body')
const headerLink = document.querySelector('.header_link')

function clickBurger() {
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    body.classList.toggle('lock');
}

function clickHeaderLink() {
    headerMenu.classList.remove('active');
    headerBurger.classList.remove('active');
    body.classList.remove('lock');
}

//Light/Night Mode
const label = document.querySelector('#label-1')
const headerTop = document.querySelector('#header-top')

label.addEventListener('click', ligthNightMode)

function ligthNightMode() {
    body.classList.toggle('light')
    headerTop.classList.toggle('light')

    if (body.classList.contains('light')) {
        label.innerHTML = `<i class="bi bi-check"></i>`
    }
    else {
        label.innerHTML = `<i class="bi bi-x"></i>`
    }
}