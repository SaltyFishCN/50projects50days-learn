/*
 * Description: 自定义画笔
 * Author:LinJ
 * Date:2021-11-29 12:24:00
 * LastEditors:LinJ
 * LastEditTime:2021-11-29 12:24:00
 */
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
colorEl.value = 'black';
let color = colorEl.value;
let start_x;
let start_y;

const drawCircle = function (x, y) {
    // 创建一个新的路径
    ctx.beginPath();
    // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise); 绘制圆弧
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    // 填充路径
    ctx.fill();
}

const drawLine = function (x1, y1, x2, y2) {
    // 创建一个新的路径
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    // 绘制路径
    ctx.stroke();
}

const updateSizeOnScreen = function (pathSize) {
    sizeEL.innerText = pathSize;
}

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    start_x = e.offsetX;
    start_y = e.offsetY;
})

document.addEventListener('mouseup', (e) => {
    isPressed = false;

    // reset x,y
    start_x = undefined;
    start_y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const target_x = e.offsetX;
        const target_y = e.offsetY;

        drawCircle(target_x, target_y);
        drawLine(start_x, start_y, target_x, target_y);

        start_x = target_x;
        start_y = target_y;
    }
})

increaseBtn.addEventListener('click', () => {
    size += 5;

    if(size > 50) {
        size = 50;
    }

    updateSizeOnScreen(pathSize);
})

decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if(size < 5) {
        size = 5;
    }

    updateSizeOnScreen(pathSize);
})

colorEl.addEventListener('change', (e) => color = e.target.value);

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
