/*
 * Description:
 * Author:LinJ
 * Date:2021-11-21 15:19:17
 * LastEditors:LinJ
 * LastEditTime:2021-11-21 15:19:17
 */
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight * 4 / 5;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            // 出现在可视范围内时
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}