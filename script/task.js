let users = ['Gast','Simon Weiss', 'Kevin Schimke', 'Baris Aslan'];
let currentUser = 'Gast';

/**
 * This function is used to create a task
 * 
 */
async function createTask() {
    let task = getTaskFieldsValue();
    tasks.push(task);
    await saveTasks();
    forwardingToBoard();
}

/**
 * This function gets the value of the input the current user is typing
 * 
 * @returns - The value in JSON
 */
function getTaskFieldsValue() {
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let catagory = document.getElementById('catagory');
    let urgency = document.getElementById('urgency');
    let description = document.getElementById('description');
    let id = tasks.length;
    let user;
    if(currentUser == 'Gast') {
        user = users[0];
    }else{
        user = users[currentUser]
    }
    return {
        'title': title.value,
        'date': date.value,
        'catagory': catagory.value,
        'urgency': urgency.value,
        'description': description.value,
        'status': 'todo',
        'id': id,
        'user' : user
    }
}

/**
 * This function is used to open the board.html
 * 
 */
function forwardingToBoard() {
    window.open("board.html", "_self");
}

/**
 * This function used add a class to the current user
 * 
 * @param {string} userID - This is the current user
 */
function selectUser(userID) {
    if (currentUser == 'Gast') {
        currentUser = userID;
        document.getElementById('user_' + currentUser).classList.add('taskUserSelected')
    } else {
        if (userID != currentUser) {
            document.getElementById('user_' + currentUser).classList.remove('taskUserSelected')
            document.getElementById('user_' + userID).classList.add('taskUserSelected')
        } else {
            document.getElementById('user_' + currentUser).classList.add('taskUserSelected')
        }
    }
    currentUser = userID;
}