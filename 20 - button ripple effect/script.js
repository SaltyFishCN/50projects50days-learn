/*
 * Description:
 * Author:LinJ
 * Date:2021-11-28 10:52:30
 * LastEditors:LinJ
 * LastEditTime:2021-11-28 10:52:30
 */
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // 点击事件在容器内部的坐标
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)
        
        // 动画结束后删除元素
        setTimeout(() => circle.remove(), 500)
    })
})