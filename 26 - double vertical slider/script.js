/*
 * Description:
 * Author:LinJ
 * Date:2021-12-10 21:38:33
 * LastEditors:LinJ
 * LastEditTime:2021-12-10 22:49:06
 */
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
let activeSlideIndex = 0;
const sliderHeight = sliderContainer.clientHeight;
const PREV_SLIDE = Symbol('prev');
const NEXT_SLIDE = Symbol('next');
const changeSlide = function (direction) {
    switch(direction) {
        case (PREV_SLIDE):
            activeSlideIndex -= 1;
        break;
        case (NEXT_SLIDE):
            activeSlideIndex += 1;
        break;
        default:
            return Error('wrong direction');
    }
    
    activeSlideIndex = activeSlideIndex > slidesLength - 1 ? 0 :
    activeSlideIndex < 0 ? slidesLength - 1 : activeSlideIndex;

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
// 左侧初始化
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => {changeSlide(PREV_SLIDE)});
downButton.addEventListener('click', () => {changeSlide(NEXT_SLIDE)});
