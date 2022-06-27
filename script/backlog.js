let test = [{
    'title': 'Test 123',
    'date': '23.06.2022',
    'catagory': 'Marketing',
    'urgency': 'high',
    'description': 'Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 Test 123 ',
    'status': 'todo'
},
{
    'title': 'Design Test',
    'date': '15.05.2022',
    'catagory': 'Design',
    'urgency': 'low',
    'description': 'Das ist eine Beschreibung Das ist eine Beschreibung Das ist eine Beschreibung Das ist eine Beschreibung Das ist eine Beschreibung Das ist eine Beschreibung Das ist eine Beschreibung Das ist eine Beschreibung Das ist eine Beschreibung ',
    'status': 'todo'
}, {
    'title': 'Managment Test',
    'date': '15.05.2022',
    'catagory': 'Management',
    'urgency': 'medium',
    'description': 'DAs ist eine Management strategy DAs ist eine Management strategy DAs ist eine Management strategy DAs ist eine Management strategy DAs ist eine Management strategy DAs ist eine Management strategy  ',
    'status': 'todo'
}];


function openSingleView(i) {
    document.getElementById('task_overlay').classList.remove('d_none');
    renderTaskSingleView(i);
}

function closeSingleView() {
    document.getElementById('task_overlay').classList.add('d_none');
}

function renderBacklockTasks() {
    let content = document.getElementById('content_backlog');
    content.innerHTML = '';
    for (let i = 0; i < test.length; i++) {
        const task = test[i];
        const color = task['urgency'];
        content.innerHTML += `
        <div onclick="openSingleView(${i})" id="backlog_row_${i}" class="backlog_rows">
            <div class="backlog_user">
                <img class="backlog_user_pic" src="img/Simon Weiss.jpg" alt="">
                <p class="backlog_user_name">Simon Weiss</p>
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
        `;
        getUrgencyBorderColour(i, color);
    }
}

function getUrgencyBorderColour(i, color) {
    document.getElementById(`backlog_row_${i}`).classList.add(`border_${color}`);
}

function renderTaskSingleView(i) {
    let content = document.getElementById('task_overlay');
    content.innerHTML = '';
    let task = test[i];
    let fontcolor = task['urgency'];
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
                    <img class="task_overlay_userpic" src="img/Simon Weiss.jpg" alt="">
                    <p class="task_overlay_username">Simon Weiss</p>
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