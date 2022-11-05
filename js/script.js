let burger = document.querySelector('.menu-burger')
let menuList = document.querySelector('.menu-list')
burger.addEventListener('click', (e) => {
    burger.classList.toggle('active-burger')
    menuList.classList.toggle('list-active')
})

$('.about-section_coffe_line').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
    // responsive: [
    //     {
    //         breakpoint: 1440,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             infinite: true,
    //             dots: true
    //         }
    //     },
    //     {
    //         breakpoint: 746,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     },
    //     {
    //         breakpoint: 640,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }
    // ]
});