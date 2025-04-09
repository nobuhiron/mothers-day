const onScrollParallax = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  document.querySelectorAll('.js-object').forEach((el) => {
    const rect = el.getBoundingClientRect();
    const elY = rect.top + window.scrollY;
    const offset = el.dataset.y ? parseFloat(el.dataset.y) : 0;
    const progress = (scrollY + windowHeight - elY) / windowHeight;
    const moveY = offset * progress;

    el.style.transform = `translateY(${moveY}px)`;
  });
};

window.addEventListener('scroll', onScrollParallax);
window.addEventListener('load', onScrollParallax);
