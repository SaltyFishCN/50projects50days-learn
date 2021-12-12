/*
 * Description:
 * Author:LinJ
 * Date:2021-12-12 23:44:35
 * LastEditors:LinJ
 * LastEditTime:2021-12-12 23:46:12
 */
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';

let curIdx = 1;
// 初始速度 300ms / speedVal
let speed = 300 / speedEl.value;
const startTextPrint = () => {
    textEl.innerHTML = text.slice(0, curIdx);
    curIdx += 1;
    // 边界检测
    if(curIdx > text.length)
        curIdx = 1;
    setTimeout(startTextPrint, speed);
}

startTextPrint();
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);
