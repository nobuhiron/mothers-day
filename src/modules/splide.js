import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const splides = document.querySelectorAll('.js-splide-item');

  splides.forEach((el) => {
    new Splide(el, {
      type: 'loop',
      perPage: 4.5,
      perMove: 1,
      gap: '1rem',
      pagination: false,
      breakpoints: {
        768: {
          perPage: 2.5,
        },
        1024: {
          perPage: 3.5,
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
      breakpoints: {},
    }).mount();
  });
});
