// eslint-disable-next-line no-undef
const swiper = new Swiper('.home-slider', {
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

export default swiper;
