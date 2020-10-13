var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 5,

  breakpoints: {
    // when window width is >= 320px
    375: {
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
  
    }
  },
 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

