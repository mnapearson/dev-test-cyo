const mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,

  breakpoints: {
    350: {
      slidesPerView: 2,
    },

    520: {
      slidesPerView: 3,
    },

    680: {
      slidesPerView: 4,
    },

    960: {
      slidesPerView: 5,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const url =
  "https://www.spreadshirt.com/shopData/list?query=K118614&locale=us_US";

const swiperWrapper = document.getElementById("swiper-wrapper");

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.articles.forEach((article) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      const productId = article.productId;
      const productURL =
        "https://image.spreadshirtmedia.com/image-server/v1/mp/products/" +
        productId +
        "/views/1,width=378,height=378,backgroundColor=F2F2F2";
      const img = document.createElement("img");
      img.src = productURL;
      const h1 = document.createElement("h1");
      h1.textContent = article.name;
      const p = document.createElement("p");
      p.textContent = "$" + article.price;

      slide.appendChild(img);
      slide.appendChild(h1);
      slide.appendChild(p);
      swiperWrapper.appendChild(slide);
    });
  });
