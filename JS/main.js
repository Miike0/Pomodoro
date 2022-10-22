const tasks = [];
let time = 0; 
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector('#bAdd');
const idTask = document.querySelector('#idTask');
const form = document.querySelector('#form');
const taskName = document.querySelector('#time #taskName');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (idTask.value != '') {
        createTask(idTask.value);
        idTask.value = '';
        renderTask();
    }
});

function createTask(value) {
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        tittle: value,
        completed: false,
    };

    tasks.unshift(newTask);
}

function renderTask() {
    const html = tasks.map(task => {
        return `
            <div class="task">
                <div class="completed">${task.completed ? `<span class="done">Done!</span>` : `<button class ="start-button" data-id="${task.id}">Start</button>` } </div>
                <div class="tittle">${task.tittle}</div>
            </div>
        `;
    });

}