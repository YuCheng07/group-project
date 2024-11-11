// 添加start section動畫

const heroMemberMainContainer = document.querySelector(
  ".hero-member-main-content-container"
);

let startSectionHeight = 0;

const startSection = document.querySelector(".hero-member-main-start-section");

const startSectionBgImg = document.querySelector(
  ".hero-member-main-start-section-bg-img"
);

const startSectionContent = document.querySelector(
  ".hero-member-main-start-section-content"
);

const startSectionContentIcon = document.querySelector(
  ".hero-member-main-start-section-content-icon"
);

let functionSeciotnAnimetionClass = false;

heroMemberMainContainer.addEventListener("scroll", (e) => {
  e.stopPropagation();
  console.log(e.target.scrollTop);
  console.log(startSection.offsetHeight);
  startSectionHeight = startSection.offsetHeight;
  if (startSectionHeight / 4 < e.target.scrollTop && functionSeciotnAnimetionClass == false) {
    startSection.classList.add("hero-member-main-start-section-animation");
    startSectionBgImg.classList.add(
      "hero-member-main-start-section-bg-img-animation"
    );
    
    startSectionContent.classList.add(
      "hero-member-main-start-section-content-animation"
    );
    startSectionContentIcon.classList.add(
      "hero-member-main-start-section-content-icon-animation"
    );
    functionSeciotnAnimetionClass = true;
  }
  if (startSectionHeight / 2 > e.target.scrollTop && functionSeciotnAnimetionClass == true) {
    startSection.classList.remove("hero-member-main-start-section-animation");
    startSectionBgImg.classList.remove(
      "hero-member-main-start-section-bg-img-animation"
    );
    startSectionContent.classList.remove(
      "hero-member-main-start-section-content-animation"
    );
    startSectionContentIcon.classList.remove(
      "hero-member-main-start-section-content-icon-animation"
    );
    functionSeciotnAnimetionClass = false;
  }
});


// card price

const cardPriceItem = document.querySelector("#function-item-card-price");

const cardPriceItemDescriptionBox = document.querySelector(
  "#function-item-card-price .hero-member-main-function-section-content-item-description-box"
);
const cardPriceItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-card-price .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

cardPriceItem.addEventListener("click", () => {
  cardPriceItemDescriptionBox.classList.remove("hidden-info");
});

cardPriceItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cardPriceItemDescriptionBox.classList.add("hidden-info");
});

// card cover

const cardCoverItem = document.querySelector("#function-item-card-cover");

const cardCoverItemDescriptionBox = document.querySelector(
  "#function-item-card-cover .hero-member-main-function-section-content-item-description-box"
);
const cardCoverItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-card-cover .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

cardCoverItem.addEventListener("click", () => {
  cardCoverItemDescriptionBox.classList.remove("hidden-info");
});

cardCoverItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cardCoverItemDescriptionBox.classList.add("hidden-info");
});

// deck chart

const deckChartItem = document.querySelector("#function-item-deck-chart");

const deckChartItemDescriptionBox = document.querySelector(
  "#function-item-deck-chart .hero-member-main-function-section-content-item-description-box"
);
const deckChartItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-deck-chart .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

deckChartItem.addEventListener("click", () => {
  deckChartItemDescriptionBox.classList.remove("hidden-info");
});

deckChartItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  deckChartItemDescriptionBox.classList.add("hidden-info");
});

// switch version

const switchVersionItem = document.querySelector(
  "#function-item-switch-version"
);

const switchVersionItemDescriptionBox = document.querySelector(
  "#function-item-switch-version .hero-member-main-function-section-content-item-description-box"
);
const switchVersionItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-switch-version .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

switchVersionItem.addEventListener("click", () => {
  switchVersionItemDescriptionBox.classList.remove("hidden-info");
});

switchVersionItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  switchVersionItemDescriptionBox.classList.add("hidden-info");
});

// quick note

const quickNoteItem = document.querySelector("#function-item-quick-note");

const quickNoteItemDescriptionBox = document.querySelector(
  "#function-item-quick-note .hero-member-main-function-section-content-item-description-box"
);
const quickNoteItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-quick-note .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

quickNoteItem.addEventListener("click", () => {
  quickNoteItemDescriptionBox.classList.remove("hidden-info");
});

quickNoteItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  quickNoteItemDescriptionBox.classList.add("hidden-info");
});

// price top10

const priceTop10Item = document.querySelector("#function-item-price-top10");

const priceTop10ItemDescriptionBox = document.querySelector(
  "#function-item-price-top10 .hero-member-main-function-section-content-item-description-box"
);
const priceTop10ItemDescriptionBoxCloseBtn = document.querySelector(
  "#function-item-price-top10 .hero-member-main-function-section-content-item-description-box-innerbox-close-btn"
);

priceTop10Item.addEventListener("click", () => {
  priceTop10ItemDescriptionBox.classList.remove("hidden-info");
});

priceTop10ItemDescriptionBoxCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  priceTop10ItemDescriptionBox.classList.add("hidden-info");
});

// function區域 左右按鈕功能

//  獲取左、右按鈕及function區域
const functionSectionLeftBtn = document.querySelector(
  ".hero-member-main-function-section-controlbar-left-btn"
);

const functionSectionRightBtn = document.querySelector(
  ".hero-member-main-function-section-controlbar-right-btn"
);

const functionSectionContent = document.querySelector(
  ".hero-member-main-function-section-content"
);

// console.log(functionSectionContent);
//   functionSectionContent.scrollLeft = 200;
// console.log(functionSectionContent.offsetLeft);

// 監聽左按鈕

