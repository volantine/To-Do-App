document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Done</button>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);

        saveTasks();

        taskInput.value = '';
    }
}

function completeTask(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');

    saveTasks();
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();

    saveTasks();
}

function removeCompletedTasks() {
    const taskList = document.getElementById('task-list');
    const completedTasks = taskList.getElementsByClassName('completed');

    while (completedTasks.length > 0) {
        completedTasks[0].remove();
    }

    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('task-list');
    localStorage.setItem('tasks', taskList.innerHTML);
}

function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = localStorage.getItem('tasks') || '';
}
