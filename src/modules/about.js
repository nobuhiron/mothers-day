// 関数としてエクスポート
export const initAboutAnimation = () => {
  // DOMContentLoadedイベントは外側で処理する
  const images = document.querySelectorAll('.p-about__images-item');

  if (!images.length) return; // 要素が存在しない場合は処理を終了

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-animated');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  images.forEach((image) => observer.observe(image));
};

// メインのJavaScriptファイルでの使用
document.addEventListener('DOMContentLoaded', () => {
  initAboutAnimation();
});
