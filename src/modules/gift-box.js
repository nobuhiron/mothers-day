export const initGiftBoxObserver = () => {
  const observers = new Map();

  function createObserver(element) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 親要素にis-inviewクラスを追加
            if (element.classList.contains('p-gift-box__item')) {
              element.classList.add('is-inview');
            } else {
              // リストの場合は親のp-gift-boxにクラスを追加
              element.closest('.p-gift-box').classList.add('is-inview');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    observer.observe(element);
    return observer;
  }

  // 監視対象の要素を取得
  document
    .querySelectorAll('.p-gift-box__list, .p-gift-box__item._second')
    .forEach((element) => {
      observers.set(element, createObserver(element));
    });

  // クリーンアップ
  window.addEventListener('beforeunload', () => {
    observers.forEach((observer) => observer.disconnect());
    observers.clear();
  });
};
