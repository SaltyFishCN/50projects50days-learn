/*
 * Description: 使用localStorage存储todo list
 * Author:LinJ
 * Date:2022-01-18 09:31:47
 * LastEditors:LinJ
 * LastEditTime:2022-01-18 10:24:38
 */
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

// update localStorage
function updateLS() {
    todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(todo) {
    let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }

    if(todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;
        // 切换完成状态
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLS();
        }) 
        // contextmenu 右键
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEl.remove();
            updateLS();
        }) 

        todosUL.appendChild(todoEl);

        input.value = '';

        updateLS();
    }
}

if(todos) {
    todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

