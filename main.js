const cards = Array.from(document.querySelectorAll('.folio-card'));
const folioTitle = document.getElementById('folioTitle');
const folioSub = document.getElementById('folioSub');
const carouselDots = document.getElementById('carouselDots');
const centerStage = document.querySelector('.center-stage');
const openCollection = document.getElementById('openCollection');
const openResume = document.getElementById('openResume');
const openInfo = document.getElementById('openInfo');
const backHome = document.getElementById('backHome');
const infoPanel = document.getElementById('infoPanel');
const resumePanel = document.getElementById('resumePanel');
const collectionScreen = document.getElementById('collectionScreen');
const collectionNav = document.getElementById('collectionNav');
const collectionFeed = document.getElementById('collectionFeed');
const mobileDetailScreen = document.getElementById('mobileDetailScreen');
const backMobileDetail = document.getElementById('backMobileDetail');
const mobileDetailGallery = document.getElementById('mobileDetailGallery');
const projectSubdetailScreen = document.getElementById('projectSubdetailScreen');
const projectSubdetailScroll = document.getElementById('projectSubdetailScroll');
const backProjectSubdetail = document.getElementById('backProjectSubdetail');
const projectSubdetailTitle = document.getElementById('projectSubdetailTitle');
const projectSubdetailCount = document.getElementById('projectSubdetailCount');
const projectSubdetailGallery = document.getElementById('projectSubdetailGallery');
const detailTriggers = Array.from(document.querySelectorAll('[data-detail-trigger]'));
const infoLangToggle = document.getElementById('infoLangToggle');
const infoCloseLabel = document.querySelector('[data-info-close-label]');
const infoProfile = document.querySelector('.info-profile');
const navLinks = [openCollection, openResume, openInfo];
const infoIntro = document.querySelector('.info-profile__intro');
const resumeAnimatedHeadings = [
  document.querySelector('.resume-profile__title'),
  ...document.querySelectorAll('.resume-profile__content .resume-section h3'),
  ...document.querySelectorAll('.resume-profile__sidebar .resume-block h3'),
].filter(Boolean);
const infoFacts = Array.from(infoPanel.querySelectorAll('.info-profile__facts:not(.info-profile__facts--contact) .info-profile__row'));
const infoContactFacts = Array.from(infoPanel.querySelectorAll('.info-profile__facts--contact .info-profile__row'));

const infoLanguageCopy = {
  en: {
    close: 'Close',
    intro: [
      'HI~hello',
      "I\'m Chen Zeng,",
      'UI designer,',
      'five years in visual',
      'and interaction design.',
      'Leading 0-to-1',
      'visual systems.',
      'Art-trained,',
      'using AI tools to',
      'amplify design output.',
    ],
    facts: [
      { label: 'Education', primary: 'University of Science and Technology Liaoning', secondary: 'Environmental Design' },
      { label: 'Direction', primary: 'Visual / Product / Interaction / Experience' },
      { label: 'Style', primary: 'Minimal, restrained, rhythmic' },
      { label: 'Email', primary: '1220425347@qq.com' },
      { label: 'Phone', primary: '15566255805' },
    ],
  },
  zh: {
    close: '结束',
    intro: [
      'HI~你好',
      '我是陈增，',
      '一个拥有五年UI视觉/交互',
      '经验的设计师',
      '主导多端产品从0到1',
      '视觉体系。',
      '基于艺术功底构建严谨的',
      '审美范式，',
      '善于运用AI工具放大',
      '设计产能。',
    ],
    facts: [
      { label: '教育', primary: '辽宁科技大学', secondary: '环境设计' },
      { label: '方向', primary: '视觉/产品/交互/体验' },
      { label: '风格', primary: '简约、克制、有节奏感' },
      { label: '邮箱', primary: '1220425347@qq.com' },
      { label: '电话', primary: '15566255805' },
    ],
  },
};

let infoLanguage = 'en';

const folioItems = [
  {
    count: '01',
    title: 'Mobile Design',
    sub: '移动端',
    accent: '#FFBE9D',
  },
  {
    count: '02',
    title: 'Web Design',
    sub: 'WEB端',
    accent: '#EACAFF',
  },
  {
    count: '03',
    title: 'Brand Design',
    sub: '品牌',
    accent: '#FFBFBA',
  },
  {
    count: '04',
    title: 'IP Image Design',
    sub: 'IP设计',
    accent: '#BAD8FD',
  },
  {
    count: '05',
    title: 'Graphic/AIGC Design',
    sub: '平面/AIGC',
    accent: '#FFEFAD',
  },
];

const qumianMobileImages = [
  './assets/mobile-qumian/qumian-ai-01.png',
  './assets/mobile-qumian/qumian-ai-02.png',
  './assets/mobile-qumian/qumian-ai-03.png',
  './assets/mobile-qumian/qumian-ai-04.png',
  './assets/mobile-qumian/qumian-ai-05.png',
  './assets/mobile-qumian/qumian-ai-06.png',
  './assets/mobile-qumian/qumian-ai-07.png',
  './assets/mobile-qumian/qumian-ai-08.jpg',
  './assets/mobile-qumian/qumian-ai-09.png',
  './assets/mobile-qumian/qumian-ai-10.png',
  './assets/mobile-qumian/qumian-ai-11.png',
  './assets/mobile-qumian/qumian-ai-12.jpg',
  './assets/mobile-qumian/qumian-ai-13.png',
  './assets/mobile-qumian/qumian-ai-14.png',
  './assets/mobile-qumian/qumian-ai-15.png',
];

