export const initAboutAnimation = () => {
  const imgItems = document.querySelectorAll('.p-about__img-item');
  let delay = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imgItem = entry.target;
          imgItem.style.transition = `opacity 0.8s ease ${delay}s, transform 1.2s ease ${delay}s`;
          imgItem.style.opacity = '1';
          imgItem.style.transform = 'translateY(0)';
          delay += 0.3;
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  imgItems.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    observer.observe(item);
  });
};
