const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  // slidesPerView: 3,
  spaceBetween: 30,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const mySwiper = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 20,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
     
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
