/*
 * Description: 密码生成器
 * Author:LinJ
 * Date:2021-12-17 00:11:52
 * LastEditors:LinJ
 * LastEditTime:2021-12-17 00:32:32
 */
const resultEl = document.getElementById('result');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
// setting
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
// 生成器
const randomFunc = {
    hasLower: getRandomLower,
    hasUpper: getRandomUpper,
    hasNumber: getRandomNumber,
    hasSymbol: getRandomSymbol,
}

// a-z ASCII 97 - 122
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// A-Z ASCII 65-90
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// 0-9 ASCII 48-57
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// 生成随机符号
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(option, length) {
    let finalPassword = '';
    // 筛选需要用到的生成器名
    let selectArr = Object.entries(option).filter(item => item[1]).map(item=>item[0]);
    let arrLength = selectArr.length;

    if(!arrLength) return '';
    // 根据传入的option来筛选需要用到的生成器
    for(let i = 0; i < length; i++) {
        let selectKey = selectArr[Math.floor(Math.random() * arrLength)];
        finalPassword += randomFunc[selectKey]();
    }

    return finalPassword;
}

// 复制到剪切板
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) { return }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    // 复制
    document.execCommand('copy');
    textarea.remove();
})

// 生成密码
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const option = {
        hasLower: lowercaseEl.checked,
        hasUpper: uppercaseEl.checked,
        hasNumber: numbersEl.checked,
        hasSymbol: symbolsEl.checked,
    }

    resultEl.innerText = generatePassword(option, length)
})


