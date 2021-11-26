/*
 * Description:
 * Author:LinJ
 * Date:2021-11-26 11:44:55
 * LastEditors:LinJ
 * LastEditTime:2021-11-26 12:25:29
 */
const cups = document.querySelector('.cups');
const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

// 激活水杯
const highlightCup = function (index) {
    const targetCup = smallCups[index];
    if(index === 7 && targetCup.classList.contains('full')) {
        // click the last one , and status is full
        index -= 1;
    } else if (targetCup.classList.contains('full') &&
    !targetCup.nextElementSibling.classList.contains('full')) {
        index -= 1;
    }
    smallCups.forEach((smallCup, idx) => {
        if(idx <= index) {
            smallCup.classList.add('full');
        } else {
            smallCup.classList.remove('full');
        }
    });
}

const updateTotalCup = function() {
    const fullCups = cups.querySelectorAll('.full');
    const fullCupsLength = fullCups.length;
    const smallCupsTotal = smallCups.length;

    // update percentage
    if (fullCupsLength === 0) {
        // hidden percentage
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        // show percentage
        percentage.style.visibility = 'visible';
        percentage.style.height = `${330 * fullCupsLength / smallCupsTotal}px`;
        percentage.innerText = `${100 * fullCupsLength / smallCupsTotal}%`;
    }

    // update liters
    if(fullCupsLength === smallCupsTotal) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCupsLength / 1000)}L`;
    }    
}

updateTotalCup();

smallCups.forEach((smallCup, index) => smallCup.addEventListener('click', ()=>{
    highlightCup(index);

    updateTotalCup();
}));
