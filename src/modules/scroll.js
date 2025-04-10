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
    const duration = 200;
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeOutCubic(t, b, c, d) {
      t /= d;
      t--;
      return c * (t * t * t + 1) + b;
    }

    requestAnimationFrame(animation);
  }
}