const yiyuMobileImages = [
  './assets/mobile-yiyu/yiyu-24.jpg',
  './assets/mobile-yiyu/yiyu-25.jpg',
  './assets/mobile-yiyu/yiyu-26.jpg',
  './assets/mobile-yiyu/yiyu-27.jpg',
  './assets/mobile-yiyu/yiyu-28.jpg',
  './assets/mobile-yiyu/yiyu-29.jpg',
  './assets/mobile-yiyu/yiyu-30.jpg',
  './assets/mobile-yiyu/yiyu-31.jpg',
  './assets/mobile-yiyu/yiyu-32.jpg',
  './assets/mobile-yiyu/yiyu-33.jpg',
  './assets/mobile-yiyu/yiyu-34.jpg',
  './assets/mobile-yiyu/yiyu-35.jpg',
];

const weiqianMobileImages = [
  './assets/mobile-weiqian/weiqian-04.jpg',
  './assets/mobile-weiqian/weiqian-05.jpg',
  './assets/mobile-weiqian/weiqian-06.jpg',
  './assets/mobile-weiqian/weiqian-07.jpg',
  './assets/mobile-weiqian/weiqian-08.jpg',
  './assets/mobile-weiqian/weiqian-09.jpg',
  './assets/mobile-weiqian/weiqian-10.jpg',
  './assets/mobile-weiqian/weiqian-11.jpg',
  './assets/mobile-weiqian/weiqian-12.jpg',
  './assets/mobile-weiqian/weiqian-13.jpg',
  './assets/mobile-weiqian/weiqian-14.jpg',
  './assets/mobile-weiqian/weiqian-15.jpg',
  './assets/mobile-weiqian/weiqian-16.jpg',
  './assets/mobile-weiqian/weiqian-17.jpg',
  './assets/mobile-weiqian/weiqian-18.jpg',
  './assets/mobile-weiqian/weiqian-19.jpg',
  './assets/mobile-weiqian/weiqian-20.jpg',
  './assets/mobile-weiqian/weiqian-21.jpg',
  './assets/mobile-weiqian/weiqian-22.jpg',
];

const zhiyanMobileImages = [
  './assets/mobile-zhiyan/zhiyan-01.png',
  './assets/mobile-zhiyan/zhiyan-02.png',
  './assets/mobile-zhiyan/zhiyan-03.png',
  './assets/mobile-zhiyan/zhiyan-04.png',
  './assets/mobile-zhiyan/zhiyan-05.png',
  './assets/mobile-zhiyan/zhiyan-06.png',
  './assets/mobile-zhiyan/zhiyan-07.png',
  './assets/mobile-zhiyan/zhiyan-08.png',
  './assets/mobile-zhiyan/zhiyan-09.png',
  './assets/mobile-zhiyan/zhiyan-10.png',
  './assets/mobile-zhiyan/zhiyan-11.png',
  './assets/mobile-zhiyan/zhiyan-12.png',
  './assets/mobile-zhiyan/zhiyan-13.png',
  './assets/mobile-zhiyan/zhiyan-14.png',
  './assets/mobile-zhiyan/zhiyan-15.png',
  './assets/mobile-zhiyan/zhiyan-16.png',
];

const qumianWebImages = [
  './assets/web-qumian/qumian-web-01.png',
  './assets/web-qumian/qumian-web-02.png',
  './assets/web-qumian/qumian-web-03.png',
  './assets/web-qumian/qumian-web-04.png',
  './assets/web-qumian/qumian-web-08.png',
  './assets/web-qumian/qumian-web-05.jpg',
  './assets/web-qumian/qumian-web-06.jpg',
  './assets/web-qumian/qumian-web-07.jpg',
];

const ovationWebImages = [
  './assets/web-ovation/ovation-01.jpg',
  './assets/web-ovation/ovation-02.jpg',
  './assets/web-ovation/ovation-03.jpg',
  './assets/web-ovation/ovation-04.jpg',
  './assets/web-ovation/ovation-05.jpg',
  './assets/web-ovation/ovation-06.jpg',
  './assets/web-ovation/ovation-07.jpg',
  './assets/web-ovation/ovation-08.jpg',
  './assets/web-ovation/ovation-09.jpg',
  './assets/web-ovation/ovation-10.jpg',
  './assets/web-ovation/ovation-11.jpg',
  './assets/web-ovation/ovation-12.jpg',
  './assets/web-ovation/ovation-13.jpg',
  './assets/web-ovation/ovation-14.jpg',
  './assets/web-ovation/ovation-15.jpg',
];

const qumianProductWebImages = [
  './assets/web-product/qumian-product-01.png',
  './assets/web-product/qumian-product-02.png',
  './assets/web-product/qumian-product-03.png',
  './assets/web-product/qumian-product-04.png',
];

const baisiWebImages = [
  './assets/web-baisi/baisi-web-01.jpg',
  './assets/web-baisi/baisi-web-02.jpg',
  './assets/web-baisi/baisi-web-03.jpg',
  './assets/web-baisi/baisi-web-04.jpg',
  './assets/web-baisi/baisi-web-05.jpg',
  './assets/web-baisi/baisi-web-06.jpg',
  './assets/web-baisi/baisi-web-07.jpg',
  './assets/web-baisi/baisi-web-08.jpg',
  './assets/web-baisi/baisi-web-09.jpg',
  './assets/web-baisi/baisi-web-10.jpg',
];

const carWebImages = [
  './assets/web-car/web-car-01.png',
  './assets/web-car/web-car-02.png',
  './assets/web-car/web-car-03.png',
  './assets/web-car/web-car-04.png',
  './assets/web-car/web-car-05.png',
  './assets/web-car/web-car-06.png',
  './assets/web-car/web-car-07.png',
  './assets/web-car/web-car-08.png',
  './assets/web-car/web-car-09.png',
  './assets/web-car/web-car-10.png',
  './assets/web-car/web-car-11.png',
  './assets/web-car/web-car-12.png',
  './assets/web-car/web-car-13.png',
  './assets/web-car/web-car-14.png',
  './assets/web-car/web-car-15.png',
  './assets/web-car/web-car-16.png',
  './assets/web-car/web-car-17.png',
  './assets/web-car/web-car-18.png',
  './assets/web-car/web-car-19.png',
  './assets/web-car/web-car-20.png',
];

