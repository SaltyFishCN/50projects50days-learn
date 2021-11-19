/*
 * Description:
 * Author:LinJ
 * Date:2021-11-19 12:54:36
 * LastEditors:LinJ
 * LastEditTime:2021-11-19 13:19:38
 */
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const MAX_LENGTH = circles.length - 1;
let curIdx = 0;

// 回退按钮点击处理
function prevClickHandle(e) {
	curIdx --;
	curIdx = curIdx < 0 ? 0 : curIdx;

	update(curIdx);
}

// 前进按钮点击处理
function nextClickHandle(e) {
	curIdx ++;
	curIdx = curIdx > MAX_LENGTH ? MAX_LENGTH : curIdx;

	update(curIdx);	
}

// 更新页面
function update(curIdx) {
	// update circle
	circles.forEach((circle, index)=>{
		if(index > curIdx) {
			circle.classList.remove('active');
		} else {
			circle.classList.add('active');
		}
	})
	
	// update process
	progress.style.width = `${curIdx *100 / MAX_LENGTH}%`;

	// update button
	if(curIdx === MAX_LENGTH) {
		nextBtn.disabled = true;
	} else if(curIdx === 0) {
		prevBtn.disabled = true;
	}	else {
		nextBtn.disabled = false;
		prevBtn.disabled = false;
	}
}

// bind event
prevBtn.addEventListener("click", prevClickHandle);
nextBtn.addEventListener("click", nextClickHandle);
