/*
 * Description:
 * Author:LinJ
 * Date:2022-01-16 19:12:34
 * LastEditors:LinJ
 * LastEditTime:2022-01-16 20:09:01
 */
const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        // 点击事件发生在rating内部的img以及small标签上
        removeActive();
        e.target.parentNode.classList.add('active');
        // nextElementSibling 返回当前元素在其父元素的子元素节点中的后一个元素节点
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
    if(e.target.classList.contains('rating')) {
        removeActive();
        e.target.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }

})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
})
