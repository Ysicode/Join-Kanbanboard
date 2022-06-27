function renderTasksAtBoard() {
    renderTodos();
}

function renderTodos() {
    let content = document.getElementById('todos');
    content.innerHTML = '';
    for (let i = 0; i < test.length; i++) {
        const task = test[i];
        let color = task['urgency'];
        if (task.status == 'todo') {
            content.innerHTML += `
            <div id="board_task_${i}" onclick="openSingleView()" class="board_task">
                <p class="board_task_date">${task['date']}</p>
                <p class="board_task_title">${task['title']}</p>
                <p class="board_task_assigned_name">Simon Weiss</p>
                <div class="board_task_details">
                    <p class="details_text">${task['description']}</p>
                </div>
            </div>
            `;
        }  
        getUrgencyBorderLeft(i, color);
    }

   
}

function getUrgencyBorderLeft(i, color) {
document.getElementById(`board_task_${i}`).classList.add(`border_${color}`);
}