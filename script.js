const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// document.addEventListener('scroll', e => {
//     const header = document.querySelector("header");
//     if (window.scrollY > 80) {
//         header.classList.add("scroll");
//     } else {
//         header.classList.remove("scroll");
//     }
// })
