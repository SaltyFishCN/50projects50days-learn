/*
 * Description:
 * Author:LinJ
 * Date:2021-12-21 23:01:54
 * LastEditors:LinJ
 * LastEditTime:2021-12-21 23:08:36
 */
const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

// 重置dom
function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  })

  nums[0].classList.add('in');
}

// 执行动画
function runAnimation() {
  const nextToLast = nums.length - 1;
  nums.forEach((num, idx) => {
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        // 当前项'进入'动画结束，继续执行'离开'动画
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // 当前项'离开'动画结束，下一项执行 '进入'
        num.nextElementSibling.classList.add('in');
      } else {
        // 结束
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    })
  })
}

runAnimation();

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
})
