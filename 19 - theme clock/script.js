/*
 * Description:
 * Author:LinJ
 * Date:2021-11-27 17:03:41
 * LastEditors:LinJ
 * LastEditTime:2021-11-27 17:48:45
 */
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// 等比例对内外范围进行映射
const _scale = (cur, innerStart, innerEnd, outerStart, outerEnd)=>{
	return (cur - innerEnd) * (outerStart - outerEnd) / (innerStart - innerEnd)  + outerEnd;
}

const updateTime = () =>{
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hourEl.style.transform = `translate(-50%, -100%) rotate(${_scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${_scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${_scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hours} : ${minutes < 10 ? `0${ minutes }` : minutes}`
    dateEl.innerHTML = `${days[day]}, ${ months[month] } <span class="circle">${ date }</span>`


}

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    toggle.innerHTML =  html.classList.contains('dark') ? '白天模式' : '黑夜模式';

})
updateTime();
setInterval(updateTime, 1000);