const brandVisImages = [
  './assets/brand-vis/brand-vis-01.jpg',
  './assets/brand-vis/brand-vis-02.jpg',
  './assets/brand-vis/brand-vis-03.jpg',
  './assets/brand-vis/brand-vis-04.jpg',
  './assets/brand-vis/brand-vis-05.jpg',
  './assets/brand-vis/brand-vis-06.jpg',
];

const duckCoffeeBrandImages = [
  './assets/brand-duck/duck-coffee-01.png',
  './assets/brand-duck/duck-coffee-02.png',
  './assets/brand-duck/duck-coffee-03.png',
  './assets/brand-duck/duck-coffee-04.png',
  './assets/brand-duck/duck-coffee-05.png',
  './assets/brand-duck/duck-coffee-06.png',
  './assets/brand-duck/duck-coffee-07.png',
  './assets/brand-duck/duck-coffee-08.png',
  './assets/brand-duck/duck-coffee-09.png',
  './assets/brand-duck/duck-coffee-10.png',
  './assets/brand-duck/duck-coffee-11.png',
  './assets/brand-duck/duck-coffee-12.png',
];

const ipImages = [
  './assets/ip/ip-01.png',
  './assets/ip/ip-02.png',
  './assets/ip/ip-03.png',
  './assets/ip/ip-04.png',
  './assets/ip/ip-05.png',
  './assets/ip/ip-06.png',
];

const yuyuIpImages = [
  './assets/ip-yuyu/ip-yuyu-01.png',
  './assets/ip-yuyu/ip-yuyu-02.png',
  './assets/ip-yuyu/ip-yuyu-03.png',
  './assets/ip-yuyu/ip-yuyu-04.png',
  './assets/ip-yuyu/ip-yuyu-05.png',
  './assets/ip-yuyu/ip-yuyu-06.png',
  './assets/ip-yuyu/ip-yuyu-07.png',
  './assets/ip-yuyu/ip-yuyu-08.png',
];

const flatDesignImages = [
  './assets/aigc-flat/flat-01.png',
  './assets/aigc-flat/flat-02.png',
  './assets/aigc-flat/flat-03.png',
  './assets/aigc-flat/flat-04.png',
  './assets/aigc-flat/flat-05.png',
  './assets/aigc-flat/flat-06.png',
];

const aigcImages = [
  './assets/aigc-ai/aigc-01.png',
  './assets/aigc-ai/aigc-02.png',
  './assets/aigc-ai/aigc-03.png',
  './assets/aigc-ai/aigc-04.png',
  './assets/aigc-ai/aigc-05.png',
  './assets/aigc-ai/aigc-06.png',
  './assets/aigc-ai/aigc-07.png',
  './assets/aigc-ai/aigc-08.png',
  './assets/aigc-ai/aigc-09.png',
  './assets/aigc-ai/aigc-10.jpg',
  './assets/aigc-ai/aigc-11.jpg',
  './assets/aigc-ai/aigc-12.jpg',
];

const detailConfigs = [
  {
    key: 'mobile',
    label: '移动端',
    image: './assets/mobile.png',
    rowLabels: ['趣面AI', '医羽药店', '微签', '知研教育'],
    rowImages: [qumianMobileImages, yiyuMobileImages, weiqianMobileImages, zhiyanMobileImages],
    rows: [qumianMobileImages.length, yiyuMobileImages.length, weiqianMobileImages.length, zhiyanMobileImages.length],
  },
  {
    key: 'web',
    label: 'WEB端',
    image: './assets/web.png',
    rowLabels: ['趣面AI', 'OVATION', '趣面产品官网', '佰思官网', '车载Redesign'],
    rowImages: [qumianWebImages, ovationWebImages, qumianProductWebImages, baisiWebImages, carWebImages],
    rows: [qumianWebImages.length, ovationWebImages.length, qumianProductWebImages.length, baisiWebImages.length, carWebImages.length],
  },
  {
    key: 'brand',
    label: '品牌设计',
    image: './assets/brand.png',
    rowLabels: ['佰思VIS手册', 'DUCK COFFEE'],
    rowImages: [brandVisImages, duckCoffeeBrandImages],
    rows: [brandVisImages.length, duckCoffeeBrandImages.length],
  },
  {
    key: 'ip',
    label: 'IP设计',
    image: './assets/ip.png',
    rowLabels: ['IP形象-小趣', 'IP形象-小羽'],
    rowImages: [ipImages, yuyuIpImages],
    rows: [ipImages.length, yuyuIpImages.length],
  },
  {
    key: 'aigc',
    label: '平面/AIGC',
    rowLabels: ['平面设计', 'AIGC设计'],
    image: './assets/aigc.png',
    rowImages: [flatDesignImages, aigcImages],
    rows: [flatDesignImages.length, aigcImages.length],
  },
];
const detailIndexByKey = new Map(detailConfigs.map((config, index) => [config.key, index]));

function getRowImages(config, rowIndex) {
  const rowImages = config.rowImages?.[rowIndex];
  return Array.isArray(rowImages) ? rowImages : [];
}

function getRowTileCount(config, rowIndex) {
  const rowImages = getRowImages(config, rowIndex);
  return rowImages.length || config.rows[rowIndex] || 0;
}

function getRowName(config, rowIndex) {
  return config.rowLabels?.[rowIndex] || `${config.label}${rowIndex + 1}`;
}

function getProjectImage(config, rowIndex, tileIndex = 0) {
  const rowImages = getRowImages(config, rowIndex);
  return rowImages[tileIndex] || config.image;
}

