document.getElementById('menu__button').addEventListener('click', toggleMenu)
document.getElementById('vector').addEventListener('click', toggleMenu)
document.getElementById('blur').addEventListener('click', blurOff)
document.getElementById('arrow__down').addEventListener('click', cursorClick)
document.getElementById('arrow__down').addEventListener('click', cursorClickHidden)
document.getElementById('pushForm').addEventListener('click', pushOrder)
document.getElementById('orderCall').addEventListener('click', callOrder)

function toggleMenu(){
    document.getElementById('main__menu').classList.toggle('menu-visible');

}

function blurOff(){
    document.getElementById('menu__blur').classList.add('menu__blur-remove');
}

function cursorClick() {
    document.getElementById('cursorDown').classList.toggle('swiper-wrapper__flex--unhidden')
}

function cursorClickHidden() {
    document.getElementById('cursorUp').classList.toggle('arrow-down__top')
}
function pushOrder(){
    document.getElementById('pushOrder').classList.toggle('form-order__container--visible');
}

function callOrder(){
    document.getElementById('pushOrder').classList.toggle('form-order__container--visible');
}