const slides = document.querySelectorAll(".slide");
const buttonPrev = document.querySelector(".prev__slide");
const buttonNext = document.querySelector(".next__slide");
const bullets = document.querySelectorAll(".slider__pagination__button");
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  currentIndex = index;
  const activeSlide = document.querySelector(".slide.is__active");
  const activeBullet = document.querySelector(".slider__pagination__button.is__active");
    slides.forEach((element) => (element.style.order = ""));
  activeSlide.classList.remove("is__active");
  slides[index].classList.add("is__active");
  slides[index].style.order = "-1";
  activeBullet.classList.remove("is__active");
  bullets[index].classList.add("is__active");
};

const onPrevButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
};

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
};

const initSlider = () => {
  buttonPrev.addEventListener("click", onPrevButtonClick);
  buttonNext.addEventListener("click", onNextButtonClick);
  bullets.forEach((element, index) =>
    element.addEventListener("click", () => onSlideChange(index))
  );
};

initSlider();