function hasProjectImage(config, rowIndex, tileIndex = 0) {
  return Boolean(getRowImages(config, rowIndex)[tileIndex]);
}

function createProjectImageStyle(config, rowIndex, tileIndex, tileX, tileY, placeholderSize = '410% auto') {
  const rowImages = getRowImages(config, rowIndex);
  const hasCustomImage = Boolean(rowImages[tileIndex]);
  const image = getProjectImage(config, rowIndex, tileIndex);
  const tileSize = hasCustomImage ? 'cover' : placeholderSize;
  const tilePosition = hasCustomImage ? 'center' : `${tileX}% ${tileY}%`;

  return `--tile-x:${tileX}%; --tile-y:${tileY}%; --tile-image:url('${image}'); --tile-size:${tileSize}; --tile-position:${tilePosition};`;
}

const collectionMeta = [
  {
    nav: '移动端设计',
    type: '移动端设计',
    english: 'Mobile Design',
    date: '2021年-2026年',
    icon: 'mobile',
  },
  {
    nav: 'WEB端设计',
    type: 'WEB端设计',
    english: 'Web Design',
    date: '2021年-2026年',
    icon: 'web',
  },
  {
    nav: '品牌设计',
    type: '品牌设计',
    english: 'Brand Design',
    date: '2022年-2026年',
    icon: 'brand',
  },
  {
    nav: 'IP形象设计',
    type: 'IP形象设计',
    english: 'IP Image Design',
    date: '2025年',
    icon: 'ip',
  },
  {
    nav: '平面/AIGC设计',
    type: '平面/AIGC设计',
    english: 'Graphic / AIGC Design',
    date: '2024年-2026年',
    icon: 'aigc',
  },
];

let activeIndex = 0;
let isTransitioning = false;
let carouselTimers = [];
let activeProjectSubdetail = null;
let projectSubdetailSource = null;
let activeCollectionIndex = 0;
let collectionDarkMode = false;
let suppressDetailClickUntil = 0;

function setCarouselTimer(callback, delay) {
  const timer = window.setTimeout(() => {
    carouselTimers = carouselTimers.filter((item) => item !== timer);
    callback();
  }, delay);

  carouselTimers.push(timer);
}

function clearCarouselTransition() {
  carouselTimers.forEach((timer) => window.clearTimeout(timer));
  carouselTimers = [];
  isTransitioning = false;
  centerStage.classList.remove('is-sliding-out', 'is-sliding-in', 'is-slide-next', 'is-slide-prev');
}

function normalizeIndex(index, length) {
  return ((index % length) + length) % length;
}

function createCollectionNav() {
  if (!collectionNav || collectionNav.children.length) {
    return;
  }

  collectionNav.innerHTML = collectionMeta.map((item, index) => `
    <button class="collection-nav__item" type="button" data-collection-index="${index}" aria-label="${item.nav}">
      <span class="collection-nav__icon collection-nav__icon--${item.icon}" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </span>
      <span class="collection-nav__label">${item.nav}</span>
    </button>
  `).join('') + `
    <button class="collection-theme-toggle" id="collectionThemeToggle" type="button" aria-pressed="false" aria-label="切换暗黑模式">
      <span class="collection-theme-toggle__icon collection-theme-toggle__icon--moon" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </span>
    </button>
  `;

  Array.from(collectionNav.querySelectorAll('.collection-nav__item')).forEach((button) => {
    const index = Number(button.dataset.collectionIndex || 0);

    button.addEventListener('pointerenter', () => {
      setActiveCollection(index);
    });
    button.addEventListener('focus', () => {
      setActiveCollection(index);
    });
    button.addEventListener('click', () => {
      setActiveCollection(index);
    });
  });

  const themeButton = collectionNav.querySelector('.collection-theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      setCollectionTheme(!collectionDarkMode);
    });
  }
}

function renderCollectionProjects(detailIndex = activeCollectionIndex) {
  const config = detailConfigs[detailIndex] || detailConfigs[0];
  const meta = collectionMeta[detailIndex] || collectionMeta[0];

  collectionFeed.setAttribute('aria-label', `${meta.nav}项目列表`);
  collectionFeed.innerHTML = config.rows.map((_, rowIndex) => {
    const tileCount = getRowTileCount(config, rowIndex);
    const rowName = getRowName(config, rowIndex);
    const previewImage = getProjectImage(config, rowIndex, 0);

    return `
      <article class="collection-project" style="--collection-image:url('${previewImage}')" data-collection-project="${rowIndex}" tabindex="0" role="button" aria-label="查看${rowName}二级详情">
        <div class="collection-project__head">
          <h2>${rowName}</h2>
          <span>${meta.english}</span>
        </div>
        <button class="collection-project__preview" type="button" tabindex="-1" aria-hidden="true">
          <span class="collection-project__image"></span>
        </button>
        <div class="collection-project__content">
          <p class="collection-project__kicker">${meta.date} · ${tileCount} 张展示图</p>
          <p class="collection-project__summary">
            ${meta.english} / ${meta.type}，从主视觉、界面结构到细节状态，按项目组继续展开浏览。
          </p>
        </div>
      </article>
    `;
  }).join('');
}

function setActiveCollection(index) {
  const nextIndex = normalizeIndex(index, detailConfigs.length);

  if (nextIndex === activeCollectionIndex && collectionFeed.children.length) {
    return;
  }

  activeCollectionIndex = nextIndex;
  Array.from(collectionNav.querySelectorAll('.collection-nav__item')).forEach((button, buttonIndex) => {
    const isActive = buttonIndex === activeCollectionIndex;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-current', isActive ? 'true' : 'false');
  });

  collectionFeed.classList.remove('is-ready');
  renderCollectionProjects(activeCollectionIndex);
  collectionScreen.scrollTop = 0;
  window.requestAnimationFrame(() => {
    collectionFeed.classList.add('is-ready');
  });
}

