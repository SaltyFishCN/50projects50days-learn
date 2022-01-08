/*
 * Description:
 * Author:LinJ
 * Date:2022-01-08 18:55:39
 * LastEditors:LinJ
 * LastEditTime:2022-01-08 18:55:39
 */
const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      // 将完整的背景图片进行切割
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

createBoxes();
