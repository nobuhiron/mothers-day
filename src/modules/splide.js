import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const splides = document.querySelectorAll('.js-splide-item');

  splides.forEach((el) => {
    new Splide(el, {
      type: 'slide',
      perPage: 4,
      perMove: 1,
      gap: '1rem',
      pagination: false,
      padding: { left: ' 11.1', right: ' 11.1' },
      breakpoints: {
        576: {
          perPage: 2,
          padding: { left: ' 8.53%', right: ' 8.53%' },
        },
        768: {
          perPage: 3,
          padding: { left: ' 8.53%', right: ' 8.53%' },
          1024: {
            perPage: 4,
            padding: { left: ' 11.1', right: ' 11.1' },
          },
        },
      },
    }).mount();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const splides = document.querySelectorAll('.js-splide-pickup');

  splides.forEach((el) => {
    new Splide(el, {
      type: 'loop',
      perPage: 2,
      gap: '1rem',
      pagination: false,
      autoplay: true,
      height: 'auto',
      autoHeight: true,
      breakpoints: {},
    }).mount();
  });
});