function setCollectionTheme(isDark) {
  collectionDarkMode = Boolean(isDark);
  collectionScreen.classList.toggle('is-dark', collectionDarkMode);
  document.body.classList.toggle('mode-collection-dark', collectionDarkMode);

  const themeButton = document.getElementById('collectionThemeToggle');
  if (themeButton) {
    themeButton.setAttribute('aria-pressed', collectionDarkMode ? 'true' : 'false');
    themeButton.setAttribute('aria-label', collectionDarkMode ? '切换亮色模式' : '切换暗黑模式');
    themeButton.classList.toggle('is-dark', collectionDarkMode);
    const icon = themeButton.querySelector('.collection-theme-toggle__icon');
    if (icon) {
      icon.classList.toggle('collection-theme-toggle__icon--moon', !collectionDarkMode);
      icon.classList.toggle('collection-theme-toggle__icon--sun', collectionDarkMode);
    }
  }
}

function createMobileDetailGallery(detailIndex = 0) {
  const config = detailConfigs[detailIndex] || detailConfigs[0];

  mobileDetailScreen.dataset.detail = config.key;
  mobileDetailGallery.setAttribute('aria-label', `${config.label}项目展示`);

  mobileDetailGallery.innerHTML = config.rows.map((_, rowIndex) => {
    const tileCount = getRowTileCount(config, rowIndex);
    const rowName = getRowName(config, rowIndex);
    const tiles = Array.from({ length: tileCount }, (_, tileIndex) => {
      const tileX = (tileIndex * 19 + rowIndex * 13) % 100;
      const tileY = (tileIndex * 17 + rowIndex * 23) % 100;
      const tileStyle = createProjectImageStyle(config, rowIndex, tileIndex, tileX, tileY);

      return `<button class="mobile-detail__tile" type="button" style="${tileStyle}" aria-label="查看${rowName}第 ${tileIndex + 1} 张" data-tile-index="${tileIndex}"></button>`;
    }).join('');

    return `
      <article class="mobile-detail__row${rowIndex === 1 ? ' is-focused' : ''}" tabindex="0" data-detail-row="${rowIndex}" aria-label="${rowName}，${tileCount}个展示图">
        <h2 class="mobile-detail__name">${rowName}</h2>
        <span class="mobile-detail__count">${tileCount}</span>
        <div class="mobile-detail__tiles">${tiles}</div>
      </article>
    `;
  }).join('');

  const rows = Array.from(mobileDetailGallery.querySelectorAll('.mobile-detail__row'));
  let focusedIndex = 1;
  let hoveredIndex = null;
  let scrollSyncFrame = 0;

  function focusRow(index) {
    if (index === focusedIndex) {
      return;
    }

    focusedIndex = index;
    rows.forEach((row, rowIndex) => {
      row.classList.toggle('is-focused', rowIndex === index);
    });
  }

  function syncFocusFromViewport() {
    scrollSyncFrame = 0;
    if (hoveredIndex !== null) {
      return;
    }

    const viewportTarget = window.innerHeight * 0.42;
    let candidateIndex = focusedIndex;
    let candidateDistance = Number.POSITIVE_INFINITY;

    rows.forEach((row, rowIndex) => {
      const rect = row.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        return;
      }

      const rowCenter = rect.top + (rect.height / 2);
      const distance = Math.abs(rowCenter - viewportTarget);

      if (distance < candidateDistance) {
        candidateDistance = distance;
        candidateIndex = rowIndex;
      }
    });

    focusRow(candidateIndex);
  }

  function scheduleFocusSync() {
    if (!scrollSyncFrame) {
      scrollSyncFrame = window.requestAnimationFrame(syncFocusFromViewport);
    }
  }

  rows.forEach((row, index) => {
    const tiles = row.querySelector('.mobile-detail__tiles');
    const tileItems = Array.from(tiles.querySelectorAll('.mobile-detail__tile'));

    tiles.addEventListener('pointerenter', () => {
      hoveredIndex = index;
      focusRow(index);
    });
    tiles.addEventListener('pointerleave', () => {
      if (hoveredIndex === index) {
        hoveredIndex = null;
        scheduleFocusSync();
      }
    });

    tileItems.forEach((tile) => {
      tile.addEventListener('pointerenter', () => {
        hoveredIndex = index;
        focusRow(index);
        tile.classList.add('is-tile-active');
      });
      tile.addEventListener('pointerleave', () => {
        tile.classList.remove('is-tile-active');
      });
    });

    row.addEventListener('focus', () => {
      hoveredIndex = index;
      focusRow(index);
    });
    row.addEventListener('blur', () => {
      if (hoveredIndex === index) {
        hoveredIndex = null;
        scheduleFocusSync();
      }
    });
  });

  mobileDetailScreen.onscroll = scheduleFocusSync;
  mobileDetailScreen.onpointerleave = () => {
    hoveredIndex = null;
    scheduleFocusSync();
  };
  mobileDetailScreen.onwheel = (event) => {
    scrollMobileDetail(event);
  };
  window.onresize = scheduleFocusSync;

  scheduleFocusSync();
}

function wheelUnit(event) {
  return event.deltaMode === 1
    ? 16
    : event.deltaMode === 2
      ? window.innerHeight
      : 1;
}

function scrollMobileDetail(event) {
  if (!document.body.classList.contains('mode-mobile-detail') || event.deltaY === 0) {
    return false;
  }

  const target = event.target instanceof Element ? event.target : null;
  if (target?.closest('.mobile-detail__back')) {
    event.preventDefault();
    return true;
  }

  event.preventDefault();
  mobileDetailScreen.scrollTop += event.deltaY * wheelUnit(event);
  return true;
}

