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
    const cards = document.querySelector('.cards')
    const section2 = document.querySelector('.sectin_2')
    const footer = document.querySelector('#footer')

    body.classList.toggle('light')
    headerTop.classList.toggle('light')
    cards.classList.toggle('light')
    section2.classList.toggle('light')
    footer.classList.toggle('light')

    if (body.classList.contains('light')) {
        label.innerHTML = `<i class="bi bi-check"></i>`
    }
    else {
        label.innerHTML = `<i class="bi bi-x"></i>`
    }
}