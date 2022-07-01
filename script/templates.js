// Templates for backlog.js
function templateRenderBacklogTasks(task,i){
    return`
    <div onclick="openSingleView(${i})" id="backlog_row_${i}" class="backlog_rows">
        <div class="backlog_user">
            <img class="backlog_user_pic" src="img/${task['user']}.jpg" alt="">
            <p class="backlog_user_name">${task['user']}</p>
    </div>
    <div class="backlog_title">
        <p class="backlog_task_title">${task['title']}</p>
    </div>
    <div class="backlog_category">
        <p class="backlog_task_category">${task['catagory']}</p>
    </div>
    <div class="backlog_details">
        <p class="backlog_task_details">${task['description']}</p>
    </div>
</div>
    `
}

// Templates for board.js

function templateRenderBoards(index, task) {
    return `
    <div ondragstart="startDragging(${index})" draggable="true" id="board_task_${index}" class="board_task">
        <p class="board_task_date">${task['date']}</p>
        <p class="board_task_title">${task['title']}</p>
        <p id="user_name_board${index}" class="board_task_assigned_name">${task['user']}</p>
        <div class="board_task_details">
            <p class="details_text">${task['description']}</p>
        </div>
    </div>
    `
}