function scrollProjectSubdetail(event) {
  if (!document.body.classList.contains('mode-project-subdetail') || event.deltaY === 0) {
    return false;
  }

  const target = event.target instanceof Element ? event.target : null;
  if (target?.closest('.project-subdetail__back')) {
    event.preventDefault();
    return true;
  }

  event.preventDefault();
  projectSubdetailScroll.scrollTop += event.deltaY * wheelUnit(event);
  return true;
}

function scrollCollection(event) {
  if (
    !document.body.classList.contains('mode-collection')
    || document.body.classList.contains('mode-project-subdetail')
    || event.deltaY === 0
  ) {
    return false;
  }

  const target = event.target instanceof Element ? event.target : null;
  if (target?.closest('.collection-screen__back')) {
    event.preventDefault();
    return true;
  }

  event.preventDefault();
  collectionScreen.scrollTop += event.deltaY * wheelUnit(event);
  return true;
}

function getDetailRowFromEvent(event) {
  const target = event.target instanceof Element ? event.target : null;
  const directRow = target?.closest('.mobile-detail__tiles, .mobile-detail__tile')?.closest('.mobile-detail__row');

  if (directRow) {
    return directRow;
  }

  const x = event.clientX;
  const y = event.clientY;
  const rows = Array.from(mobileDetailGallery.querySelectorAll('.mobile-detail__row'));
  let bestRow = null;
  let bestDistance = Number.POSITIVE_INFINITY;

  rows.forEach((row) => {
    const tiles = row.querySelector('.mobile-detail__tiles');
    if (!tiles) {
      return;
    }

    const rect = tiles.getBoundingClientRect();
    const hitPadding = 8;
    const inRange = (
      x >= rect.left - hitPadding
      && x <= rect.right + hitPadding
      && y >= rect.top - hitPadding
      && y <= rect.bottom + hitPadding
    );

    if (!inRange) {
      return;
    }

    const clampedX = Math.max(rect.left, Math.min(x, rect.right));
    const clampedY = Math.max(rect.top, Math.min(y, rect.bottom));
    const distance = Math.hypot(x - clampedX, y - clampedY);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestRow = row;
    }
  });

  return bestRow;
}

// Capture clicks before any hover/focus state can change the active row.
// Every pixel inside a row's image grid is one stable entry point.
function handleMobileDetailGridClick(event) {
  if (document.body.classList.contains('mode-project-subdetail')) {
    return;
  }

  const targetRow = getDetailRowFromEvent(event);

  if (!targetRow || !document.body.classList.contains('mode-mobile-detail')) {
    return;
  }

  const detailIndex = detailIndexByKey.get(mobileDetailScreen.dataset.detail);
  if (detailIndex === undefined) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  openProjectSubdetail(
    detailIndex,
    Number(targetRow.dataset.detailRow || 0),
    'mobile-detail',
  );
}

function handleMobileDetailGridPointerDown(event) {
  if (document.body.classList.contains('mode-project-subdetail')) {
    return;
  }

  if (event.button !== 0) {
    return;
  }

  const targetRow = getDetailRowFromEvent(event);

  if (!targetRow || !document.body.classList.contains('mode-mobile-detail')) {
    return;
  }

  const detailIndex = detailIndexByKey.get(mobileDetailScreen.dataset.detail);
  if (detailIndex === undefined) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  openProjectSubdetail(
    detailIndex,
    Number(targetRow.dataset.detailRow || 0),
    'mobile-detail',
  );
}

function createProjectSubdetail(detailIndex, rowIndex) {
  const config = detailConfigs[detailIndex] || detailConfigs[0];
  const tileCount = getRowTileCount(config, rowIndex);
  const rowName = getRowName(config, rowIndex);

  activeProjectSubdetail = {
    detailIndex,
    rowIndex,
    startTileIndex: 0,
  };

  projectSubdetailScreen.dataset.detail = config.key;
  projectSubdetailTitle.textContent = rowName;
  projectSubdetailCount.textContent = `${activeProjectSubdetail.startTileIndex + 1}/${tileCount}`;
  projectSubdetailGallery.setAttribute('aria-label', `${rowName}二级详情`);

  projectSubdetailGallery.innerHTML = Array.from({ length: tileCount }, (_, tileIndex) => {
    const tileX = (tileIndex * 17 + rowIndex * 11) % 100;
    const tileY = (tileIndex * 23 + rowIndex * 19) % 100;
    const tileStyle = createProjectImageStyle(config, rowIndex, tileIndex, tileX, tileY, '180% auto');
    const hasFullImage = hasProjectImage(config, rowIndex, tileIndex);
    const image = getProjectImage(config, rowIndex, tileIndex);
    const imageContent = hasFullImage
      ? `<img class="project-subdetail__full-image" src="${image}" alt="${rowName}第 ${tileIndex + 1} 张完整展示" loading="lazy">`
      : '';

    return `
      <article class="project-subdetail__item" data-subdetail-index="${tileIndex}">
        <div class="project-subdetail__image${hasFullImage ? ' project-subdetail__image--full' : ''}" style="${tileStyle}">
          ${imageContent}
        </div>
      </article>
    `;
  }).join('');

  const items = Array.from(projectSubdetailGallery.querySelectorAll('.project-subdetail__item'));

  function updateCurrentItem() {
    if (!items.length) {
      projectSubdetailCount.textContent = `0/0`;
      return;
    }

    const scrollRect = projectSubdetailScroll.getBoundingClientRect();
    const viewportTarget = scrollRect.top + projectSubdetailScroll.clientHeight * 0.38;
    let activeItem = items[0];
    let activeDistance = Number.POSITIVE_INFINITY;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.bottom < scrollRect.top || rect.top > scrollRect.bottom) {
        return;
      }

      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(itemCenter - viewportTarget);
      if (distance < activeDistance) {
        activeDistance = distance;
        activeItem = item;
      }
    });

    const currentIndex = Number(activeItem.dataset.subdetailIndex || 0) + 1;
    projectSubdetailCount.textContent = `${currentIndex}/${tileCount}`;
  }

  const startItem = items[activeProjectSubdetail.startTileIndex];
  requestAnimationFrame(() => {
    startItem?.scrollIntoView({ block: 'start' });
    updateCurrentItem();
  });

  projectSubdetailScroll.onscroll = () => {
    updateCurrentItem();
  };
  projectSubdetailScroll.onwheel = (event) => {
    scrollProjectSubdetail(event);
  };

  projectSubdetailScreen.onpointerleave = () => {
    updateCurrentItem();
  };
  window.onresize = updateCurrentItem;
}

