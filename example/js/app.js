const tabContent = document.querySelectorAll(".tabcontent");
const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

tabsParent.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("tabheader__item")) {
    clearInterval(sliderInterval);
    tabs.forEach((item, i) => {
      if (target === item) {
        slideIndex = i;
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

let slideIndex = 0;
let sliderInterval = setInterval(() => {
  slideIndex++;
  if (slideIndex >= tabs.length) {
    slideIndex = 0;
  }
  hideTabContent();
  showTabContent(slideIndex);
}, 1000);

const prevButton = document.querySelector(".offer__slider-prev");
const nextButton = document.querySelector(".offer__slider-next");
const currentImageText = document.getElementById("current");
const totalImagesText = document.getElementById("total");
let currentImageIndex = 1;
let totalImages = 4;

const updateImage = () => {
  let img = document.querySelector(".offer__slide img");
  img.src = `./img/slider/image${currentImageIndex}.jpg`;
  currentImageText.textContent = currentImageIndex.toString().padStart(2, "0");
};

updateImage();
prevButton.addEventListener("click", function () {
  currentImageIndex = ((currentImageIndex - 2 + totalImages) % totalImages) + 1;
  updateImage();
});
nextButton.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex % totalImages) + 1;
  updateImage();
});
