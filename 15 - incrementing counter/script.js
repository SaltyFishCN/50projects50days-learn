/*
 * Description:
 * Author:LinJ
 * Date:2021-11-26 11:12:46
 * LastEditors:LinJ
 * LastEditTime:2021-11-26 11:28:42
 */
const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCount = () => {
        // 转为数字
        const target = + counter.dataset.target;
        const cur = + counter.innerText;

        if(cur < target) {
            counter.innerText = `${Math.floor(cur + (target / 100))}`;
            // 递归增加
            setTimeout(updateCount,10)
        } else {
            counter.innerText = cur;
        }
    }

    updateCount();
})
