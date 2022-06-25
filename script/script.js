async function init (page){
    await includeHTML();
    navbarSelection(page);
}

function navbarSelection(page){
    if(page != 'index'){
        document.getElementById('navbarLinksSelection_' +page).style.backgroundColor = 'white' ;
    }
}