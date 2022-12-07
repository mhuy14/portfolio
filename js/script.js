var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 35,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
            spaceBetween: 70,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            spaceBetween: 35, 
        }
    },
  });
