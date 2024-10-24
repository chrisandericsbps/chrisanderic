let target = 0;
let current = 0;
let ease = 0.075;

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper"); 
const markerWrapper = document.querySelector(".marker-wrapper");
const activeSlide = document.querySelector(".active-slide");

let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function updateActiveSliderNumber(markerMove, markerMaxMove) {
  // Calculate and update the active slide number if needed
  // const partWidth = markerMaxMove / (document.querySelectorAll('.slide').length - 1);
  // let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
  // currentPart = Math.min(document.querySelectorAll('.slide').length, currentPart);
  // activeSlide.textContent = `Slide ${currentPart}`;
}

function update() {
  current = lerp(current, target, ease);

  gsap.set(".slider-wrapper", {
    x: -current,
  });

  let moveRatio = current / maxScroll;

  let marketMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
  let markerMove = 70 + moveRatio * marketMaxMove;
  gsap.set(".marker-wrapper", {
    x: markerMove,
  });

  updateActiveSliderNumber(markerMove, marketMaxMove);
  requestAnimationFrame(update);
}

window.addEventListener("resize", () => {
  maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
});

window.addEventListener("wheel", (e) => {
  target += e.deltaY;
  target = Math.max(0, target);
  target = Math.min(maxScroll, target);
});

update();
