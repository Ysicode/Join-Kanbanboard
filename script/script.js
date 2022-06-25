// setURL('https://gruppe-265.developerakademie.net/smallest_backend_ever');

async function init (page){
    await includeHTML();
    navbarSelection(page);
}

function navbarSelection(page){
    if(page != 'index'){
        document.getElementById('navbarLinksSelection_' +page).style.backgroundColor = 'white' ;
    }
}