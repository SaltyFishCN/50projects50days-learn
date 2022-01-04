/*
 * Description:
 * Author:LinJ
 * Date:2022-01-04 22:41:29
 * LastEditors:LinJ
 * LastEditTime:2022-01-04 22:41:29
 */
const container = document.getElementById('container');
// 颜色表
const colorsMap = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    // 绘制小方块
    const square = document.createElement('div');
    square.classList.add('square');

    // 绑定鼠标事件
    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
   const color = getRandomColor();
   element.style.background = color;
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
   element.style.background = '#1d1d1d';
   element.style.boxShadow = '0 0 2px #000';
}

// 获取随机颜色
function getRandomColor() {
    return colorsMap[Math.floor(Math.random() * colorsMap.length)];
}