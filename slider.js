document.addEventListener('DOMContentLoaded',(e) => {
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
      },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
})