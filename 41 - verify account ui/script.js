/*
 * Description:
 * Author:LinJ
 * Date:2022-01-15 09:58:03
 * LastEditors:LinJ
 * LastEditTime:2022-01-15 10:00:44
 */
const codes = document.querySelectorAll('.code');
const codes_length = codes.length - 1;
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = '';
            // 聚焦到下一个
            setTimeout(() => codes[idx === codes_length ? 0 : (idx + 1)].focus(), 10);
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx === codes_length ? 0 : (idx + 1)].focus(), 10);
        }
    })
})