function openProjectSubdetail(detailIndex, rowIndex, source) {
  if (
    document.body.classList.contains('mode-project-subdetail')
    || !['mobile-detail', 'collection'].includes(source)
  ) {
    return;
  }

  projectSubdetailSource = source;
  createProjectSubdetail(detailIndex, rowIndex);
  projectSubdetailScroll.scrollTop = 0;
  projectSubdetailScreen.classList.add('is-open');
  projectSubdetailScreen.setAttribute('aria-hidden', 'false');
  document.body.classList.add('mode-project-subdetail');
}

function closeProjectSubdetail(restoreParent = true) {
  const source = projectSubdetailSource;

  projectSubdetailScroll.scrollTop = 0;
  projectSubdetailScreen.classList.remove('is-open');
  projectSubdetailScreen.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('mode-project-subdetail');
  activeProjectSubdetail = null;
  projectSubdetailSource = null;

  if (!restoreParent) {
    return;
  }

  if (source === 'mobile-detail') {
    document.body.classList.add('mode-mobile-detail');
    mobileDetailScreen.classList.add('is-open');
    mobileDetailScreen.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => {
      mobileDetailScreen.dispatchEvent(new Event('scroll'));
    });
    return;
  }

  if (source === 'collection') {
    document.body.classList.add('mode-collection');
    collectionScreen.classList.add('is-open');
    collectionScreen.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => {
      collectionFeed.classList.add('is-ready');
    });
  }
}

function updateCards() {
  cards.forEach((card, index) => {
    const isActive = index === activeIndex;

    card.classList.toggle('is-active', isActive);
    card.style.transform = 'translate(-50%, -50%)';
    card.style.opacity = isActive ? '1' : '0';
    card.style.visibility = isActive ? 'visible' : 'hidden';
    card.style.zIndex = isActive ? '2' : '1';
    card.style.pointerEvents = isActive ? 'auto' : 'none';
  });

  const active = folioItems[activeIndex];
  folioTitle.textContent = active.title;
  folioSub.textContent = active.sub;
  document.body.style.setProperty('--accent-right', active.accent);

  carouselDots.querySelectorAll('.carousel-dot').forEach((dot, index) => {
    dot.classList.toggle('is-active', index === activeIndex);
    dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
  });
}

function setActive(nextIndex) {
  const normalizedIndex = (nextIndex + cards.length) % cards.length;

  if (isTransitioning || normalizedIndex === activeIndex) {
    return;
  }

  const direction = nextIndex > activeIndex ? 'next' : 'prev';

  isTransitioning = true;
  centerStage.classList.remove('is-sliding-in', 'is-slide-next', 'is-slide-prev');
  centerStage.classList.add('is-sliding-out', `is-slide-${direction}`);

  setCarouselTimer(() => {
    activeIndex = normalizedIndex;
    updateCards();
    centerStage.classList.remove('is-sliding-out');
    centerStage.classList.add('is-sliding-in');
  }, 220);

  setCarouselTimer(() => {
    centerStage.classList.remove('is-sliding-in', 'is-slide-next', 'is-slide-prev');
    isTransitioning = false;
  }, 620);
}

function createCarouselDots() {
  cards.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `查看第 ${index + 1} 张作品集`);
    dot.addEventListener('click', () => setActive(index));
    carouselDots.appendChild(dot);
  });
}

function resetMode() {
  clearCarouselTransition();
  updateCards();
  document.body.classList.remove('mode-collection', 'mode-resume', 'mode-info', 'mode-mobile-detail', 'mode-project-subdetail');
  setCollectionTheme(false);
  infoPanel.classList.remove('is-open');
  infoIntro.classList.remove('is-rolling');
  resumeAnimatedHeadings.forEach((heading) => {
    heading.classList.remove('is-rolling');
    heading.style.removeProperty('--resume-heading-delay');
  });
  infoPanel.dataset.lang = 'en';
  resumePanel.classList.remove('is-open');
  collectionScreen.classList.remove('is-open');
  closeProjectSubdetail(false);
  mobileDetailScreen.classList.remove('is-open');
  mobileDetailGallery.querySelectorAll('.is-tile-active').forEach((tile) => tile.classList.remove('is-tile-active'));
  infoPanel.setAttribute('aria-hidden', 'true');
  resumePanel.setAttribute('aria-hidden', 'true');
  collectionScreen.setAttribute('aria-hidden', 'true');
  projectSubdetailScreen.setAttribute('aria-hidden', 'true');
  mobileDetailScreen.setAttribute('aria-hidden', 'true');
  navLinks.forEach((link) => link.classList.remove('is-active', 'is-muted'));
}

