// グローバルに公開
window.SmoothScroll = class {
  constructor() {
    console.log('SmoothScroll initialized');
    this.navLinks = document.querySelectorAll('a[href^="#"]');
    this.priceLinks = document.querySelectorAll('.price-link');
    console.log('Found nav links:', this.navLinks.length);
    console.log('Found price links:', this.priceLinks.length);

    this.init();
  }

  init() {
    // ナビゲーションリンクのクリックイベント
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        console.log('Nav link clicked:', link.getAttribute('href'));
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        this.scrollToSection(targetId);
      });
    });

    // 価格リンクのクリックイベント
    this.priceLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        console.log('Price link clicked');
        e.preventDefault();
        this.scrollToSection('#price');
      });
    });
  }

  scrollToSection(targetId) {
    console.log('Attempting to scroll to:', targetId);
    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      console.error('Target element not found:', targetId);
      return;
    }

    console.log('Target element found:', targetElement);

    // ヘッダーの高さを考慮
    const header =
      document.querySelector('header') || document.querySelector('.l-header');
    const headerHeight = header ? header.offsetHeight : 0;
    console.log('Header height:', headerHeight);

    // scrollIntoViewを使用
    targetElement.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    });

    // ヘッダーの高さ分だけ上にスクロール
    window.scrollBy(0, -headerHeight);
  }
};

// Initialize smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  new window.SmoothScroll();
});
