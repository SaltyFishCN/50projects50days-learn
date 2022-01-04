/*
 * Description:
 * Author:LinJ
 * Date:2022-01-04 21:59:15
 * LastEditors:LinJ
 * LastEditTime:2022-01-04 21:59:15
 */
const imgs = document.getElementById('imgs');
const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

nextBtn.addEventListener('click', () => {
    idx += 1;
    changeImage();
    resetInterval();
})

prevBtn.addEventListener('click', () => {
    idx -= 1;
    changeImage();
    resetInterval();
})

function run() {
    idx += 1;
    changeImage();
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0;
    } else if(idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

