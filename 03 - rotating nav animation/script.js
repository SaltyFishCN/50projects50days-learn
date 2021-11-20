/*
 * Description:
 * Author:LinJ
 * Date:2021-11-20 11:34:50
 * LastEditors:LinJ
 * LastEditTime:2021-11-20 13:37:21
 */
const closeBtn = document.querySelector('#close');
const openBtn = document.querySelector('#open');
const container = document.querySelector('.container');

openBtn.addEventListener('click', ()=>{
  container.classList.add('show-nav');
})

closeBtn.addEventListener('click', ()=>{
  container.classList.remove('show-nav');
})