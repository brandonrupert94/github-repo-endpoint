


function showRepoList(responseJson){
    console.log(responseJson[0]);
    let repoTitleHtml= '';
    for (let i = 0; i < responseJson.length; i++) {
        let url= `"https://api.github.com/users/${responseJson[i].full_name}"`
        repoTitleHtml += `<li><h2>${responseJson[i].name}</h2>
            <a href=${url}>${url}</a></h3>
            </li>`;
    }
    $('.list').html(repoTitleHtml);
};

function retrieveList(){
     let userName = document.getElementById('git-handle').value;
    console.log(userName);
   
    let url = `https://api.github.com/users/${userName}/repos`;
    fetch(url)
        .then(response => {
            if (response.ok){
                return response.json();
            } 
                throw new Error(response.status);
            
        })
        .then(responseJson => showRepoList(responseJson))
        .catch(err => {
            $('.error-message').show();
        });
        
    console.log('retrieveList ran');
}






function getRepoList(){
    $('main').submit(event => {
        event.preventDefault();
        retrieveList();
    })
    
};



function handleApp(){
    console.log('App is ready to run');
    getRepoList();
}


$(handleApp());