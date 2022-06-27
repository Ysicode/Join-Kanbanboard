let tasks = [];

function createTask() {
    let task = getTaskFieldsValue();
    tasks.push(task);
    saveTasks();
    clearTaskFields()
}

function getTaskFieldsValue(){
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let catagory = document.getElementById('catagory');
    let urgency = document.getElementById('urgency');
    let description = document.getElementById('description');

    return{
        'title': title.value,
        'date': date.value,
        'catagory': catagory.value,
        'urgency': urgency.value,
        'description': description.value,
        'status': 'todo'
<<<<<<< HEAD
    }
=======
    };

    tasks.push(task);


        taskAsString();

    

    title.value ='';
    date.value ='';
    catagory.value ='';
    urgency.value ='';
    description.value ='';
>>>>>>> 52a9e9d4629d0614ba1a531161344963c4609bd3
}

async function saveTasks() {
    let taskAsString = JSON.stringify(tasks);
    await backend.setItem('tasks', taskAsString);
}

function clearTaskFields() {
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('catagory').value = '';
    document.getElementById('urgency').value = '';
    document.getElementById('description').value = '';
}
