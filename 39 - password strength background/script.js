/*
 * Description:
 * Author:LinJ
 * Date:2022-01-08 14:59:17
 * LastEditors:LinJ
 * LastEditTime:2022-01-08 14:59:17
 */
const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;

  // 调节背景图片虚化(blur)
  background.style.filter = `blur(${blurValue}px)`;
})
