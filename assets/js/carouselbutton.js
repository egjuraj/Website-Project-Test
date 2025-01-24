const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".item");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let currentIndex = 0;
const itemsVisible = 3; 
const totalItems = items.length;
const itemWidth = items[0].offsetWidth + 16; 


const updateCarousel = () => {
  carouselInner.style.transition = "transform 0.5s ease-in-out";
  carouselInner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
};

nextButton.addEventListener("click", () => {
  if (currentIndex < totalItems - itemsVisible) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - itemsVisible; 
  }
  updateCarousel();
});