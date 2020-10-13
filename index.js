const mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    520: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    680: {
      slidesPerView: 4,
    },

    960: {
      slidesPerView: 5,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const url =
  "https://www.spreadshirt.com/shopData/list?query=K118614&locale=us_US";
