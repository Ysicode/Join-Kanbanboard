setURL('http://gruppe-265.developerakademie.net/smallest_backend_ever');

async function init (page){
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
}