function renderInfoLanguage(lang) {
  const copy = infoLanguageCopy[lang] || infoLanguageCopy.en;

  infoLanguage = lang in infoLanguageCopy ? lang : 'en';
  infoPanel.dataset.lang = infoLanguage;
  infoCloseLabel.textContent = copy.close;
  infoLangToggle.setAttribute('aria-pressed', infoLanguage === 'zh' ? 'true' : 'false');

  infoIntro.innerHTML = copy.intro.map((line) => `<span>${line}</span>`).join('');

  infoFacts.forEach((row, index) => {
    const item = copy.facts[index];
    if (!item) return;
    row.querySelector('.info-profile__label').textContent = item.label;
    row.querySelector('.info-profile__value strong').textContent = item.primary;
    const secondary = row.querySelector('.info-profile__value span');
    if (secondary) {
      secondary.textContent = item.secondary || '';
      secondary.hidden = !item.secondary;
    }
  });

  infoContactFacts.forEach((row, index) => {
    const item = copy.facts[index + infoFacts.length];
    if (!item) return;
    row.querySelector('.info-profile__label').textContent = item.label;
    row.querySelector('.info-profile__value strong').textContent = item.primary;
  });

  infoIntro.classList.remove('is-rolling');
  window.requestAnimationFrame(() => {
    infoIntro.classList.add('is-rolling');
  });
}

function animateResumeHeadings() {
  resumeAnimatedHeadings.forEach((heading, index) => {
    heading.classList.remove('is-rolling');
    heading.style.setProperty('--resume-heading-delay', `${140 + index * 90}ms`);
  });

  window.requestAnimationFrame(() => {
    resumeAnimatedHeadings.forEach((heading) => {
      heading.classList.add('is-rolling');
    });
  });
}

function setMode(mode, detailIndex = 0) {
  resetMode();

  if (mode === 'collection') {
    createCollectionNav();
    setActiveCollection(activeCollectionIndex);
    collectionScreen.scrollTop = 0;
    setCollectionTheme(false);
    document.body.classList.add('mode-collection');
    collectionScreen.classList.add('is-open');
    collectionScreen.setAttribute('aria-hidden', 'false');
    openCollection.classList.add('is-active');
    return;
  }

  if (mode === 'mobile-detail') {
    mobileDetailScreen.scrollTop = 0;
    createMobileDetailGallery(detailIndex);
    document.body.classList.add('mode-mobile-detail');
    mobileDetailScreen.classList.add('is-open');
    mobileDetailScreen.setAttribute('aria-hidden', 'false');
    return;
  }

  if (mode === 'resume') {
    document.body.classList.add('mode-resume');
    resumePanel.classList.add('is-open');
    resumePanel.setAttribute('aria-hidden', 'false');
    openResume.classList.add('is-active');
    openCollection.classList.add('is-muted');
    openInfo.classList.add('is-muted');
    animateResumeHeadings();
    return;
  }

  if (mode === 'info') {
    document.body.classList.add('mode-info');
    infoPanel.classList.add('is-open');
    infoPanel.setAttribute('aria-hidden', 'false');
    renderInfoLanguage('en');
    openInfo.classList.add('is-active');
    openCollection.classList.add('is-muted');
    openResume.classList.add('is-muted');
  }
}

window.addEventListener('wheel', (event) => {
  if (scrollProjectSubdetail(event) || scrollMobileDetail(event) || scrollCollection(event)) {
    return;
  }

  if (
    document.body.classList.contains('mode-collection')
    || document.body.classList.contains('mode-mobile-detail')
  ) {
    return;
  }

  if (Math.abs(event.deltaY) < 8) {
    return;
  }

  event.preventDefault();

  setActive(activeIndex + (event.deltaY > 0 ? 1 : -1));
}, { passive: false });

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    resetMode();
    return;
  }

  if (
    document.body.classList.contains('mode-collection')
    || document.body.classList.contains('mode-mobile-detail')
  ) {
    return;
  }

  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    setActive(activeIndex + 1);
  }

  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    setActive(activeIndex - 1);
  }
});

openCollection.addEventListener('click', () => setMode('collection'));
openResume.addEventListener('click', () => setMode('resume'));
openInfo.addEventListener('click', () => setMode('info'));
backHome.addEventListener('click', resetMode);
detailTriggers.forEach((trigger) => {
  const openDetail = () => {
    if (Date.now() < suppressDetailClickUntil) {
      return;
    }

    const detailIndex = detailIndexByKey.get(trigger.dataset.detailKey);

    if (detailIndex === undefined) {
      return;
    }

    setMode('mobile-detail', detailIndex);
  };

  trigger.addEventListener('click', openDetail);
  trigger.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    openDetail();
  });
});
backMobileDetail.addEventListener('click', resetMode);
backProjectSubdetail.addEventListener('click', closeProjectSubdetail);
mobileDetailScreen.addEventListener('pointerdown', handleMobileDetailGridPointerDown, true);
mobileDetailScreen.addEventListener('click', handleMobileDetailGridClick, true);
collectionFeed.addEventListener('click', (event) => {
  if (!document.body.classList.contains('mode-collection') || document.body.classList.contains('mode-project-subdetail')) {
    return;
  }

  const target = event.target instanceof Element ? event.target : null;
  const project = target?.closest('.collection-project');

  if (!project) {
    return;
  }

  event.preventDefault();
  openProjectSubdetail(
    activeCollectionIndex,
    Number(project.dataset.collectionProject || 0),
    'collection',
  );
});
collectionFeed.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') {
    return;
  }

  const target = event.target instanceof Element ? event.target : null;
  const project = target?.closest('.collection-project');

  if (!project) {
    return;
  }

  event.preventDefault();
  openProjectSubdetail(
    activeCollectionIndex,
    Number(project.dataset.collectionProject || 0),
    'collection',
  );
});

infoLangToggle.addEventListener('click', () => {
  if (!document.body.classList.contains('mode-info')) {
    return;
  }

  renderInfoLanguage(infoLanguage === 'en' ? 'zh' : 'en');
});

document.querySelectorAll('[data-close]').forEach((button) => {
  const closePanel = (event) => {
    event.preventDefault();
    event.stopPropagation();
    suppressDetailClickUntil = Date.now() + 500;
    resetMode();
  };

  button.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });
  button.addEventListener('click', closePanel);
});

createCollectionNav();
createCarouselDots();
updateCards();
