/*
 * Description:
 * Author:LinJ
 * Date:2021-11-25 13:40:13
 * LastEditors:LinJ
 * LastEditTime:2021-11-25 13:40:13
 */
'use strict'

const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const global_variant = {
    // 随机的间隔时长
    INTERVAL_TIME: 100,
    // 随机的总时长
    RANDOM_DURATION: 3000
}
function _init() {
    // 焦点转到文本域中
    textarea.focus();
    textarea.addEventListener('keyup', startRandom);
    textarea.addEventListener('input', function() {
        createTags(this.value);
    });
}


function startRandom(e) {
    if(e.key === 'Enter') {
        // 清空文本域
        this.value = '';
        // 开始随机

        let interval = setInterval(()=>{
            let pickedTag = randomPickTag();
            // 随机高亮一个
            highlightTag(pickedTag);
            setTimeout(() => {
                // 取消高亮
                unHighlightTag(pickedTag);
            }, global_variant.INTERVAL_TIME)
        }, global_variant.INTERVAL_TIME);

        setTimeout(() => {
            clearInterval(interval);

            setTimeout(()=>{
                // 最后一次随机高亮
                let pickedTag = randomPickTag();
                highlightTag(pickedTag);
            }, global_variant.INTERVAL_TIME)
        },global_variant.RANDOM_DURATION)

    }
}

function createTags(text) {
    const tags = text
    // 去掉两侧空格
    .trim()
    // 去掉尾部的,
    .replace(/,?$/, '')
    // 分割
    .split(',')
    .map((tag) => `<span class="tag">${ tag }</span>`);
    tagsEl.innerHTML = tags.join('');
}

function randomPickTag() {
    const tags = tagsEl.querySelectorAll('.tag');
    const length = tags.length;

    return tags[Math.floor(Math.random() * length)];
}

function highlightTag(tagNode) {
    tagNode.classList.add('highlight');
}

function unHighlightTag(tagNode) {
    tagNode.classList.remove('highlight');
}
_init();
