/*
 * Description:
 * Author:LinJ
 * Date:2021-12-04 13:59:51
 * LastEditors:LinJ
 * LastEditTime:2021-12-04 13:59:51
 */
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
// offsetHeight 像素高度
function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}