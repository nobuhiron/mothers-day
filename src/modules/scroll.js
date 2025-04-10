export class SmoothScroll {
  constructor() {
    this.navLinks = document.querySelectorAll('.p-nav__link');
    this.priceLinks = document.querySelectorAll('.p-price-range__link');

    this.init();
  }

  init() {
    // ナビゲーションリンクのスムーススクロール
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          this.smoothScrollTo(targetElement);
        }
      });
    });

    // 価格帯リンクのスムーススクロール
    this.priceLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          this.smoothScrollTo(targetElement);
        }
      });
    });
  }

  smoothScrollTo(element) {
    // ヘッダー要素が見つからない場合は0を返す
    const headerElement = document.querySelector('.l-header');
    const headerHeight = headerElement ? headerElement.offsetHeight : 0;

    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
}
