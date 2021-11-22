/*
 * Description:
 * Author:LinJ
 * Date:2021-11-22 12:52:35
 * LastEditors:LinJ
 * LastEditTime:2021-11-22 12:52:35
 */
const labels = document.querySelectorAll('.form-control label')

// 将label中的文字拆分开来，并赋予不同的动画延迟
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})