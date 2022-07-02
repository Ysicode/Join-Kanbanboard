let currentPage;
let tasks = [];

/**
 * This function is used to initialize
 * 
 * @param {*} page - This is the current page
 */
async function init (page){
    currentPage = page;
    await includeHTML();
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks'))|| [];
    navbarSelection(page);
    forwardingNextFunctions(page);
}

/**
 * 
 * This function is used to show the navbar
 * @param {*} page - This is the current page
 */
function navbarSelection(page){
    if(page != 'index'){
        document.getElementById('navbarLinksSelection_' +page).style.backgroundColor = 'white' ;
    }
}

/**
 * This function is used to render the board or the backlog if one of them is opened
 * 
 * @param {*} page 
 */
function forwardingNextFunctions(page){
    if(page == 'board'){
        renderTasksAtBoard();
    }
    if(page == 'backlog'){
        renderBacklogTasks();
    }
}

/**
 * This function is used to save a task
 * 
 */
async function saveTasks() {
    let taskAsString = JSON.stringify(tasks);
    await backend.setItem('tasks', taskAsString);
}