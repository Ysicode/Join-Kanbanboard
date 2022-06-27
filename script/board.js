let currentDraggedElement;

function allowDrop(ev) {
    ev.preventDefault();
  }

function renderTasksAtBoard() {
    renderTodos();
    renderInProgress();
    renderTesting();
    renderDone();
}

function renderTodos() {
    let content = document.getElementById('todos');
    content.innerHTML = '';
    let todo = test.filter(t => t['status'] == 'todo')
    for (let i = 0; i < todo.length; i++) {
        const task = todo[i];
        let color = task['urgency'];
        let index = task['id'];
        content.innerHTML += getTasksAtBoardColumns(index, task);
            getTodoBorderLeft(index, color);
    }
}

function renderInProgress() {
    let content = document.getElementById('in_progress');
    content.innerHTML = '';
    let inProgress = test.filter(t => t['status'] == 'inprogress')
    for (let i = 0; i < inProgress.length; i++) {
        const task = inProgress[i];
        let color = task['urgency'];
        let index = task['id'];
        content.innerHTML += getTasksAtBoardColumns(index, task);
            getTodoBorderLeft(index, color);
    }
}

function renderTesting() {
    let content = document.getElementById('testing');
    content.innerHTML = '';
    let testing = test.filter(t => t['status'] == 'testing')
    for (let i = 0; i < testing.length; i++) {
        const task = testing[i];
        let color = task['urgency'];
        let index = task['id'];
        content.innerHTML += getTasksAtBoardColumns(index, task);
            getTodoBorderLeft(index, color);
    }
}

function renderDone() {
    let content = document.getElementById('done');
    content.innerHTML = '';
    let done = test.filter(t => t['status'] == 'done')
    for (let i = 0; i < done.length; i++) {
        const task = done[i];
        let color = task['urgency'];
        let index = task['id'];
        content.innerHTML += getTasksAtBoardColumns(index, task);
            getTodoBorderLeft(index, color);
    }
}

function getTodoBorderLeft(index, color) {
    document.getElementById(`board_task_${index}`).classList.add(`border_${color}`);
}

function getTasksAtBoardColumns(index, task) {
    return `
    <div ondragstart="startDragging(${index})" draggable="true" id="board_task_${index}" onclick="openSingleView()" class="board_task">
        <p class="board_task_date">${task['date']}</p>
        <p class="board_task_title">${task['title']}</p>
        <p class="board_task_assigned_name">Simon Weiss</p>
        <div class="board_task_details">
            <p class="details_text">${task['description']}</p>
        </div>
    </div>
    `
}

function startDragging(index) {
currentDraggedElement = index;
}

function dropTask(newStatus) {
    test[currentDraggedElement]['status'] = newStatus;
    Array.from(document.getElementsByClassName('area_toDo_draganddrop')).forEach(
        function (element) {
            element.classList.remove('area_toDo_draganddrop');  
        }
    );
    setTimeout(() => {
        renderTasksAtBoard();
    }, 200);
}

function addHighlight(overColumn) {
    document.getElementById(`${overColumn}`).classList.add('area_toDo_draganddrop');
}

function removeHighlight(besideColumn) {
    document.getElementById(`${besideColumn}`).classList.remove('area_toDo_draganddrop');
}