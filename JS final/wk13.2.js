let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('../JS final/projects.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        //console.log(projects);
        proj= projects;
        findProjectInJSON(projects);
        //parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })


function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
        }else{
            continue;
        }
    }
}

function buildPage(project){
   // console.log(project);
   document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
}

// description of given project
function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href="../JS final/${data.projects[i].subdomain}.html"}>
    <div class="row project" id="${data.projects[i].subdomain}">
        <p>${data.projects[i].description}</p></div>
        </div></a>`;
    }
}