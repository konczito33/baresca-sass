//burger
const burgerBtn = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
const navList = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.list__item')
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('--active')
    nav.classList.toggle('--active')
    document.body.classList.toggle('--active')
    arrow.style.display = "none"

    
})
//menu 
const links = document.querySelectorAll('.list__link')
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('--active')
        burgerBtn.classList.remove('--active')
        document.body.classList.remove('--active')
    })
});

//arrow i header
const arrow = document.querySelector('.main__arrow')
const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        arrow.style.display = "none"
        header.classList.add('--active')
    } else {
        header.classList.remove('--active')
    }
})

//showing
const main = document.querySelector('.main')
const oNas = document.querySelector('.o-nas')
const oNasTitle = document.querySelector('.o-nas__title')
const oNasContent = document.querySelector('.o-nas__content')
const rasa = document.querySelector('.rasa')
const rasaTitle = document.querySelector('.rasa__title')
const rasaContent = document.querySelector('.rasa__content')
window.addEventListener('scroll', () => {
    if (window.scrollY > main.clientHeight / 2) {
        oNas.style.animation = "slideInLeft .5s both"
        oNasContent.style.animation = "show .5s .5s both"
        oNasTitle.style.animation = "show .5s .5s both"
    }
    if (window.scrollY > main.clientHeight / 2 + oNas.clientHeight) {
        rasa.style.animation = "slideInRight .5s both"
        rasaContent.style.animation = "show .5s .5s both"
        rasaTitle.style.animation = "show .5s .5s both"
    }
})