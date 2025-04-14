import './assets/styles/style.scss';
import './modules/splide.js';
// import { initImages } from './modules/images.js';
import { initAboutAnimation } from './modules/about';
import { GiftModal } from './modules/gift-modal.js';
import { initGiftBoxObserver } from './modules/gift-box';

// 一度だけ初期化するためのフラグ
let isInitialized = false;

document.addEventListener('DOMContentLoaded', () => {
  if (isInitialized) return;
  isInitialized = true;

  initAboutAnimation();
  const giftModal = new GiftModal();
  initGiftBoxObserver();
});
