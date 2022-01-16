/*
 * Description: label标签随拖动条移动
 * Author:LinJ
 * Date:2022-01-16 20:37:03
 * LastEditors:LinJ
 * LastEditTime:2022-01-16 21:01:15
 */
const range = document.getElementById('range');

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

range.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    // 取出在css文件中设定的属性值(字符串)
    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    // 因为拖拽点的大小影响， 所以求出来的left有10px的偏差，需要使用scale函数来进行校准
    const left = num_width * (value / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
    label.style.left = `${left}px`;

    label.innerHTML = value;
})
