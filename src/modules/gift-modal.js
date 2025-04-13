export class GiftModal {
  constructor() {
    this.modal = document.getElementById('giftModal');
    this.overlay = this.modal.querySelector('.p-modal__overlay');
    this.closeButton = this.modal.querySelector('.p-modal__close');
    this.giftLinks = document.querySelectorAll('[data-gift-id]');

    this.init();
  }

  init() {
    this.giftLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const giftId = link.getAttribute('data-gift-id');
        this.openModal(giftId);
      });
    });

    this.overlay.addEventListener('click', () => this.closeModal());
    this.closeButton.addEventListener('click', () => this.closeModal());
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }

  openModal(giftId) {
    this.loadGiftData(giftId);
    this.modal.style.display = 'block';
    requestAnimationFrame(() => {
      this.modal.classList.add('is-active');
    });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.addEventListener(
      'transitionend',
      () => {
        if (!this.modal.classList.contains('is-active')) {
          this.modal.style.display = 'none';
        }
      },
      { once: true }
    );

    this.modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  async loadGiftData(giftId) {
    try {
      // または既存のデータを使用する場合
      const data = this.getGiftData(giftId);

      this.updateModalContent(data);
    } catch (error) {
      console.error('Error loading gift data:', error);
    }
  }

  getGiftData(giftId) {
    // 既存のデータを使用する場合の例
    const giftData = {
      1: {
        title: 'ギフトセットA',
        price: '7,000',
        catch: '【甘い物好きなお母さんへ】',
        description:
          '日本屈指の茶師が厳選した茶葉のみをブレンドしたお茶やリピート率No1の紅茶をはじめ、 手軽に抹茶・ほうじ茶ラテが楽しめるインスタントラテ、森半の人気スイーツを詰め込みました。',
        images: [
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a-main.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a1.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a2.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a3.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a4.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a5.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a6.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a7.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a8.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a9.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a10.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-a11.jpg',
        ],
        purchaseLink: 'https://www.tea-and-coffee.shop/view/item/000000000603',
      },
      2: {
        title: 'ギフトセットB',
        price: '5,900',
        catch: '【コーヒー好きなお母さんへ】',
        description:
          'もらって嬉しい、あげて嬉しい京都の珈琲屋さん「CAFE KFK(カフェカフカ)」の ドリップバッグの詰め合わせと抹茶スイーツで贅沢なひと時を。',
        images: [
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-b-main.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-b1.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-b2.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-b3.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-b4.jpg',
        ],
        purchaseLink: 'https://www.tea-and-coffee.shop/view/item/000000000604',
      },
      3: {
        title: 'ギフトセットC',
        price: '5,700',
        catch: '【コーヒー好きなお母さんへ】',
        description:
          'もらって嬉しい、あげて嬉しい京都の珈琲屋さん「CAFE KFK(カフェカフカ)」のギフトセット。 華やかな香りを愉しめるコーヒーとスイーツの詰め合わせ！',
        images: [
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-c-main.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-c1.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-c2.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-c3.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-c4.jpg',
        ],
        purchaseLink: 'https://www.tea-and-coffee.shop/view/item/000000000605',
      },
      4: {
        title: 'ギフトセットD',
        price: '5,800',
        catch: '【好奇心旺盛なお母さんへ】',
        description:
          '甘くやわらかな香りで、繊細な味わいが特徴の和紅茶。 香り豊かな様々なフレーバーの和紅茶との新しい出会いをお届けします。 エコバッグにも使えるMINTON(ミントン)のバッグ付き！',
        images: [
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-d-main.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-d1.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-d2.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-d3.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-d4.jpg',
        ],
        purchaseLink: 'https://www.tea-and-coffee.shop/view/item/000000000606',
      },
      5: {
        title: 'ギフトセットE',
        price: '6,000',
        catch: '【おしゃれなお母さんへ】',
        description:
          '五感で味わう急須「CHASTA(チャスタ)」と厳選した茶葉と、 ハーブを急須一煎分の使い切りパック「ISSEN 一煎」のギフトセットと森半の人気スイーツのセット。 おしゃれなティータイムにぴったり！',
        images: [
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-e-main.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-e1.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-e2.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-e3.jpg',
          'https://gigaplus.makeshop.jp/morihan1836/feature-page/25mothersday/images/gift-e4.jpg',
        ],
        purchaseLink: 'https://www.tea-and-coffee.shop/view/item/000000000318',
      },
    };

    return giftData[giftId];
  }

  updateModalContent(data) {
    const modal = this.modal;

    // メイン画像の更新
    const mainImg = modal.querySelector('.p-gift-detail__img');
    mainImg.innerHTML = `<img src="${data.images[0]}" alt="${data.title}" class="p-gift-detail__img-main">`;

    // キャッチコピーと説明文の更新
    modal.querySelector('.p-gift-detail__catch').textContent = data.catch;
    modal.querySelector('.p-gift-detail__description').textContent =
      data.description;

    // サムネイル画像の更新
    const imagesContainer = modal.querySelector('.p-gift-detail__images');
    // 既存の画像要素をクリア
    imagesContainer.innerHTML = '';
    // 新しい画像要素を動的に生成（メイン画像を除く）
    data.images.slice(1).forEach((imageUrl, index) => {
      const imageElement = document.createElement('div');
      imageElement.className = 'p-gift-detail__image';
      imageElement.innerHTML = `<img src="${imageUrl}" alt="${data.title}" class="p-gift-detail__img-thumb">`;
      imagesContainer.appendChild(imageElement);
    });

    // 購入情報の更新
    const purchaseContainer = document.createElement('div');
    purchaseContainer.className = 'p-gift-detail__purchase';
    purchaseContainer.innerHTML = `
      <h3 class="p-gift-detail__purchase-title">${data.title}</h3>
      <p class="p-gift-detail__purchase-price">${data.price}円(税込)</p>
      <a href="${data.purchaseLink}" class="p-gift-detail__purchase-link c-item-link">購入する</a>
    `;

    // 既存の購入情報を削除
    const existingPurchase = modal.querySelector('.p-gift-detail__purchase');
    if (existingPurchase) {
      existingPurchase.remove();
    }

    // 新しい購入情報を追加
    modal.querySelector('.p-gift-detail').appendChild(purchaseContainer);
  }
}
