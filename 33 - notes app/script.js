/*
 * Description: 笔记簿(写入localStorage)
 * Author:LinJ
 * Date:2021-12-17 23:34:04
 * LastEditors:LinJ
 * LastEditTime:2021-12-21 19:10:16
 */
const addBtn = document.getElementById('add');
// 获取localStorage中的数据
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
    notes.forEach(note => addNewNote(note));
}
// 增加新的笔记， text: 笔记内容
function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {
        note.remove();

        updateLS();
    })

    // 切换编辑状态
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        updateLS();
    })

    document.body.appendChild(note);
}

// 更新localStorage
function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem('notes', JSON.stringify(notes));
}
addBtn.addEventListener('click', () => addNewNote());
