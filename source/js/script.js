`use strict`;

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },

        1164: {
            slidesPerView: 2,
            spaceBetween: 22
        },

        1366: {
            slidesPerView: 3,
            spaceBetween: 22
        }
    }
});