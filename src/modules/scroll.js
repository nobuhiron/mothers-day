// グローバルに公開
window.SmoothScroll = class {
  constructor() {
    this.navLinks = document.querySelectorAll('.p-nav__link');
    this.priceLinks = document.querySelectorAll('.p-price-range__link');
    this.animationFrameId = null;
    this.isScrolling = false;

    // 要素が存在することを確認
    if (this.navLinks.length > 0 || this.priceLinks.length > 0) {
      this.init();
      console.log('[SmoothScroll] Initialized');
      console.log('[SmoothScroll] Nav links:', this.navLinks.length);
      console.log('[SmoothScroll] Price links:', this.priceLinks.length);
    } else {
      console.warn('[SmoothScroll] No navigation or price links found');
    }
  }

  init() {
    // ナビゲーションリンクのスムーススクロール
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        console.log(
          '[SmoothScroll] Nav link clicked:',
          link.getAttribute('href')
        );
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId === '#') {
          console.log('[SmoothScroll] Ignoring empty href');
          return;
        }
        this.scrollToSection(targetId);
      });
    });

    // 価格帯リンクのスムーススクロール
    this.priceLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        console.log(
          '[SmoothScroll] Price link clicked:',
          link.getAttribute('href')
        );
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId === '#') {
          console.log('[SmoothScroll] Ignoring empty href');
          return;
        }
        this.scrollToSection(targetId);
      });
    });
  }

  scrollToSection(targetId) {
    console.log('[SmoothScroll] Attempting to scroll to:', targetId);

    const targetElement = document.querySelector(targetId);
    if (!targetElement) {
      console.error('[SmoothScroll] Target element not found:', targetId);
      return;
    }

    if (this.isScrolling) {
      console.log('[SmoothScroll] Already scrolling, ignoring request');
      return;
    }

    this.isScrolling = true;
    console.log('[SmoothScroll] Starting scroll animation');

    // ヘッダーの高さを取得（複数のセレクタを試す）
    const header =
      document.querySelector('.l-header') ||
      document.querySelector('header') ||
      document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;
    console.log('[SmoothScroll] Header height:', headerHeight);

    // 現在のスクロール位置を取得
    const startPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    console.log('[SmoothScroll] Current scroll position:', startPosition);

    // ターゲット要素の位置を計算
    const targetRect = targetElement.getBoundingClientRect();
    const targetPosition = targetRect.top + startPosition - headerHeight;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    console.log('[SmoothScroll] Scroll parameters:', {
      headerHeight,
      startPosition,
      targetPosition,
      distance,
      duration,
      targetRect: {
        top: targetRect.top,
        height: targetRect.height,
      },
    });

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
        console.log('[SmoothScroll] Animation started');
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // イージング関数
      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
      const scrollPosition = easeOutQuart(progress) * distance + startPosition;

      // スクロール位置を更新
      window.scrollTo({
        top: scrollPosition,
        behavior: 'auto',
      });

      // アニメーションの進行状況をログに出力
      console.log('[SmoothScroll] Animation progress:', {
        timeElapsed,
        progress,
        scrollPosition,
      });

      if (timeElapsed < duration) {
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        console.log('[SmoothScroll] Animation completed');
        // 最終位置を確実に合わせる
        window.scrollTo({
          top: targetPosition,
          behavior: 'auto',
        });
        this.animationFrameId = null;
        this.isScrolling = false;
      }
    };

    // 既存のアニメーションをキャンセル
    if (this.animationFrameId) {
      console.log('[SmoothScroll] Cancelling existing animation');
      cancelAnimationFrame(this.animationFrameId);
    }

    this.animationFrameId = requestAnimationFrame(animate);
  }
};

// DOMContentLoadedイベントで初期化
document.addEventListener('DOMContentLoaded', () => {
  new window.SmoothScroll();
});
