import './assets/styles/style.scss';
import './modules/splide.js';
// import { initImages } from './modules/images.js';
import { initAboutAnimation } from './modules/about';
import { GiftModal } from './modules/gift-modal.js';
import { SmoothScroll } from './modules/scroll.js';
import { initGiftBoxObserver } from './modules/gift-box';

document.addEventListener('DOMContentLoaded', () => {
  initAboutAnimation();
  const giftModal = new GiftModal();
  const smoothScroll = new SmoothScroll();
  initGiftBoxObserver();
});
