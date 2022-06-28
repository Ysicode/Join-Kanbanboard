function openSingleView(i) {
    console.log(i)
    document.getElementById('task_overlay').classList.remove('d_none');
    renderTaskSingleView(i);
}

function closeSingleView() {
    document.getElementById('task_overlay').classList.add('d_none');
}

function renderBacklogTasks() {
    let content = document.getElementById('content_backlog');
    content.innerHTML = '';
    for (let i = tasks.length -1; i >= 0 ; i--) {
        const task = tasks[i];
        content.innerHTML += templateRenderBacklogTasks(task,i);
        getUrgencyBorderColour(task,i);
    }
}

function getUrgencyBorderColour(task,i) {
    const color = task['urgency'];
    document.getElementById(`backlog_row_${i}`).classList.add(`border_${color}`);
}

function renderTaskSingleView(i) {
    let content = document.getElementById('task_overlay');
    content.innerHTML = '';
    let task = tasks[i];
    let fontcolor = tasks[i]['urgency'];
    content.innerHTML += `
    <img onclick="closeSingleView()" class="cancel_icon" src="img/x.png" alt="">
        <div class="task_overlay">
            <div class="task_overlay_head">
                <p class="task_overlay_date">${task['date']}</p>
                <div class="d_flex task_overlay_title_line">
                    <p class="task_overlay_title">${task['title']}</p>
                    <p id="urgency_overlay" class="task_overlay_importance">${task['urgency']}<p class="">Urgency</p> </p>
                </div>
                <div class="task_overlay_user">
                    <img class="task_overlay_userpic" src="img/${task['user']}.jpg" alt="">
                    <p class="task_overlay_username">${task['user']}</p>
                </div>
            </div>
            <div class="task_overlay_bottom">
                <p class="task_overlay_details">DETAILS</p>
                <div class="area_details">
                    <span class="area_details_text">${task['description']}
                    </span>
                </div>
            </div>
        </div>
    `;
    geturgencyFontColor(fontcolor);
}

function geturgencyFontColor(fontcolor) {
    document.getElementById('urgency_overlay').classList.add(`color_${fontcolor}`)
}