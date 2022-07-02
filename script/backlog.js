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

function geturgencyFontColor(fontcolor) {
    document.getElementById('urgency_overlay').classList.add(`color_${fontcolor}`)
}

function editTask(id) {
    let content = document.getElementById('task_overlay');
    content.innerHTML = '';
    content.innerHTML = templateEditTask(id);
    loadInfosEditTask(id);
}

function loadInfosEditTask(id){
    document.getElementById('title').value = tasks[id]['title'];
    document.getElementById('date').value =  tasks[id]['date'];
    document.getElementById('urgency').value = tasks[id]['urgency'];
    document.getElementById('description').value = tasks[id]['description'];
}

async function saveEdit(id) {
    overwriteInfosEditTask(id);
    await saveTasks();
    reloadBacklog();
}

function overwriteInfosEditTask(id){
    tasks[id]['title'] = document.getElementById('title').value
    tasks[id]['date'] = document.getElementById('date').value
    tasks[id]['category'] = document.getElementById('catagory').value
    tasks[id]['urgency'] = document.getElementById('urgency').value
    tasks[id]['description'] = document.getElementById('description').value
}

async function deleteTask(i) { 
    tasks.splice(i, 1);
    await saveTasks();
    reloadBacklog();
}

function reloadBacklog() {
    window.open("backlog.html", "_self");
}