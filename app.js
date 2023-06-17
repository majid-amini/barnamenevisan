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
  spaceBetween: 20,
  autoplay: true,
  autoplay: {
    delay: 2000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next.next-2",
    prevEl: ".swiper-button-prev.prev-2",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 480px

    // when window width is >= 640px
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiperPortfolio = new Swiper(".swiperPortfolio", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 20,
  // slidesPerView: 4,
  autoplay: true,
  autoplay: {
    delay: 2500,
  },
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
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    // when window width is >= 480px

    // when window width is >= 640px
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
