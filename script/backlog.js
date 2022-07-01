function openSingleView(i) {
    document.getElementById('task_overlay').classList.remove('d_none');
    editTask(i);
}

function closeSingleView() {
    document.getElementById('task_overlay').classList.add('d_none');
}

function renderBacklogTasks() {
    let content = document.getElementById('content_backlog');
    content.innerHTML = '';
    for (let i = tasks.length - 1; i >= 0; i--) {
        const task = tasks[i];
        content.innerHTML += templateRenderBacklogTasks(task, i);
        getUrgencyBorderColour(task, i);
    }
}

function getUrgencyBorderColour(task, i) {
    const color = task['urgency'];
    document.getElementById(`backlog_row_${i}`).classList.add(`border_${color}`);
}

async function deleteTask(i) {
    tasks.splice(i, 1);
    closeSingleView();
    await saveTasks();
    forwardingNextFunctions(currentPage);
}

function editTask(id) {
    let content = document.getElementById('task_overlay');
    let status =  tasks[id]['status'];
    content.innerHTML = '';
    content.innerHTML = `
    <div class="card">
    <img onclick="closeSingleView()" class="cancel_icon" src="img/x.png" alt="">
                <form onsubmit="event.preventDefault(), createTask()">
                    <div class="addTask">
                        <div class="addTaskChild fontColor">
                            <div class="catagoryHeadline">TITLE</div>
                            <input required minlength="2" class="userInput" id="title" type="text"
                            placeholder="Give your task a title">
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
                            <textarea required minlength="5" class="description" type="text"
                            placeholder="Type a description of your task" id="description"></textarea>
                        </div>

                        <div class="addTaskChild fontColor">
                            <div class="catagoryHeadline"> ASSIGNED TO </div>
                            <img id="user_1" onclick="selectUser('1')" class="taskUserImg" src="./img/Simon Weiss.jpg">
                            <img id="user_2" onclick="selectUser('2')" class="taskUserImg"
                                src="./img/Kevin Schimke.jpg">
                            <img id="user_3" onclick="selectUser('3')" class="taskUserImg" src="./img/Baris Aslan.jpg">
                            <div class="btnContainer">
                                <button onclick="deleteTask(${id})" class="cancelbtn" type="reset">DELETE</button>
                                <button onclick="saveEdit(${id}, ${status})" class="createbtn" type="submit">SAVE EDIT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    `;
    document.getElementById('title').value = tasks[id]['title'];
    document.getElementById('date').value =  tasks[id]['date'];
    document.getElementById('urgency').value = tasks[id]['urgency'];
    document.getElementById('description').value = tasks[id]['description'];
}

async function saveEdit(id, status) {
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let catagory = document.getElementById('catagory');
    let urgency = document.getElementById('urgency');
    let description = document.getElementById('description');
    let user;
    if(currentUser == 'Gast') {
        user = users[0];
    }else{
        user = users[currentUser]
    }
let task = {
    'title': title.value,
   'date': date.value,
    'category': catagory.value,
    'urgenncy': urgency.value,
    'description': description.value,
    'user': user,
    'id': id,
    'status': status
}
tasks.splice(0, 1);
  tasks.push(task);
    closeSingleView();
    await createTask();

}

function geturgencyFontColor(fontcolor) {
    document.getElementById('urgency_overlay').classList.add(`color_${fontcolor}`)
}