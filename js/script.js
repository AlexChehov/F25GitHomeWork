let burger = document.querySelector('.menu-burger')
let menuList = document.querySelector('.menu-list')
burger.addEventListener('click', (e) => {
    burger.classList.toggle('active-burger')
    menuList.classList.toggle('list-active')
})

$('.about-section_coffe_line').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:1000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight:true
            }
        }
    ]
});