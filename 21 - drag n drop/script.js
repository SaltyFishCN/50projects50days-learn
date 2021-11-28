/*
 * Description: https://developer.mozilla.org/zh-CN/docs/Web/API/Document/drop_event
 * Author:LinJ
 * Date:2021-11-28 11:29:59
 * LastEditors:LinJ
 * LastEditTime:2021-11-28 11:40:06
 */
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

const dragStart = function () {
    console.log('dragStart');
    this.classList.add('hold');
    setTimeout(() => this.className = 'invisible', 0);
}

const dragEnd = function () {
    console.log('dragEnd');
    this.className = 'fill';
}

const dragOver = function (e) {
    e.preventDefault();
}

const dragEnter = function (e) {
    e.preventDefault();
    this.classList.add('hovered');
}

const dragLeave = function () {
    this.className = 'empty';
}

const dragDrop = function () {
    this.className = 'empty';
    this.append(fill);
}

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
})
