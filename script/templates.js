// Templates for backlog.js
function templateRenderBacklogTasks(task, i) {
    return /*html*/`
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

function templateEditTask(id) {
    return /*html*/`
    <div class="card">
        <img onclick="closeSingleView()" class="cancel_icon" src="img/x.png" alt="">
            <form onsubmit="event.preventDefault(), saveEdit(${id})">
                <div class="addTask">
                    <div class="addTaskChild fontColor">
                        <div class="catagoryHeadline">TITLE</div>
                        <input required minlength="2" class="userInput" id="title" type="text" placeholder="Give your task a title">
                    </div>
                    <div class="addTaskChild fontColor">
                        <div class="catagoryHeadline">DUE DATE</div>
                        <input required class="userInput" type="date" id="date">
                    </div>
                </div>
                <div class="addTask">
                    <div class="addTaskChild fontColor">
                        <div class="catagoryHeadline">CATAGORY</div>
                        <select required class="userInput" id="catagory">
                            <option>Marketing</option>
                            <option>Development</option>
                            <option>Design</option>
                        </select>
                    </div>
                    <div class="addTaskChild fontColor">
                        <div class="catagoryHeadline">URGENCY</div>
                        <select required class="userInput" id="urgency">
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                </div>
                <div class="addTask">
                    <div class="addTaskChild fontColor">
                        <div class="catagoryHeadline"> DESCRIPTION </div>
                        <textarea required minlength="5" class="description" type="text" placeholder="Type a description of your task" id="description"></textarea>
                    </div>
                    <div class="addTaskChild fontColor">
                        <div class="btnContainer">
                            <button onclick="deleteTask(${id})" class="createbtn" type="submit">Delete</button>
                            <button class="createbtn" type="submit">SAVE EDIT</button>
                        </div>
                    </div>
                </div>
            </form>
    </div>
`
}
// Templates for board.js

function templateRenderBoards(index, task) {
    return /*html*/`
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