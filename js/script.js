let burger = document.querySelector('.menu-burger')
let menuList = document.querySelector('.menu-list')
burger.addEventListener('click', (e) => {
    burger.classList.toggle('active-burger')
    menuList.classList.toggle('list-active')
})