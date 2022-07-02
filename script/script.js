let currentPage;
let tasks = [];
let users = ['Gast','Simon Weiss', 'Kevin Schimke', 'Baris Aslan'];
let currentUser = 'Gast';

async function init (page){
    currentPage = page;
    await includeHTML();
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks'))|| [];
    navbarSelection(page);
    forwardingNextFunctions(page);
}

function navbarSelection(page){
    if(page != 'index'){
        document.getElementById('navbarLinksSelection_' +page).style.backgroundColor = 'white' ;
    }
}

function forwardingNextFunctions(page){
    if(page == 'board'){
        renderTasksAtBoard();
    }
    if(page == 'backlog'){
        renderBacklogTasks();
    }
}

async function saveTasks() {
    let taskAsString = JSON.stringify(tasks);
    await backend.setItem('tasks', taskAsString);
}