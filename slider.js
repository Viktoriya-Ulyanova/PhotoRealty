document.addEventListener("DOMContentLoaded", (e) => {
  const swiper = new Swiper("#main-swiper", {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });


  const swip = new Swiper("#works-slider", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
  },
});
});

