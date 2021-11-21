/*
 * Description:
 * Author:LinJ
 * Date:2021-11-21 10:40:18
 * LastEditors:LinJ
 * LastEditTime:2021-11-21 10:51:25
 */
const loadText = document.querySelector('.loading-text');
const backGround = document.querySelector('.bg');


function BlurLoading({loadText, backGround}) {
  let load = 0;
  let intervalHandle = null;
  const bluring = ()=>{
    load ++;
    if(load > 99){
      clearInterval(intervalHandle);
    }

    // 等比例对内外范围进行映射
    const _scale = (cur, innerStart, innerEnd, outerStart, outerEnd)=>{
      return (cur - innerEnd) * (outerStart - outerEnd) / (innerStart - innerEnd)  + outerEnd;
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = _scale(load, 100, 0, 0, 1);
    backGround.style.filter = `blur(${_scale(load, 100, 0, 0, 30)}px)`;
  }
  return {
    start() {
      intervalHandle = setInterval(bluring, 30);
    }
  }
  
}
BlurLoading({loadText, backGround}).start();