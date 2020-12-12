






function retrieveList(){
    let username = document.getElementById('#git-handle').val();
    console.log(username);
}






function getRepoList(){
    $('#git-repo').submit(event => {
        event.preventDefault();
        retrieveList();
    })
    
};



function handleApp(){
    console.log('App is ready to run');
    getRepoList();
}


$(handleApp());