functionSectionLeftBtn.addEventListener("click", () => {
  // if(screenLeft > functionSectionContent.scrollWidth - functionSectionContent.clientWidth){ {
  //     functionSectionContent.scrollTo({
  //         left: functionSectionContent.scrollLeft - 432,
  //         behavior: "smooth"
  //       })
  // }
  functionSectionContent.scrollTo({
    left: functionSectionContent.scrollLeft - 452,
    behavior: "smooth",
  });
});

// 監聽右按鈕

functionSectionRightBtn.addEventListener("click", () => {
  if (screenLeft == 0) {
    functionSectionContent.scrollTo({
      left: functionSectionContent.scrollLeft + 456,
      behavior: "smooth",
    });
  }
  functionSectionContent.scrollTo({
    left: functionSectionContent.scrollLeft + 452,
    behavior: "smooth",
  });
  // console.log(functionSectionContent.scrollLeft);
});

// 自動輪播

setInterval(() => {
  if (screenLeft == 0) {
    functionSectionContent.scrollTo({
      left: functionSectionContent.scrollLeft + 456,
      behavior: "smooth",
    });
  }
  functionSectionContent.scrollTo({
    left: functionSectionContent.scrollLeft + 452,
    behavior: "smooth",
  });
  console.log(screenLeft);
  
},3000)

// function區域 拖動功能

// 滑鼠按下
let isDragging = false;

// 初始位置
let startX = 0;

// 滾動條離容器左邊的距離
let scrollLeft = 0;

functionSectionContent.addEventListener("mousedown", (e) => {
  isDragging = true;

  // 初始位置 = 滑鼠按下的位置
  startX = e.offsetX;
  console.log(startX, "初始位置");
});

functionSectionContent.addEventListener("mousemove", (e) => {
  if (isDragging) {
    // 移動距離 = 滑鼠移動的位置 - 初始位置
    let offsetX = e.offsetX - startX;
    console.log(offsetX, "移動距離");

    // functionSectionContent.scrollLeft = scrollLeft - offsetX;
    // console.log(functionSectionContent.scrollLeft, "目前位置");
  }
});

functionSectionContent.addEventListener("mouseup", () => {
  isDragging = false;
});

// sponsors creators區域 左右按鈕功能

//  獲取左、右按鈕及function區域
const sponsorsCreatorsSectionLeftBtn = document.querySelector(
  ".hero-member-main-sponsors-creators-section-controlbar-left-btn"
);

const sponsorsCreatorsSectionRightBtn = document.querySelector(
  ".hero-member-main-sponsors-creators-section-controlbar-right-btn"
);

const sponsorsCreatorsSectionContent = document.querySelector(
  ".hero-member-main-sponsors-creators-section-content"
);

// console.log(sponsorsCreatorsSectionContent);
//   sponsorsCreatorsSectionContent.scrollLeft = 200;
// console.log(sponsorsCreatorsSectionContent.offsetLeft);

// 監聽左按鈕

sponsorsCreatorsSectionLeftBtn.addEventListener("click", () => {
  // if(screenLeft > sponsorsCreatorsSectionContent.scrollWidth - sponsorsCreatorsSectionContent.clientWidth){ {
  //     sponsorsCreatorsSectionContent.scrollTo({
  //         left: sponsorsCreatorsSectionContent.scrollLeft - 432,
  //         behavior: "smooth"
  //       })
  // }
  sponsorsCreatorsSectionContent.scrollTo({
    left: sponsorsCreatorsSectionContent.scrollLeft - 452,
    behavior: "smooth",
  });
});

// 監聽右按鈕

sponsorsCreatorsSectionRightBtn.addEventListener("click", () => {
  if (screenLeft == 0) {
    sponsorsCreatorsSectionContent.scrollTo({
      left: sponsorsCreatorsSectionContent.scrollLeft + 456,
      behavior: "smooth",
    });
  }
  sponsorsCreatorsSectionContent.scrollTo({
    left: sponsorsCreatorsSectionContent.scrollLeft + 452,
    behavior: "smooth",
  });
  // console.log(sponsorsCreatorsSectionContent.scrollLeft);
});

// sponsors creators區域 左右按鈕功能

//  獲取左、右按鈕及function區域
const storesAboutSectionLeftBtn = document.querySelector(
  ".hero-member-main-stores-about-section-controlbar-left-btn"
);

const storesAboutSectionRightBtn = document.querySelector(
  ".hero-member-main-stores-about-section-controlbar-right-btn"
);

const storesAboutSectionContent = document.querySelector(
  ".hero-member-main-stores-about-section-content"
);

// console.log(storesAboutSectionContent);
//   storesAboutSectionContent.scrollLeft = 200;
// console.log(storesAboutSectionContent.offsetLeft);

// 監聽左按鈕

storesAboutSectionLeftBtn.addEventListener("click", () => {
  // if(screenLeft > storesAboutSectionContent.scrollWidth - storesAboutSectionContent.clientWidth){ {
  //     storesAboutSectionContent.scrollTo({
  //         left: storesAboutSectionContent.scrollLeft - 432,
  //         behavior: "smooth"
  //       })
  // }
  storesAboutSectionContent.scrollTo({
    left: storesAboutSectionContent.scrollLeft - 452,
    behavior: "smooth",
  });
});

// 監聽右按鈕

storesAboutSectionRightBtn.addEventListener("click", () => {
  if (screenLeft == 0) {
    storesAboutSectionContent.scrollTo({
      left: storesAboutSectionContent.scrollLeft + 456,
      behavior: "smooth",
    });
  }
  storesAboutSectionContent.scrollTo({
    left: storesAboutSectionContent.scrollLeft + 452,
    behavior: "smooth",
  });
  // console.log(storesAboutSectionContent.scrollLeft);
});
