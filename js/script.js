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

const tabClick = document.querySelectorAll('.list')
const tabsItems = document.querySelectorAll('.cards')

tabClick.forEach(function (item) {
    item.addEventListener('click', function () {
        let curentBtn = item
        let tabId = curentBtn.getAttribute('data-tab')
        let curentTab = document.querySelector(tabId)



        tabClick.forEach(function (item) {
            item.classList.remove('active')
        })

        tabsItems.forEach(function (item) {
            item.classList.remove('active')
        })

        curentBtn.classList.add('active')
        curentTab.classList.add('active')
    })
})

const popupCopytxt = document.querySelector('.popup_copytxt')

function copyToClipboard(text) {
    var copytext = document.createElement('input')
    if (typeof text == 'undefined') copytext.value = window.location.href
    else copytext.value = text
    document.body.appendChild(copytext)
    copytext.select()
    document.execCommand('copy')
    document.body.removeChild(copytext)
}

document.querySelector('.btn_share').addEventListener('click', function () {
    copyToClipboard("https://timurzubcenko.github.io/Portfolio-Light_Night_Mode/")
    popupCopytxt.classList.add('active')
});

window.addEventListener('scroll', function () {
    popupCopytxt.classList.remove('active')
})

const btnFollow = document.querySelector('#btn')

function clickFollow() {
    window.scroll({
        top: 10000,
        behavior: "smooth",
    })
}

//Light/Night Mode
const label = document.querySelector('#label-1')
const headerTop = document.querySelector('#header-top')

label.addEventListener('click', ligthNightMode)

function ligthNightMode() {
    const aboutMe = document.querySelector('.about_me')
    const cardsTab = document.querySelector('#tab_1')
    const section2 = document.querySelector('.sectin_2')
    const footer = document.querySelector('#footer')

    body.classList.toggle('light')
    headerTop.classList.toggle('light')
    aboutMe.classList.toggle('light')
    cardsTab.classList.toggle('light')
    section2.classList.toggle('light')
    footer.classList.toggle('light')

    if (body.classList.contains('light')) {
        label.innerHTML = `<i class="bi bi-check"></i>`
    }
    else {
        label.innerHTML = `<i class="bi bi-x"></i>`
    }
}

AOS.init();
