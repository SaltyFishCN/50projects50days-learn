/*
 * Description:  api: https://randomuser.me/api 参数 results 需要的结果数
 * Author:LinJ
 * Date:2022-01-15 10:33:48
 * LastEditors:LinJ
 * LastEditTime:2022-01-15 10:40:28
 */
const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

// 异步获取并渲染到页面中
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');

    const { results } = await res.json();

    // Clear result
    result.innerHTML = '';

    results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        result.appendChild(li);
    })
}

// 筛选数据
function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}

getData();

// bind event
filter.addEventListener('input', (e) => filterData(e.target.value));
