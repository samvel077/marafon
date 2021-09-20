function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");
  const body = document.querySelector("body");

  slides[activeSlide].classList.add("active");
  body.style.background = slides[activeSlide].dataset.color;

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      body.style.background = slide.dataset.color;
      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin(0);
