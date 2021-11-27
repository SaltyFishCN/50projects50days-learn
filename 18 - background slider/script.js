/*
 * Description:
 * Author:LinJ
 * Date:2021-11-27 14:03:04
 * LastEditors:LinJ
 * LastEditTime:2021-11-27 14:29:19
 */
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const MAX_INDEX = slides.length - 1;
const PREV_SLIDE = Symbol('prev');
const NEXT_SLICE = Symbol('next');
let curIndex = 0;

const updateSlide = (direction) => {
  switch(direction) {
    case PREV_SLIDE:
      curIndex -= 1;
      if(curIndex < 0) {
        curIndex = MAX_INDEX;
      }
    break;
    case NEXT_SLICE:
      curIndex += 1;
      if(curIndex > MAX_INDEX) {
        curIndex = 0;
      }
    break;
  }

  // update class and render
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[curIndex].classList.add('active');
  setBg2Body(curIndex);
}

const setBg2Body = (idx) => {
  document.body.style.backgroundImage = slides[idx].style.backgroundImage;
}

setBg2Body(curIndex);
leftBtn.addEventListener('click', () => {
  updateSlide(PREV_SLIDE);
});
rightBtn.addEventListener('click', () => {
  updateSlide(NEXT_SLICE);
});
