let currentDraggedElement;

function allowDrop(ev) {
    ev.preventDefault();
}

function startDragging(index) {
    currentDraggedElement = index;
}
    
function dropTask(newStatus) {
    tasks[currentDraggedElement]['status'] = newStatus;
    Array.from(document.getElementsByClassName('area_toDo_draganddrop')).forEach(
        function (element) {
            element.classList.remove('area_toDo_draganddrop');  
            }
        );
    endMoveToOtherBoard();
}

async function endMoveToOtherBoard(){
    await saveTasks()
    renderTasksAtBoard();
}
    
function addHighlight(overColumn) {
    document.getElementById('tasks_'+`${overColumn}`).classList.add('area_toDo_draganddrop');
}
    
function removeHighlight(besideColumn) {
    document.getElementById('tasks_'+`${besideColumn}`).classList.remove('area_toDo_draganddrop');
}

function renderTasksAtBoard() {
    renderBoards('todo');
    renderBoards('in_progress');
    renderBoards('testing');
    renderBoards('done');
}

function renderBoards(board) {
    let content = document.getElementById('tasks_'+board);
    content.innerHTML = '';
    let boardFiltered = tasks.filter(t => t['status'] == board)

    for (let i = 0; i < boardFiltered.length; i++) {
        const task = boardFiltered[i];
        let color = task['urgency'];
        let taskID = task['id'];
        content.innerHTML += getTasksAtBoardColumns(taskID, task);
        getTodoBorderLeft(taskID, color);
    }
}

function getTodoBorderLeft(index, color) {
    document.getElementById(`board_task_${index}`).classList.add(`border_${color}`);
}

function getTasksAtBoardColumns(index, task) {
    return `
    <div ondragstart="startDragging(${index})" draggable="true" id="board_task_${index}" onclick="openSingleView(${index})" class="board_task">
        <p class="board_task_date">${task['date']}</p>
        <p class="board_task_title">${task['title']}</p>
        <p class="board_task_assigned_name">${task['user']}</p>
        <div class="board_task_details">
            <p class="details_text">${task['description']}</p>
        </div>
    </div>
    `
}