/*
 * Description: 将按键显示在页面中
 * Author:LinJ
 * Date:2021-11-24 10:42:53
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 10:46:45
 */
const insert = document.getElementById('insert')

window.addEventListener('keydown' ,function(e){
  insert.innerHTML = `
  <div class="key">
    ${e.key === " " ? "Space" : e.key}
    <small>event.key:</small>
  </div>
  <div class="key">
    ${e.code}
    <small>event.code:</small>
  </div>
  <div class="key">
  ${e.keyCode}
  <small>event.keyCode:</small>
  </div>`;
  console.log(e);
})