let tasks = [];

function createTask() {
    let task = getTaskFieldsValue();
    tasks.push(task);
    saveTasks();
    forwardingToBoard();
}

function getTaskFieldsValue(){
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let catagory = document.getElementById('catagory');
    let urgency = document.getElementById('urgency');
    let description = document.getElementById('description');
    let id = tasks.length;

    return{
        'title': title.value,
        'date': date.value,
        'catagory': catagory.value,
        'urgency': urgency.value,
        'description': description.value,
        'status': 'todo',
        'id': id
    }
}

async function saveTasks() {
    let taskAsString = JSON.stringify(tasks);
    await backend.setItem('tasks', taskAsString);
}

function forwardingToBoard(){
    window.open("board.html");
}