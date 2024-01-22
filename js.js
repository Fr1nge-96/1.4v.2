document.getElementById('menu__button').addEventListener('click', toggleMenu)
document.getElementById('vector').addEventListener('click', toggleMenu)
document.getElementById('blur').addEventListener('click', blurOff)
document.getElementById('arrow__down').addEventListener('click', cursorClick)
document.getElementById('arrow__down').addEventListener('click', cursorClickHidden)


function toggleMenu(){
    document.getElementById('main__menu').classList.toggle('menu-visible')
}

function blurOff(){
    document.getElementById('menu__blur').classList.add('menu__blur-remove')
}

function cursorClick() {
    document.getElementById('cursorDown').classList.toggle('swiper-wrapper__flex--unhidden')
}

function cursorClickHidden() {
    document.getElementById('cursorUp').classList.toggle('arrow-down__top')
}
